import styled from 'styled-components';
import { Cell, Column } from 'react-table';
import { TransactionType, transactionTypeRenderMappings } from '../../lib/constants';
import { formatDate } from '../../lib/utils';

export interface WalletRow {
  id: string;
  transaction_type: string;
  wallet_type: string;
  entity: string;
  transaction_time: Date;
  type: TransactionType;
  amount?: number;
}

const ColoredSpan = styled.span`
  color: ${({ color }) => color};
`;

const StyledStatus = ({ status }: { status: TransactionType }): JSX.Element => {
  const { color, text } = transactionTypeRenderMappings[status];
  return <ColoredSpan {...{ color }}>{text}</ColoredSpan>;
};

export const columnConfig: Column<WalletRow>[] = [
  {
    Header: 'Transaction ID',
    accessor: 'id',
  },
  {
    Header: 'Transaction Type',
    accessor: 'transaction_type',
  },
  {
    Header: 'Wallet Type',
    accessor: 'wallet_type',
  },
  {
    Header: 'Entity',
    accessor: 'entity',
  },
  {
    Header: 'Transaction Time',
    accessor: 'transaction_time',
    Cell: (props) => formatDate(props.value),
  },

  {
    Header: 'Type',
    accessor: 'type',
    Cell: ({ value }: Cell<WalletRow>) => <StyledStatus status={value} />,
  },

  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: (props) => props.value || '\u2014',
  },
  // {
  //   Header: '',
  //   Cell: ({ value }: Cell<WalletRow>) => <div>View</div>,
  // },
];
