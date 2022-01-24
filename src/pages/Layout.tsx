import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DashboardHeader } from '../components/DashboardHeader';
import { NavigationList } from '../components/NavigationList';
import { DashboardView } from './DashboardView';
import { useAuth } from '../context/auth-context';

import { navIconsDefault as defaultIcons, navIconsActive as activeIcons } from '../assets/images/icons/navigation';
import { MEMBER_ROUTE } from '../lib/constants';
import { Requests } from './Requests';
import { Wallets } from './wallet/Wallets';
import { Transactions } from './TransactionsPage';

const Screen = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Header = styled(DashboardHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.lightgrey};
`;

const Body = styled.div`
  display: flex;
  padding-top: 80px;
  height: 100vh;
`;

const SideNav = styled.div`
  color: ${({ theme }) => theme.colors.primary.grey};
  font-size: 14px;
  line-height: 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary.lightgrey};
  padding: 30px 0 0 40px;
  min-width: 200px;
`;

const Content = styled.div`
  overflow-y: auto;
`;

const navigationItems = [
  { to: '/dashboard', text: 'Dashboard', icon: { default: defaultIcons.dashboard, active: activeIcons.dashboard } },
  { to: '/requests', text: 'Requests', icon: { default: defaultIcons.requests, active: activeIcons.requests } },
  { to: '/wallets', text: 'Wallets', icon: { default: defaultIcons.wallets, active: activeIcons.wallets } },
  { to: '/transactions', text: 'Transactions', icon: { default: defaultIcons.requests, active: activeIcons.requests } }, // TODO: Add Transactions icon
  {
    to: '/manage-users',
    text: 'Manage Users',
    icon: { default: defaultIcons.manageUsers, active: activeIcons.manageUsers },
  },
  {
    to: 'notifications',
    text: 'Notifications',
    icon: { default: defaultIcons.notifications, active: activeIcons.notifications },
  },
];

export default function Layout(): JSX.Element {
  const { appUser, userRole } = useAuth();
  return (
    <Screen>
      <Header avatarUrl={appUser.avatarUrl} />
      <Body>
        <SideNav>
          <NavigationList itemSpacing={20} links={navigationItems} />
        </SideNav>
        <Content>
          <Switch>
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
            <Route path="*" exact={false}>
              <Redirect to={{ pathname: MEMBER_ROUTE.DASHBOARD }} />
            </Route>
          </Switch>
        </Content>
      </Body>
    </Screen>
  );
}
