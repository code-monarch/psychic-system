import styled from 'styled-components';
import { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Tabs } from '../components/Tabs';
import { Heading } from '../components/styled';
import { CurrencySummaryCard } from '../components/CurrencySummaryCard';
import { ExternalTransactionsTable } from './transactions/ExternalTransactionsTable';
import { InternalTransactionsTable } from './transactions/InternalTransactionsTable';
import { useGetTransactionSummary } from '../hooks/useWallets';
import { formatAmountWithDecimals, getTransactionTabs } from '../lib/utils';
import { useTokenDetails } from '../context/token-details-context';
import { device } from '../lib/constants';

export const Transactions = (): JSX.Element => {
  const { t } = useTranslation();
  useDocumentTitle(`DAP: ${t('navigation.transactions')}`);

  const tabViews = [<InternalTransactionsTable />, <ExternalTransactionsTable />];
  const [selectedTabView, setSelectedTabView] = useState(tabViews[0]);
  const { tokenDetails, walletSummaryDetails } = useTokenDetails();
  const tokenId = tokenDetails?.[0].id;
  const handleTabSelected = (tabIndex: number) => {
    setSelectedTabView(tabViews[tabIndex]);
  };

  const { data } = useGetTransactionSummary(tokenId);
  const transactionSummary = data?.totals;

  return (
    <Wrapper>
      <Header>
        <Heading>{t('navigation.transactions')}</Heading>
      </Header>
      <TransactionCards>
        <TransactionCardWrapper
          style={{
            marginRight: 20,
          }}
        >
          <CurrencySummaryCard
            title={t('total.amount')}
            amount={formatAmountWithDecimals(transactionSummary?.amount, walletSummaryDetails?.decimals)}
            hideHistogram
          />
        </TransactionCardWrapper>
        <TransactionCardWrapper
          style={{
            marginRight: 20,
          }}
        >
          <CurrencySummaryCard
            title={`${t('internal.transaction.amount')} (${walletSummaryDetails?.symbol})`}
            amount={formatAmountWithDecimals(transactionSummary?.internalAmount, walletSummaryDetails?.decimals)}
            hideHistogram
          />
        </TransactionCardWrapper>
        <TransactionCardWrapper>
          <CurrencySummaryCard
            title={`${t('external.transaction.amount')} (${walletSummaryDetails?.symbol})`}
            amount={formatAmountWithDecimals(transactionSummary?.externalAmount, walletSummaryDetails?.decimals)}
            hideHistogram
          />
        </TransactionCardWrapper>
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
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const TransactionCardWrapper = styled.div`
  flex: 1;
  @media ${device.laptop} {
    margin-right: 0 !important;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 0 64px;
  @media ${device.tablet} {
    padding: 0 16px;
  }
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
  border-bottom: solid 1px ${({ theme }) => theme.colors.primary.powderBlue};
  margin-bottom: 40px;
`;

const TabView = styled.div``;
