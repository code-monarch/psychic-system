import styled from 'styled-components';
import { Cell, Column } from 'react-table';
import { TFunction } from 'react-i18next';
import moment from 'moment';
import { TransactionType } from '../../lib/constants';
import { formatAmountWithDecimals, formatEntity } from '../../lib/utils';
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
    accessor: 'hash',
  },
  {
    Header: t('transaction.type'),
    accessor: 'type',
  },
  {
    Header: t('transaction.wallet.destination'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    accessor: 'destinationWallet.category',
  },
  {
    Header: t('transaction.wallet.source'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    accessor: 'sourceWallet.category',
  },
  {
    Header: t('entity'),
    accessor: 'entity',
    Cell: (props) => formatEntity(props.value) || '',
  },
  {
    Header: t('transaction.time'),
    accessor: 'createdAt',
    Cell: (props) => moment(props?.value).format('DD-MM-YYYY, h:mm:ss a'),
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
    Cell: (props) => formatAmountWithDecimals(props.value, 2) || '\u2014', // use 2 as default for decimals
  },
  {
    Header: t('view.title'),
    Cell: (props: { row: { original: Transaction } }) => <ViewTransactionTableCell data={props.row.original} />,
    disableSortBy: true,
  },
];
