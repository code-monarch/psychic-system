import styled from 'styled-components';
import { Column } from 'react-table';
import { DynamicTable } from '../../components/DynamicTable';
import { Title } from '../../components/styled';
import { columnConfig, WalletRow } from './table-config';
import { Status } from '../../lib/constants';
import { createMultipleTableRowData } from '../../lib/utils';

interface IWalletProps {
  displayName: string;
}

const Wrapper = styled.div`
  margin: 0 80px;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.colors.primary.black};
  font-weight: bold;
  font-size: 28px;
`;

// TODO: Get data from API
const rowData: WalletRow[] = [
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

const columnPropGetter = (col: Column<WalletRow>) => {
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

export const Wallets = (props: IWalletProps): JSX.Element => {
  const { displayName } = props;
  return (
    <Wrapper>
      <Header>Welcome {displayName}!</Header>
      <StyledTitle>Wallet Requests Queue</StyledTitle>
      <DynamicTable<WalletRow>
        columnConfig={columnConfig}
        rowData={createMultipleTableRowData(rowData, 20)}
        getColumnProps={columnPropGetter}
      />
    </Wrapper>
  );
};

const StyledTitle = styled(Title)`
  margin: 16px 0;
  text-transform: uppercase;
`;
