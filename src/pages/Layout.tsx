import styled, { useTheme } from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppShell, Burger, Header, MediaQuery, Menu, Navbar } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { NavigationList } from '../components/NavigationList';
import { DashboardView } from './DashboardView';
import { useAuth } from '../context/auth-context';

import { device, MEMBER_ROUTE } from '../lib/constants';
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
  const [isNavOpened, setIsNavOpened] = useState(false);
  const { mutate: signOut } = useSignout();
  const matchesTabletSize = useMediaQuery(device.tablet);

  const hideNavigation = () => setIsNavOpened(false);

  const theme: any = useTheme();
  const { black } = theme.colors.primary;

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
          p={16}
          position={{ top: 0, left: 0 }}
          hiddenBreakpoint="sm"
          hidden={!isNavOpened}
          width={{ sm: 180, lg: 210 }}
        >
          <Navbar.Section grow>
            <SideNav>
              <Logo imageWidth={100} leftAlign />
              <NavigationList itemSpacing={20} links={getNavigationItems(t)} hideNavigation={hideNavigation} />
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
                {t('logout.title')}
              </Menu.Item>
            </Menu>
          </Navbar.Section>
        </Navbar>
      }
      header={
        matchesTabletSize ? (
          <Header height={50} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={isNavOpened}
                  onClick={() => setIsNavOpened((o) => !o)}
                  size="sm"
                  color={black}
                  mr="xl"
                />
              </MediaQuery>

              {/* <Text>Application header</Text> */}
            </div>
          </Header>
        ) : null
      }
    >
      <div>
        <Switch>
          <Route path={MEMBER_ROUTE.GET_STARTED} render={() => <DashboardLandingPage />} />
          <Route path={MEMBER_ROUTE.DASHBOARD} exact>
            <DashboardView />
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
