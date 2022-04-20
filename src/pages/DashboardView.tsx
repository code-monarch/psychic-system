import styled from 'styled-components';
import { useState } from 'react';
import { Grid } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Tabs } from '../components/Tabs';
import { Flex, Heading } from '../components/styled';
import {
  DepartmentsContent,
  InternationalDashboardSummary,
  SummarySidePanel,
  TokensContent,
  LocalDashboardSummary,
} from './dashboard';
import { CurrenyManagementSetupAlert } from '../components/CurrencyManagementSetup';
import { getNavigationTabs } from '../lib/utils';

// const exchangeCurrencies: CurrencyCode[] = [CurrencyCode.USD, CurrencyCode.EUR, CurrencyCode.CAD, CurrencyCode.DOP];

export const DashboardView = ({ displayName }: { displayName: string }): JSX.Element => {
  const { t } = useTranslation();

  useDocumentTitle(`DAP: ${t('navigation.dashboard')}`);

  const tabViews = [
    <InternationalDashboardSummary />,
    <LocalDashboardSummary />,
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
        <Grid.Col md={12} lg={8}>
          <Header>
            <Heading>
              {t('welcome.title')} {displayName}!
            </Heading>
          </Header>
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
  margin-top: 40px;
  margin-bottom: 24px;
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
