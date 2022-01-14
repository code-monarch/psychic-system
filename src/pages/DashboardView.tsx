import styled from 'styled-components';
import { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { DashboardSummary } from './dashboard/DashboardSummary';
import { DashboardTokens } from './dashboard/DashboardTokens';
import { DashboardExchangeRates } from './dashboard/DashboardExchangeRates';
import { DashboardDepartments } from './dashboard/DashboardDepartments';

const View = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // TODO: Figure out how to determine this from parent
  margin: 0 80px;
`;

const Header = styled.h2`
  color: #2e2e2e;
  font-weight: bold;
  font-size: 28px;
`;

const DashTabs = styled(Tabs)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border-bottom: solid 1px #e2e2e2;
`;

const TabView = styled.div`
  flex: 1;
`;

export const DashboardView = ({ displayName }: { displayName: string }) => {
  const tabViews = [<DashboardSummary />, <DashboardExchangeRates />, <DashboardTokens />, <DashboardDepartments />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);

  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  return (
    <View>
      <Header>Welcome {displayName}!</Header>
      <DashTabs onTabSelected={handleTabSelected} />
      <TabView>{selectedTabView}</TabView>
    </View>
  );
};
