import styled from 'styled-components';
import { Cell, Column } from 'react-table';

export enum Status {
  PENDING,
  INPROGRESS,
  APPROVED,
  DENIED,
}

export interface TransactionRow {
  id: string;
  organization: string;
  requestor: string;
  openDate: Date;
  amtRequested: number;
  amtApproved?: number;
  closeDate?: Date;
  status: Status;
  approver: string;
  walletAddress: string;
}

type StatusRenderMappings = { [key in Status]: { color: string; text: string } };

const statusRenderMappings: StatusRenderMappings = {
  [Status.PENDING]: { color: '#F5C14F', text: 'Pending' },
  [Status.INPROGRESS]: { color: '#233984', text: 'In Progress' },
  [Status.APPROVED]: { color: '#279F70', text: 'Approved' },
  [Status.DENIED]: { color: '#EC3D08', text: 'Denied' },
};

const ColoredDotSpan = styled.span`
  &:before {
    content: '\\25cf';
    color: ${({ color }) => color};
    margin-right: 5px;
  }
`;

const StyledStatus = ({ status }: { status: Status }): JSX.Element => {
  const { color, text } = statusRenderMappings[status];
  return <ColoredDotSpan {...{ color }}>{text}</ColoredDotSpan>;
};

// TODO: Replace with Intl.DateTimeFormat
const formatDate = (date: Date): string => {
  const year = `${date.getFullYear()}`;
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');

  return [month, day, year].join('-');
};

export const columnConfig: Column<TransactionRow>[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Organization',
    accessor: 'organization',
  },
  {
    Header: 'Requestor',
    accessor: 'requestor',
  },
  {
    Header: 'Open Date',
    accessor: 'openDate',
    Cell: (props) => formatDate(props.value),
  },
  {
    Header: 'Amount Requested',
    accessor: 'amtRequested',
  },
  {
    Header: 'Amount Approved',
    accessor: 'amtApproved',
    Cell: (props) => props.value || '\u2014',
  },
  {
    Header: 'Close Date',
    accessor: 'closeDate',
    Cell: (props) => (props.value ? formatDate(props.value) : '\u2014'),
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }: Cell<TransactionRow>) => <StyledStatus status={value} />,
  },
  {
    Header: 'Approver',
    accessor: 'approver',
  },
  {
    Header: 'Wallet Address',
    accessor: 'walletAddress',
  },
];
