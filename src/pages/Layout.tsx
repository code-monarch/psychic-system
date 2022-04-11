import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppShell, Menu, Navbar, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationList } from '../components/NavigationList';
import { DashboardView } from './DashboardView';
import { useAuth } from '../context/auth-context';

import { MEMBER_ROUTE } from '../lib/constants';
import { Requests } from './Requests';
import { Wallets } from './wallet/Wallets';
import { Transactions } from './TransactionsPage';
import { Logo } from '../components/Logo';
import { UserAvatar } from '../components/Avatar';
import { DashboardLandingPage } from './DashboardLandingPage';
import { CurrencyManagement } from './CurrencyManagement';
import { getNavigationItems } from '../lib/utils';

const SideNav = styled.div`
  color: ${({ theme }) => theme.colors.primary.grey};
  font-size: 14px;
  line-height: 24px;
  padding: 24px 0 0 16px;
`;

const User = styled.div`
  color: ${({ theme }) => theme.colors.primary.darkgrey};
  font-size: 13px;
  line-height: 24px;
  padding: 24px 0 0 16px;
  display: flex;
  cursor: pointer;
`;

const UserName = styled.p`
  margin-left: 10px;
`;

export const Layout = (): JSX.Element => {
  const { appUser, userRole, useSignout } = useAuth();
  const { t } = useTranslation();
  const [isNavOpened] = useState(false);
  const { mutate: signOut } = useSignout();

  const logout = () => {
    signOut(undefined, {
      onSuccess: () => {},
    });
  };

  return (
    <AppShell
      padding={0}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          position={{ top: 0, left: 0 }}
          hiddenBreakpoint="sm"
          hidden={!isNavOpened}
          width={{ sm: 180, lg: 210 }}
        >
          <Navbar.Section grow>
            <SideNav>
              <Logo imageWidth={100} leftAlign />
              <NavigationList itemSpacing={20} links={getNavigationItems(t)} />
            </SideNav>
          </Navbar.Section>
          <Navbar.Section>
            <Menu
              control={
                <User>
                  <UserAvatar />
                  <UserName>{appUser.given_name}</UserName>
                </User>
              }
            >
              <Menu.Item color="red" onClick={logout}>
                Logout
              </Menu.Item>
            </Menu>
          </Navbar.Section>
        </Navbar>
      }
    >
      <div>
        <Switch>
          <Route path={MEMBER_ROUTE.GET_STARTED} render={() => <DashboardLandingPage />} />
          <Route path={MEMBER_ROUTE.DASHBOARD} exact>
            <DashboardView displayName={appUser.given_name} />
          </Route>
          <Route path={MEMBER_ROUTE.REQUESTS} exact>
            <Requests />
          </Route>
          <Route path={MEMBER_ROUTE.WALLETS} exact>
            <Wallets displayName={appUser.given_name} />
          </Route>
          <Route path={MEMBER_ROUTE.TRANSACTIONS} exact>
            <Transactions />
          </Route>
          <Route path={MEMBER_ROUTE.CURRENCY_MANAGEMENT} exact>
            <CurrencyManagement />
          </Route>
          <Route path="*" exact={false}>
            <Redirect to={{ pathname: MEMBER_ROUTE.GET_STARTED }} />
          </Route>
        </Switch>
      </div>
    </AppShell>
  );
};
