import styled from 'styled-components';
import { useState } from 'react';
import { Grid } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { Tabs } from '../components/Tabs';
import { Flex, Heading } from '../components/styled';
import { DepartmentsContent, InternationalDashboardSummary, SummarySidePanel, TokensContent } from './dashboard';
import { CurrenyManagementSetupAlert } from '../components/CurrencyManagementSetup';

// const exchangeCurrencies: CurrencyCode[] = [CurrencyCode.USD, CurrencyCode.EUR, CurrencyCode.CAD, CurrencyCode.DOP];

export const DashboardView = ({ displayName }: { displayName: string }): JSX.Element => {
  useDocumentTitle('DAP: Dashboard');

  const tabViews = [
    <InternationalDashboardSummary />,
    <InternationalDashboardSummary />,
    // <ExchangeRatesContent localCurrency={CurrencyCode.HTG} exchangeCurrencies={exchangeCurrencies} />,
    <TokensContent />,
    <DepartmentsContent />,
  ];
  const sideViews = [<SummarySidePanel />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);

  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  return (
    <Wrapper>
      <Grid gutter={64}>
        <Grid.Col grow md={12} lg={8}>
          <Header>
            <Heading>Welcome {displayName}!</Heading>
          </Header>
          <CurrenyManagementSetupAlert />
          <ContentView>
            <StyledTabs onTabSelected={handleTabSelected} />
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

const RightSideBar = styled(Grid.Col)`
  background: rgba(251, 251, 251, 0.8);
`;

const Wrapper = styled.div`
  margin: 0 64px;
`;

const ContentView = styled.div`
  margin-top: 24px;
`;

const Header = styled.div`
  color: #2e2e2e;
  font-weight: bold;
  font-size: 28px;
`;

const StyledTabs = styled(Tabs)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border-bottom: solid 1px #e2e2e2;
  margin-bottom: 40px;
`;

const TabView = styled.div``;

const SideView = styled.div`
  padding-top: 80px;
`;
