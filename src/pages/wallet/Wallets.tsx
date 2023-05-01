import styled from 'styled-components';
import { Column } from 'react-table';
import { Grid } from '@mantine/core';
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
import { useGetTransactionHistory } from '../../hooks/useWallets';
import { Transaction } from '../../services/wallet-service';
import { TransactionsTable } from '../../components/tables/PaginatedTable';
import { useTokenDetails } from '../../context/token-details-context';
import { device } from '../../lib/constants';

const Wrapper = styled.div`
  padding: 0 64px;
  padding-bottom: 40px;
  @media ${device.tablet} {
    padding: 0;
    margin: 0;
  }
`;

const PageGrid = styled(Grid)`
  @media ${device.tablet} {
    padding: 0;
    margin: 0;
  }
`;

const Header = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const LeftSection = styled(Grid.Col)`
  @media ${device.tablet} {
    padding: 0 16px;
  }
`;

const RightSideBar = styled(Grid.Col)`
  background: ${({ theme }) => theme.colors.primary.darkText};
  @media ${device.tablet} {
    padding: 0 16px;
  }
`;

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

export const Wallets = (props): JSX.Element => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [formModalOpened, setFormModalOpened] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const { t } = useTranslation();

  useDocumentTitle(`DAP: ${t('wallets.title')}`);

  const {
    tokenDetails: walletBalanceAndTokenDetails,
    isLoadingWalletTokenDetails,
    walletSummaryDetails,
  } = useTokenDetails();

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
  } = useGetTransactionHistory(distributionWallet?.id, queryPageIndex, queryPageSize);

  const transactions = data?.transactions || [];

  return (
    <Wrapper>
      <PageGrid gutter={64}>
        <LeftSection md={12} lg={8}>
          <Header>
            <Heading>{t('wallets.overview')}</Heading>
            <SecondaryButton
              title={`${t('distribute.title')} ${walletSummaryDetails?.symbol}`}
              style={{ width: 152 }}
              onClick={() => setModalOpened(true)}
            />
          </Header>
          <WalletBalanceChart />
          <RecentTransactionsArea>
            <Title>{t('recent.transactions.description')}</Title>
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
        </LeftSection>
        <RightSideBar md={12} lg={4}>
          <Header>
            <Heading>{t('wallets.title')}</Heading>
          </Header>
          <WalletInfo />
        </RightSideBar>
      </PageGrid>

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
