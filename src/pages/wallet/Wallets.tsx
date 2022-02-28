import styled, { useTheme } from 'styled-components';
import { Column } from 'react-table';
import { Grid, Menu, Modal } from '@mantine/core';
import { ChevronDownIcon } from '@modulz/radix-icons';
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

      <Modal
        opened={modalOpened}
        centered
        onClose={() => setModalOpened(false)}
        hideCloseButton
        styles={{
          modal: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <DistributionModal>
          <DistributionOption style={{ marginRight: 16 }}>
            <img src={manual_distribution} alt="manual_distribution" />
            <OptionsText> Manual Distribution</OptionsText>
          </DistributionOption>
          <DistributionOption>
            <img src={distribution_request} alt="manual_distribution" style={{ mixBlendMode: 'luminosity' }} />
            <OptionsText style={{ color: grey }}>Distribution From Request</OptionsText>
          </DistributionOption>
        </DistributionModal>
      </Modal>
    </Wrapper>
  );
};

const DistributionModal = styled.div`
  display: flex;
  justify-content: center;
`;

const RecentTransactionsArea = styled.div`
  margin-top: 50px;
`;

const DistributionOption = styled.div`
  background: #ffffff;
  border-radius: 8px;
  min-width: 240px;
  height: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 24px;
  cursor: pointer;
`;

const OptionsText = styled(ParagraphBold)`
  font-size: 14px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
  margin-top: 28px;
`;
