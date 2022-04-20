import styled, { useTheme } from 'styled-components';
import { Column } from 'react-table';
import { Grid, Menu } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading, Title } from '../../components/styled';

import { getTransactionsTableColumnConfig } from './table-config';
import { WalletBalanceChart } from '../../components/charts/WalletBalanceChart';
import { SecondaryButton } from '../../components/Buttons';
import { WalletInfo } from '../../components/WalletSideBar';
import { ManualDistributionForm } from '../../components/modals/ManualDistributionForm';
import { DistributionModal } from '../../components/modals/ManualDistributionModal';
import { useGetTransactionHistory, useGetWalletAndTokenDetails } from '../../hooks/useWallets';
import { Transaction } from '../../services/wallet-service';
import { TransactionsTable } from '../../components/tables/PaginatedTable';

const Wrapper = styled.div`
  padding: 0 64px;
`;

const Header = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const RightSideBar = styled(Grid.Col)`
  background: rgba(251, 251, 251, 0.8);
`;

const columnPropGetter = (col: Column<Transaction>) => {
  const { id } = col;
  let textAlign: 'start' | 'end';
  switch (id) {
    case 'amount':
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

export const Wallets = (props): JSX.Element => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [formModalOpened, setFormModalOpened] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const { t } = useTranslation();

  useDocumentTitle(`DAP: ${t('wallets.title')}`);

  const { data: walletBalanceAndTokenDetails, isLoading: isLoadingWalletTokenDetails } = useGetWalletAndTokenDetails();

  const wallets = walletBalanceAndTokenDetails?.walletBalance || [];

  const distributionWallet = wallets?.find((wallet) => wallet?.walletType === 'Distribution');

  const [queryPageIndex, setQueryPageIndex] = useState(0);
  const [queryPageSize, setQueryPageSize] = useState(5);

  const {
    data = [] as any,
    isLoading: isLoadingTransactions,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useGetTransactionHistory(distributionWallet?.walletId, queryPageIndex, queryPageSize);

  const transactions = data?.transactions || [];

  const theme: any = useTheme();
  const { grey } = theme.colors.primary;

  return (
    <Wrapper>
      <Grid gutter={64}>
        <Grid.Col grow md={12} lg={8}>
          <Header>
            <Heading>{t('wallets.overview')}</Heading>
            <SecondaryButton
              title={`${t('distribute.title')} BTKB`}
              style={{ width: 152 }}
              onClick={() => setModalOpened(true)}
            />
          </Header>
          <WalletBalanceChart />
          <RecentTransactionsArea>
            <Title>{t('recent.internal.transactions.description')}</Title>
            <TransactionsTable<Transaction>
              columnConfig={getTransactionsTableColumnConfig(t)}
              loading={isLoadingTransactions || isFetching || isLoadingWalletTokenDetails}
              totalPages={data?.totalPages}
              rowData={transactions}
              getColumnProps={columnPropGetter}
              hideFilters
              queryPageIndex={queryPageIndex}
              queryPageSize={queryPageSize}
              setQueryPageIndex={setQueryPageIndex}
              setQueryPageSize={setQueryPageSize}
              totalItems={data?.totalItems}
              isPreviousData={isPreviousData}
            />
          </RecentTransactionsArea>
        </Grid.Col>
        <RightSideBar md={12} lg={4}>
          <Header>
            <Heading>{t('wallets.title')}</Heading>
          </Header>
          <WalletInfo />
        </RightSideBar>
      </Grid>

      <DistributionModal
        isVisible={modalOpened}
        setIsVisible={setModalOpened}
        manualDistributeCallback={() => {
          setFormModalOpened(true);
        }}
      />
      <ManualDistributionForm
        isVisible={formModalOpened}
        setIsVisible={setFormModalOpened}
        callback={() => setShowSuccessModal(true)}
      />
    </Wrapper>
  );
};

const RecentTransactionsArea = styled.div`
  margin-top: 50px;
`;
