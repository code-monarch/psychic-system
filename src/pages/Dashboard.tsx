import styled from 'styled-components';
import DashboardHeader from '../components/DashboardHeader';
import NavigationList from '../components/NavigationList';
import DashboardView from '../components/DashboardView';
import TransactionsView from '../components/TransactionsView';
import WalletsView from '../components/WalletsView';
import dashboardIcon from '../assets/images/icons/dashboard.svg';
import requestsIcon from '../assets/images/icons/requests.svg';
import walletsIcon from '../assets/images/icons/wallets.svg';
import manageUsersIcon from '../assets/images/icons/manage-users.svg';
import notificationsIcon from '../assets/images/icons/notifications.svg';
import { useAuth } from '../context/auth-context';

const Screen = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled(DashboardHeader)`
  border-bottom: 1px solid #f5f5f5;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const SideNav = styled.div`
  color: #828282;
  font-size: 14px;
  line-height: 24px;
  border-right: 1px solid #f5f5f5;
  padding: 30px 0 0 40px;
  min-width: 200px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const navigationItems = [
  { text: 'Dashboard', icon: dashboardIcon },
  { text: 'Requests', icon: requestsIcon },
  { text: 'Wallets', icon: walletsIcon },
  { text: 'Manage Users', icon: manageUsersIcon },
  { text: 'Notifications', icon: notificationsIcon },
];

export default function Dashboard() {
  const { appUser, userRole } = useAuth();
  return (
    <Screen>
      <Header avatarUrl={appUser.avatarUrl} />
      <Body>
        <SideNav>
          <NavigationList itemSpacing={20} items={navigationItems} />
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
