import styled from 'styled-components';
import Table from './Table';

export interface SummaryTableConfig {
  header: string;
  value: string;
}

const StyledTable = styled(Table)`
  margin: 20px 0;
`;

const Cell = styled(Table.TD)`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

const Header = styled(Table.TH)`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  padding: 10px;
  font-weight: 600;
  white-space: nowrap;
`;

const TableHead = styled(Table.Head)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.grey};

  & ${Header}:first-child {
    border-left: none;
  }
`;

export const SummaryTable = ({
  className,
  config,
}: {
  className?: string;
  config: SummaryTableConfig[];
}): JSX.Element => {
  const headers = config.map(({ header }) => header);
  const values = config.map(({ value }) => value);
  return (
    <StyledTable className={className}>
      <TableHead>
        <Table.TR>
          {headers.map((header, i) => (
            <Header key={i}>{header}</Header>
          ))}
        </Table.TR>
      </TableHead>
      <Table.Body>
        <Table.TR>
          {values.map((data, i) => (
            <Cell key={i}>{data}</Cell>
          ))}
        </Table.TR>
      </Table.Body>
    </StyledTable>
  );
};
