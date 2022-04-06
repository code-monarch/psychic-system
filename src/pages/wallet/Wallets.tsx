import styled, { useTheme } from 'styled-components';
import { Column } from 'react-table';
import { Grid, Menu, LoadingOverlay } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { useState } from 'react';
import { DynamicTable } from '../../components/tables/DynamicTable';
import { Heading, Title } from '../../components/styled';

import { columnConfig } from './table-config';
import { WalletBalanceChart } from '../../components/charts/WalletBalanceChart';
import { SecondaryButton } from '../../components/Buttons';
import { WalletInfo } from '../../components/WalletSideBar';
import { ManualDistributionForm } from '../../components/modals/ManualDistributionForm';
import { DistributionModal } from '../../components/modals/ManualDistributionModal';
import { useGetTransactionHistory, useGetUserWallets } from '../../hooks/useWallets';
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
  useDocumentTitle('DAP: Wallets');

  const { data: wallets = [] } = useGetUserWallets();
  const [page, setPage] = useState(0);

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
            <Heading>Wallets Overview</Heading>
            <SecondaryButton title="Distribute BTKB" style={{ width: 152 }} onClick={() => setModalOpened(true)} />
          </Header>
          <WalletBalanceChart />
          <RecentTransactionsArea>
            <Title>MOST Recent INTERNAL transactions</Title>
            <TransactionsTable<Transaction>
              columnConfig={columnConfig}
              loading={isLoadingTransactions || isFetching}
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
            <Heading>Wallets</Heading>
            <Menu>
              <Menu.Item>Option 1</Menu.Item>
            </Menu>
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
