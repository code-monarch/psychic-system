import styled from 'styled-components';
import { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { Tabs } from '../components/Tabs';
import { Heading } from '../components/styled';
import { CurrencySummaryCard } from '../components/CurrencySummaryCard';
import { transactionsTabItems } from '../lib/constants';
import { ExternalTransactionsTable } from './transactions/ExternalTransactionsTable';

export const Transactions = (): JSX.Element => {
  useDocumentTitle('DAP: Transactions');

  const tabViews = [<ExternalTransactionsTable />, <ExternalTransactionsTable />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);

  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  return (
    <Wrapper>
      <Header>
        <Heading>Transactions</Heading>
      </Header>
      <TransactionCards>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <CurrencySummaryCard title="Total Amount" amount="29000" />
        </div>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <CurrencySummaryCard title="Internal Transactions" amount="28000" />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <CurrencySummaryCard title="External Transactions" amount="1345898" />
        </div>
      </TransactionCards>
      <ContentView>
        <StyledTabs onTabSelected={handleTabSelected} tabItems={transactionsTabItems} currentRoute="transactions" />
        <TabView>{selectedTabView}</TabView>
      </ContentView>
    </Wrapper>
  );
};

const TransactionCards = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  max-width: 1000px;
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
