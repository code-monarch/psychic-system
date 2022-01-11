import styled from 'styled-components';
import DashboardHeader from '../components/DashboardHeader';
import { NavigationList } from '../components/NavigationList';
import DashboardView from '../components/DashboardView';
import { useAuth } from '../context/auth-context';

import { navIconsDefault as defaultIcons, navIconsActive as activeIcons } from '../assets/images/icons/navigation';

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

export default function Dashboard() {
  const { appUser, userRole } = useAuth();
  return (
    <Screen>
      <Header avatarUrl={appUser.avatarUrl} />
      <Body>
        <SideNav>
          <NavigationList itemSpacing={20} links={navigationItems} />
        </SideNav>
        <Content>
          {/* TODO: use Router to swap between views within the dashboard
                    <TransactionsView displayName={displayName}></TransactionsView> */}
          <DashboardView displayName={appUser.displayName} />
        </Content>
      </Body>
    </Screen>
  );
}
