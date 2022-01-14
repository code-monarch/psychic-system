import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import { NavigationList } from '../components/NavigationList';
import { DashboardView } from './DashboardView';
import { useAuth } from '../context/auth-context';

import { navIconsDefault as defaultIcons, navIconsActive as activeIcons } from '../assets/images/icons/navigation';
import { MEMBER_ROUTE } from '../lib/constants';
import { Requests } from './Requests';
import { Wallets } from './Wallets';

const Screen = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled(DashboardHeader)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.lightgrey};
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
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
  flex: 1;
  display: flex;
`;

const navigationItems = [
  { to: '/dashboard', text: 'Dashboard', icon: { default: defaultIcons.dashboard, active: activeIcons.dashboard } },
  { to: '/requests', text: 'Requests', icon: { default: defaultIcons.requests, active: activeIcons.requests } },
  { to: '/wallets', text: 'Wallets', icon: { default: defaultIcons.wallets, active: activeIcons.wallets } },
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

export default function Layout() {
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
              <DashboardView displayName={appUser.displayName} />
            </Route>
            <Route path={MEMBER_ROUTE.REQUESTS} exact>
              <Requests />
            </Route>
            <Route path={MEMBER_ROUTE.WALLETS} exact>
              <Wallets />
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
