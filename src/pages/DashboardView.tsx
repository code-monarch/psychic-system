import styled from 'styled-components';
import { useState } from 'react';
import { Grid } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Tabs } from '../components/Tabs';
import { InternationalDashboardSummary, SummarySidePanel, LocalDashboardSummary } from './dashboard';
import { CurrenyManagementSetupAlert } from '../components/CurrencyManagementSetup';
import { getNavigationTabs } from '../lib/utils';
import { Overview } from './dashboard/Overview';

export const DashboardView = ({ displayName }: { displayName: string }): JSX.Element => {
  const { t } = useTranslation();

  useDocumentTitle(`DAP: ${t('navigation.dashboard')}`);

  const tabViews = [<Overview />, <InternationalDashboardSummary />, <LocalDashboardSummary />];
  const sideViews = [<SummarySidePanel />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);

  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  return (
    <Wrapper>
      <Grid gutter={64}>
        <Grid.Col md={12} lg={8}>
          <CurrenyManagementSetupAlert />
          <ContentView>
            <StyledTabs onTabSelected={handleTabSelected} tabItems={getNavigationTabs(t)} currentRoute="dashboard" />
            <TabView>{selectedTabView}</TabView>
          </ContentView>
        </Grid.Col>
        <RightSideBar md={12} lg={4}>
          <SideView>{sideViews[0]}</SideView>
        </RightSideBar>
      </Grid>
    </Wrapper>
  );
};

const RightSideBar = styled(Grid.Col)``;

const Wrapper = styled.div`
  margin: 0 40px;
  padding-top: 40px;
`;

const ContentView = styled.div`
  margin-top: 24px;
`;

const StyledTabs = styled(Tabs)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border-bottom: solid 1px #e2e2e2;
  margin-bottom: 16px;
`;

const TabView = styled.div``;

const SideView = styled.div``;
