import styled from 'styled-components';
import { Cell, Column } from 'react-table';
import { TransactionType, transactionTypeRenderMappings } from '../../lib/constants';
import { formatDate } from '../../lib/utils';
import { Transaction } from '../../services/wallet-service';
import i18next from '../../i18next/config';

const ColoredSpan = styled.span`
  color: ${({ color }) => color};
`;

const StyledStatus = ({ status: creditStatus }: { status: TransactionType }): JSX.Element => {
  const { color, text } = transactionTypeRenderMappings[creditStatus ? TransactionType.CREDIT : TransactionType.DEBIT];
  return <ColoredSpan {...{ color }}>{text}</ColoredSpan>;
};

export const columnConfig: Column<Transaction>[] = [
  {
    Header: i18next.t('transaction.Id'),
    accessor: 'transactionHash',
  },
  {
    Header: i18next.t('transaction.type'),
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
    Header: i18next.t('entity'),
    accessor: 'entity',
  },
  {
    Header: i18next.t('transaction.time'),
    accessor: 'createdAt',
    Cell: (props) => formatDate(new Date(props.value)),
  },

  {
    Header: i18next.t('type'),
    accessor: 'credit',
    Cell: ({ value }: Cell<Transaction>) => <StyledStatus status={value} />,
  },

  {
    Header: i18next.t('amount'),
    accessor: 'amount',
    Cell: (props) => props.value || '\u2014',
  },
  // {
  //   Header: '',
  //   Cell: ({ value }: Cell<WalletRow>) => <div>View</div>,
  // },
];
