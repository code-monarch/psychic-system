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
  status: string;
  translation: TFunction;
}): JSX.Element => {
  const transactionTypeRenderMappings: TransactionTypeRenderMappings = {
    [TransactionType.DEBIT]: { color: '#EC3D08', text: translation('debit') },
    [TransactionType.CREDIT]: { color: '#4AB0A6', text: translation('credit') },
  };

  const { color, text } =
    transactionTypeRenderMappings[creditStatus === 'CREDIT' ? TransactionType.CREDIT : TransactionType.DEBIT];
  return <ColoredSpan {...{ color }}>{text}</ColoredSpan>;
};

export const getTransactionsTableColumnConfig = (t: TFunction): Column<Transaction>[] => [
  {
    Header: t('transaction.Id'),
    accessor: 'hash',
    Cell: (props) => `${props?.value?.slice(0, 7)}...`,
  },
  {
    Header: t('wallet'),
    accessor: 'wallet',
    Cell: (props) => `${props?.value}`,
  },
  {
    Header: t('transaction.type'),
    accessor: 'type',
  },
  {
    Header: t('status'),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    accessor: 'status',
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
    accessor: 'entry',
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
