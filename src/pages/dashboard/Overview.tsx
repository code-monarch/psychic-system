import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Column } from 'react-table';
import { Space } from '@mantine/core';
import { formatAmount, setWithExpiry, getWithExpiry } from '../../lib/utils';
import {
  useGetTransactionHistory,
  useGetTransactionSummary,
  useGetWalletAndTokenDetails,
} from '../../hooks/useWallets';
import { Paragraph, Title } from '../../components/styled';
import { TransactionsTable } from '../../components/tables/PaginatedTable';
import { Transaction } from '../../services/wallet-service';
import { getTransactionsTableColumnConfig } from '../wallet/table-config';
import { TrendedBalanceChart } from '../../components/charts/TrendedBalanceChart';
import { OverviewCard } from '../../components/OverviewCard';
import external1Icon from '../../assets/images/icons/overview/external1.svg';
import external2Icon from '../../assets/images/icons/overview/external2.svg';
import tokenIcon from '../../assets/images/icons/overview/token.svg';
import { useGetRates } from '../../hooks/useRates';

const Wrapper = styled.div``;
const columnPropGetter = (col: Column<Transaction>) => {
  const { id } = col;
  let textAlign: 'start' | 'end';
  switch (id) {
    case 'View':
      textAlign = 'end';
      break;
    default:
      textAlign = 'start';
      break;
  }
  return {
    style: {
      textAlign,
    },
  };
};

export const Overview = (): JSX.Element => {
  const theme = useTheme();

  const { green, blue, yellow } = theme.colors.primary;
  const { t } = useTranslation();

  const { mutate: getRates, isLoading } = useGetRates();

  const { data: walletBalanceAndTokenDetails, isLoading: isLoadingWalletTokenDetails } = useGetWalletAndTokenDetails();
  const [currentRate, setCurrentRate] = useState<number | null>(null);

  const fetchRates = () => {
    getRates(undefined, {
      onSuccess: (ratesData) => {
        const rate = ratesData?.rates?.HTG;
        setWithExpiry('rate', rate, 86400000);
        setCurrentRate(rate);
      },
    });
  };

  useEffect(() => {
    const rate = getWithExpiry('rate');
    if (rate) {
      setCurrentRate(rate);
    } else {
      fetchRates();
    }
  }, []);

  const wallets = walletBalanceAndTokenDetails?.walletBalance || [];

  const distributionWallet = wallets?.find((wallet) => wallet?.walletType === 'Distribution');

  const [queryPageIndex, setQueryPageIndex] = useState(0);
  const [queryPageSize, setQueryPageSize] = useState(4);

  const {
    data = [] as any,
    isLoading: isLoadingTransactions,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useGetTransactionHistory(distributionWallet?.walletId, queryPageIndex, queryPageSize);

  const { data: transactionSummary, isLoading: isLoadingSummary } = useGetTransactionSummary();
  const transactions = data?.transactions || [];

  return (
    <Wrapper>
      <TransactionCards>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <OverviewCard
            cardImage={external1Icon}
            title={`${t('navigation.transactions')} (${t('external.tab.title')})`}
            subtitle={t('to.date')}
            color={green}
            usdAmount={currentRate ? transactionSummary?.totalExternalTransactionAmount / currentRate : null}
            amount={formatAmount(transactionSummary?.totalExternalTransactionAmount)}
          />
        </div>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <OverviewCard
            cardImage={external2Icon}
            title={`${t('navigation.transactions')} (${t('external.tab.title')})`}
            subtitle={t('duration.one.day')}
            color={blue}
            usdAmount={currentRate ? transactionSummary?.totalExternalTrendingTransactionAmount / currentRate : null}
            amount={formatAmount(transactionSummary?.totalExternalTrendingTransactionAmount)}
          />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <OverviewCard
            cardImage={tokenIcon}
            title={`${t('tokens.distribution')}`}
            subtitle={t('to.date')}
            color={yellow}
            usdAmount={currentRate ? walletBalanceAndTokenDetails?.circulatingSupply / currentRate : null}
            amount={formatAmount(walletBalanceAndTokenDetails?.circulatingSupply)}
          />
        </div>
      </TransactionCards>
      {currentRate && (
        <ExchangeRate>
          {t('usd.exchange.rate')}: ${(1 / currentRate).toFixed(5)}{' '}
        </ExchangeRate>
      )}

      <Space h={12} />
      <div>
        <TrendedBalanceChart />
        <RecentTransactionsArea>
          <Title>{t('recent.external.transactions.description')}</Title>
          <TransactionsTable<Transaction>
            columnConfig={getTransactionsTableColumnConfig(t)}
            loading={isLoadingTransactions || isFetching || isLoadingWalletTokenDetails}
            totalPages={data?.totalPages}
            rowData={transactions}
            getColumnProps={columnPropGetter}
            hideFilters
            hideTotal
            hidePagination
            queryPageIndex={queryPageIndex}
            queryPageSize={queryPageSize}
            setQueryPageIndex={setQueryPageIndex}
            setQueryPageSize={setQueryPageSize}
            totalItems={data?.totalItems}
            isPreviousData={isPreviousData}
          />
        </RecentTransactionsArea>
      </div>
    </Wrapper>
  );
};

const ExchangeRate = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.black};
  margin-top: 7px;
`;

const TransactionCards = styled.div`
  display: flex;
  align-items: center;
`;

const RecentTransactionsArea = styled.div`
  margin-top: 14px;
`;
