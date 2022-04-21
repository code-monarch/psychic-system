import styled from 'styled-components';
import { Cell, Column } from 'react-table';
import { TFunction } from 'react-i18next';
import { TransactionType } from '../../lib/constants';
import { formatAmount, formatDate } from '../../lib/utils';
import { Transaction } from '../../services/wallet-service';
import { ViewTransactionTableCell } from '../../components/tables/ViewTransactionTableCell';

type TransactionTypeRenderMappings = { [key in TransactionType]: { color: string; text: string } };

const ColoredSpan = styled.span`
  color: ${({ color }) => color};
`;

const StyledStatus = ({
  status: creditStatus,
  translation,
}: {
  status: TransactionType;
  translation: TFunction;
}): JSX.Element => {
  const transactionTypeRenderMappings: TransactionTypeRenderMappings = {
    [TransactionType.DEBIT]: { color: '#EC3D08', text: translation('debit') },
    [TransactionType.CREDIT]: { color: '#4AB0A6', text: translation('credit') },
  };

  const { color, text } = transactionTypeRenderMappings[creditStatus ? TransactionType.CREDIT : TransactionType.DEBIT];
  return <ColoredSpan {...{ color }}>{text}</ColoredSpan>;
};

export const getTransactionsTableColumnConfig = (t: TFunction): Column<Transaction>[] => [
  {
    Header: t('transaction.Id'),
    accessor: 'transactionHash',
  },
  {
    Header: t('transaction.type'),
    accessor: 'transactionType',
  },
  {
    Header: t('transaction.wallet.destination'),
    accessor: 'destinationWalletCategory',
  },
  {
    Header: t('transaction.wallet.source'),
    accessor: 'sourceWalletCategory',
  },
  {
    Header: t('entity'),
    accessor: 'entity',
  },
  {
    Header: t('transaction.time'),
    accessor: 'createdAt',
    Cell: (props) => formatDate(new Date(props.value)),
  },

  {
    Header: t('type'),
    accessor: 'credit',
    Cell: ({ value }: Cell<Transaction>) => <StyledStatus status={value} translation={t} />,
    disableSortBy: true,
  },

  {
    Header: t('amount'),
    accessor: 'amount',
    Cell: (props) => formatAmount(props.value) || '\u2014',
  },
  {
    Header: t('view.title'),
    Cell: (props: { row: { original: Transaction } }) => <ViewTransactionTableCell data={props.row.original} />,
  },
];
