import styled from 'styled-components';
import { LoadingOverlay } from '@mantine/core';
import { Column } from 'react-table';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transaction } from '../../services/wallet-service';
import { getTransactionsTableColumnConfig } from '../wallet/table-config';
import { useGetCBTransactionHistory } from '../../hooks/useWallets';
import { TransactionsTable } from '../../components/tables/PaginatedTable';

const Wrapper = styled.div`
  margin-top: 24px;
`;

export const ExternalTransactionsTable = (): JSX.Element => {
  const [queryPageIndex, setQueryPageIndex] = useState(0);
  const [queryPageSize, setQueryPageSize] = useState(10);

  const {
    data = [] as any,
    isLoading: isLoadingTransactions,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useGetCBTransactionHistory('External', queryPageIndex, queryPageSize);

  const transactions = data?.transactions || [];
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TransactionsArea>
        <TransactionsTable<Transaction>
          columnConfig={getTransactionsTableColumnConfig(t)}
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
