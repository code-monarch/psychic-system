import styled from 'styled-components';
import { Cell, Column } from 'react-table';
import { Status, statusRenderMappings } from '../../lib/constants';
import { formatDate } from '../../lib/utils';

export interface WalletRow {
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

export const columnConfig: Column<WalletRow>[] = [
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
    Cell: ({ value }: Cell<WalletRow>) => <StyledStatus status={value} />,
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
