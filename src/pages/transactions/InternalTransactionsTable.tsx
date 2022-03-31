import styled from 'styled-components';
import { LoadingOverlay } from '@mantine/core';
import { Column } from 'react-table';
import { DynamicTable } from '../../components/tables/DynamicTable';
import { Transaction } from '../../services/wallet-service';
import { columnConfig } from '../wallet/table-config';
import { useGetInternalTransactionHistory } from '../../hooks/useWallets';

const Wrapper = styled.div`
  margin-top: 24px;
`;

export const InternalTransactionsTable = (): JSX.Element => {
  const { data: transactionHistory = [], isLoading: isLoadingTransactions } = useGetInternalTransactionHistory();

  return (
    <Wrapper>
      <TransactionsArea>
        <LoadingOverlay visible={isLoadingTransactions} />
        <DynamicTable<Transaction>
          columnConfig={columnConfig}
          rowData={transactionHistory}
          getColumnProps={columnPropGetter}
          hideFilters
        />
      </TransactionsArea>
    </Wrapper>
  );
};

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

const TransactionsArea = styled.div`
  margin-top: 50px;
  position: relative;
`;
