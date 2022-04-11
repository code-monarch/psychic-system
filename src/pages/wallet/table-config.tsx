import styled from 'styled-components';
import { Cell, Column } from 'react-table';
import { TransactionType, transactionTypeRenderMappings } from '../../lib/constants';
import { formatDate } from '../../lib/utils';
import { Transaction } from '../../services/wallet-service';

const ColoredSpan = styled.span`
  color: ${({ color }) => color};
`;

const StyledStatus = ({ status: creditStatus }: { status: TransactionType }): JSX.Element => {
  const { color, text } = transactionTypeRenderMappings[creditStatus ? TransactionType.CREDIT : TransactionType.DEBIT];
  return <ColoredSpan {...{ color }}>{text}</ColoredSpan>;
};

export const columnConfig: Column<Transaction>[] = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionHash',
  },
  {
    Header: 'Transaction Type',
    accessor: 'transactionType',
  },
  {
    Header: 'Destination Wallet Category',
    accessor: 'destinationWalletCategory',
  },
  {
    Header: 'Source Wallet Category',
    accessor: 'sourceWalletCategory',
  },
  {
    Header: 'Entity',
    accessor: 'entity',
  },
  {
    Header: 'Transaction Time',
    accessor: 'createdAt',
    Cell: (props) => formatDate(new Date(props.value)),
  },

  {
    Header: 'Type',
    accessor: 'credit',
    Cell: ({ value }: Cell<Transaction>) => <StyledStatus status={value} />,
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
