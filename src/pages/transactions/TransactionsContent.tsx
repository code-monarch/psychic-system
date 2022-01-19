import styled from 'styled-components';
import { Column } from 'react-table';
import { SummaryTable } from '../../components/SummaryTable';
import { Flex, Title } from '../../components/styled';
import { DynamicTable } from '../../components/DynamicTable';
import { Status, TransactionRow, columnConfig } from './table-config';

const Wrapper = styled(Flex.Column)``;

const StyledTitle = styled(Title)`
  margin: 16px 0;
`;

// TODO: Get values from API
const summaryTableConfig = [
  { header: 'Requested', value: '500,000' },
  { header: 'Burnt', value: '184,987' },
  { header: 'Issued', value: '400,000' },
  { header: 'Distributed', value: '20,030' },
  { header: 'Redeemed', value: '20,000' },
  { header: 'Rejected', value: '3450' },
  { header: 'In Circulation', value: '209,930' },
  { header: 'Recovered', value: '4200' },
  { header: 'Available', value: '480,000' },
];

// TODO: Get data from API
const rowData: TransactionRow[] = [
  {
    id: '12345ABCDE',
    organization: 'Ministry of Health',
    requestor: 'Dr. Osas Obasi',
    openDate: new Date(2021, 3, 2),
    amtRequested: 200000,
    status: Status.PENDING,
    approver: 'Carmelle Cadet',
    walletAddress: '0865FGHD7439',
  },
  {
    id: '12345ABCDF',
    organization: 'First Bank, Plc',
    requestor: 'Mr. Femi Obasi',
    openDate: new Date(2021, 3, 2),
    amtRequested: 1000000,
    status: Status.INPROGRESS,
    approver: 'Carmelle Cadet',
    walletAddress: '0865FGHD7439',
  },
  {
    id: '12345ABCDG',
    organization: 'Wema Bank, Plc',
    requestor: 'Dr. Osas Obasi',
    openDate: new Date(2021, 2, 2),
    amtRequested: 1000000,
    amtApproved: 1000000,
    closeDate: new Date(2021, 3, 2),
    status: Status.APPROVED,
    approver: 'Carmelle Cadet',
    walletAddress: '0865FGHD7439',
  },
];

const getRowData = (input: TransactionRow[], multiple: number): TransactionRow[] => {
  let multipliedRowData: TransactionRow[] = [];
  for (let i = 0; i < multiple; i += 1) {
    multipliedRowData = multipliedRowData.concat(input);
  }
  return multipliedRowData;
};

const columnPropGetter = (col: Column<TransactionRow>) => {
  const { id } = col;
  let textAlign: 'start' | 'end';
  switch (id) {
    case 'amtRequested':
    case 'amtApproved':
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

export const TransactionsContent = (): JSX.Element => (
  <Wrapper>
    <StyledTitle>Summary (Transactions)</StyledTitle>
    <SummaryTable config={summaryTableConfig} />
    <StyledTitle>Requests Queue</StyledTitle>
    <DynamicTable<TransactionRow>
      columnConfig={columnConfig}
      rowData={getRowData(rowData, 20)}
      getColumnProps={columnPropGetter}
    />
  </Wrapper>
);
