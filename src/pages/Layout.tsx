import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppShell, Menu, Navbar, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { NavigationList } from '../components/NavigationList';
import { DashboardView } from './DashboardView';
import { useAuth } from '../context/auth-context';

import { navIconsActive as activeIcons, navIconsDefault as defaultIcons } from '../assets/images/icons/navigation';
import { MEMBER_ROUTE } from '../lib/constants';
import { Requests } from './Requests';
import { Wallets } from './wallet/Wallets';
import { Transactions } from './TransactionsPage';
import { Logo } from '../components/Logo';
import { UserAvatar } from '../components/Avatar';
import { DashboardLandingPage } from './DashboardLandingPage';
import { CurrencyManagement } from './CurrencyManagement';

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

const navigationItems = [
  {
    to: MEMBER_ROUTE.GET_STARTED,
    text: 'Home',
    icon: { default: defaultIcons.dashboard, active: activeIcons.dashboard },
  },
  {
    to: MEMBER_ROUTE.DASHBOARD,
    text: 'Dashboard',
    icon: { default: defaultIcons.dashboard, active: activeIcons.dashboard },
  },
  { to: MEMBER_ROUTE.WALLETS, text: 'Wallets', icon: { default: defaultIcons.wallets, active: activeIcons.wallets } },
  {
    to: MEMBER_ROUTE.TRANSACTIONS,
    text: 'Transactions',
    icon: { default: defaultIcons.transactions, active: activeIcons.transactions },
  },
  {
    to: MEMBER_ROUTE.REQUESTS,
    text: 'Requests',
    icon: { default: defaultIcons.requests, active: activeIcons.requests },
  },
  {
    to: '/manage',
    text: 'Manage',
    icon: { default: defaultIcons.manage, active: activeIcons.manage },
    subNavigationItems: [
      {
        to: MEMBER_ROUTE.CURRENCY_MANAGEMENT,
        text: 'Currency Management',
      },
      {
        to: '/manage-users',
        text: 'Users',
      },
    ],
  },
];

export default function Layout(): JSX.Element {
  const { appUser, userRole, useSignout } = useAuth();
  const [isNavOpened, setIsNavOpened] = useState(false);
  const theme = useMantineTheme();
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
              <NavigationList itemSpacing={20} links={navigationItems} />
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
            <Transactions displayName={appUser.given_name} />
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
}
