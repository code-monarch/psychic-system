import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Column } from 'react-table';
import { Space } from '@mantine/core';
import moment from 'moment/moment';
import { formatAmountWithDecimals, getWithExpiry, setWithExpiry } from '../../lib/utils';
import {
  useGetDashboardTransactionHistory,
  useGetTransactionSummary,
  useGetTransactionSummaryWithStartDate,
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
import { useTokenDetails } from '../../context/token-details-context';
import { device } from '../../lib/constants';

const Wrapper = styled.div``;
const columnPropGetter = (col: Column<Transaction>) => {
  const { id } = col;
  let textAlign: 'start' | 'end';
  switch (id) {
    case 'Transaction ID':
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

  const { mutate: getRates } = useGetRates();
  const { tokenDetails, isLoadingWalletTokenDetails, walletSummaryDetails } = useTokenDetails();

  const tokenId = tokenDetails?.[0].id;

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

  const wallets = walletSummaryDetails?.wallets || [];

  const distributionWallet = wallets?.find((wallet) => wallet?.category === 'Distribution');

  const [queryPageIndex, setQueryPageIndex] = useState(0);
  const [queryPageSize, setQueryPageSize] = useState(5);

  const {
    data = [] as any,
    isLoading: isLoadingTransactions,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useGetDashboardTransactionHistory(queryPageIndex, queryPageSize);

  const { data: summary, isLoading: isLoadingSummary } = useGetTransactionSummary(tokenId);
  const { data: summaryLastDay } = useGetTransactionSummaryWithStartDate(tokenId, moment().format('YYYY-MM-DD'));
  const transactionSummary = summary?.totals;
  const transactionSummaryLastDay = summaryLastDay?.totals;
  const transactions = data?.transactions || [];

  return (
    <Wrapper>
      <TransactionCards>
        <OverviewCardWrapperWithMargin>
          <OverviewCard
            cardImage={external1Icon}
            title={`${t('navigation.transactions')} (${t('external.tab.title')})`}
            subtitle={t('to.date')}
            tokenSymbol={walletSummaryDetails?.symbol}
            color={green}
            usdAmount={currentRate ? transactionSummary?.externalAmount / currentRate : null}
            amount={formatAmountWithDecimals(transactionSummary?.externalAmount, walletSummaryDetails?.decimals)}
          />
        </OverviewCardWrapperWithMargin>
        <OverviewCardWrapperWithMargin>
          <OverviewCard
            cardImage={external2Icon}
            title={`${t('navigation.transactions')} (${t('external.tab.title')})`}
            subtitle={t('duration.one.day')}
            tokenSymbol={walletSummaryDetails?.symbol}
            color={blue}
            usdAmount={currentRate ? transactionSummaryLastDay?.externalAmount / currentRate : null}
            amount={formatAmountWithDecimals(transactionSummaryLastDay?.externalAmount, walletSummaryDetails?.decimals)}
          />
        </OverviewCardWrapperWithMargin>
        <OverviewCardWrapper>
          <OverviewCard
            cardImage={tokenIcon}
            title={`${t('transaction.volume')}`}
            subtitle=""
            tokenSymbol=" "
            color={yellow}
            usdAmount={null}
            amount={transactionSummary?.volume?.toString() || '0'}
          />
        </OverviewCardWrapper>
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
          <Title>{t('recent.transactions.description')}</Title>
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
  color: ${({ theme }) => theme.colors.primary.white};
  margin-top: 7px;
`;

const TransactionCards = styled.div`
  display: flex;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const RecentTransactionsArea = styled.div`
  margin-top: 14px;
`;

const OverviewCardWrapper = styled.div`
  flex: 1;
  @media ${device.tablet} {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const OverviewCardWrapperWithMargin = styled(OverviewCardWrapper)`
  flex: 1;
  margin-right: 20px;
  @media ${device.tablet} {
    margin-right: 0;
    margin-bottom: 16px;
  }
`;
