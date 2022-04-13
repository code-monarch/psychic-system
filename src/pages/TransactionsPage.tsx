import styled from 'styled-components';
import { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Tabs } from '../components/Tabs';
import { Heading } from '../components/styled';
import { CurrencySummaryCard } from '../components/CurrencySummaryCard';
import { transactionsTabItems } from '../lib/constants';
import { ExternalTransactionsTable } from './transactions/ExternalTransactionsTable';
import { InternalTransactionsTable } from './transactions/InternalTransactionsTable';
import { useGetTransactionSummary } from '../hooks/useWallets';
import { formatAmount, getTransactionTabs } from '../lib/utils';

export const Transactions = (): JSX.Element => {
  const { t } = useTranslation();
  useDocumentTitle(`DAP: ${t('navigation.transactions')}`);

  const tabViews = [<InternalTransactionsTable />, <ExternalTransactionsTable />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);

  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  const { data: transactionSummary, isLoading: isLoadingSummary } = useGetTransactionSummary();

  return (
    <Wrapper>
      <Header>
        <Heading>{t('navigation.transactions')}</Heading>
      </Header>
      <TransactionCards>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <CurrencySummaryCard title="Total Amount" amount={formatAmount(transactionSummary?.totalAmount)} />
        </div>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <CurrencySummaryCard
            title={`${t('internal.transaction.amount')} (BTKB)`}
            amount={formatAmount(transactionSummary?.totalInternalTransactionAmount)}
          />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <CurrencySummaryCard
            title={`${t('external.transaction.amount')} (BTKB)`}
            amount={formatAmount(transactionSummary?.totalExternalTransactionAmount)}
          />
        </div>
      </TransactionCards>
      <ContentView>
        <StyledTabs onTabSelected={handleTabSelected} tabItems={getTransactionTabs(t)} currentRoute="transactions" />
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
