import styled, { useTheme } from 'styled-components';
import { Column } from 'react-table';
import { Grid, Menu, Modal } from '@mantine/core';
import { useState } from 'react';
import { DynamicTable } from '../../components/tables/DynamicTable';
import { Heading, ParagraphBold, Title } from '../../components/styled';

import { columnConfig, WalletRow } from './table-config';
import { TransactionType } from '../../lib/constants';
import { WalletBalanceChart } from '../../components/charts/WalletBalanceChart';
import { SecondaryButton } from '../../components/Buttons';
import { WalletInfo } from '../../components/WalletSideBar';
import manual_distribution from '../../assets/images/icons/manual_distribution.svg';
import distribution_request from '../../assets/images/icons/distribution_request.svg';
import { ManualDistributionForm } from '../../components/modals/ManualDistributionForm';
import { SuccessModal } from '../../components/modals/SuccessModal';
import { DistributionModal } from '../../components/modals/ManualDistributionModal';
import { useGetWalletTokenDetails } from '../../hooks/useWallets';

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

// TODO: Get data from API

const rowData: WalletRow[] = [
  {
    id: '12345ABCDE',
    transaction_type: 'Distribution',
    wallet_type: 'Distribution',
    entity: 'HaitiPay',
    transaction_time: new Date(2021, 3, 2),
    type: TransactionType.CREDIT,
    amount: 1000000,
  },
  {
    id: '12345ABCDF',
    transaction_type: 'Distribution',
    wallet_type: 'Distribution',
    entity: 'CB',
    transaction_time: new Date(2021, 3, 2),
    type: TransactionType.DEBIT,
    amount: 1000000,
  },
  {
    id: '12345ABCDG',
    transaction_type: 'Distribution',
    wallet_type: 'Distribution',
    entity: 'HaitiPay',
    transaction_time: new Date(2021, 2, 2),
    type: TransactionType.CREDIT,
    amount: 1000000,
  },
  {
    id: '12345ABCDG',
    transaction_type: 'Distribution',
    wallet_type: 'Distribution',
    entity: 'CB',
    transaction_time: new Date(2021, 2, 2),
    type: TransactionType.DEBIT,
    amount: 1000000,
  },
];

const columnPropGetter = (col: Column<WalletRow>) => {
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

  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  return (
    <Wrapper>
      <Grid grow gutter={64}>
        <Grid.Col md={12} lg={8}>
          <Header>
            <Heading>Wallets Overview</Heading>
            <SecondaryButton title="Distribute BTKB" style={{ width: 152 }} onClick={() => setModalOpened(true)} />
          </Header>
          <WalletBalanceChart />
          <RecentTransactionsArea>
            <Title>MOST Recent INTERNAL transactions</Title>
            <DynamicTable<WalletRow>
              columnConfig={columnConfig}
              rowData={rowData}
              getColumnProps={columnPropGetter}
              hideFilters
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
