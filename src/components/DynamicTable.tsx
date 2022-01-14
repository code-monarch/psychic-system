import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { Row, Column, HeaderGroup, useTable } from 'react-table';
import Table from './Table';
import searchIcon from '../assets/images/icons/search.svg';
import filterIcon from '../assets/images/icons/filter.svg';
import exportIcon from '../assets/images/icons/export.svg';

type ColumnStyle = CSSObject | ((...args: any[]) => CSSObject);

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Totals = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const Controls = styled.div`
  text-align: end;
`;

const Control = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 24px;
`;

const StyledTableHead = styled(Table.Head)`
  background-color: ${({ theme }) => theme.colors.secondary.lightgrey};
  font-size: 14px;
  font-weight: 600;
`;

const StyledTableHeader = styled(Table.TH)`
  padding: 16px 0;
`;

const StyledTableBody = styled(Table.Body)`
  font-size: 14px;
  font-weight: 600;
`;

const StyledCell = styled(Table.TD)<{ $columnStyle?: CSSObject }>`
  padding: 10px;
  ${({ $columnStyle }) => $columnStyle}
`;

const getColumnStyle = (columnId: string, columnStyle?: ColumnStyle) => {
  if (typeof columnStyle === 'function') {
    return columnStyle(columnId);
  }
  return columnStyle;
};

function TableHeader<R extends object>({
  className,
  headerGroups,
}: {
  className?: string;
  headerGroups: HeaderGroup<R>[];
}) {
  return (
    <StyledTableHead className={className}>
      {headerGroups.map((headerGroup) => (
        <Table.TR {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <StyledTableHeader {...column.getHeaderProps()}>{column.render('Header')}</StyledTableHeader>
          ))}
        </Table.TR>
      ))}
    </StyledTableHead>
  );
}

function TableRow<R extends object>({
  className,
  row,
  columnStyle,
}: {
  className?: string;
  row: Row<R>;
  columnStyle?: ColumnStyle;
}) {
  return (
    <Table.TR className={className} {...row.getRowProps()}>
      {row.cells.map((cell) => (
        <StyledCell $columnStyle={getColumnStyle(cell.column.id, columnStyle)} {...cell.getCellProps()}>
          {cell.render('Cell')}
        </StyledCell>
      ))}
    </Table.TR>
  );
}

function TableBody<R extends object>({
  className,
  rows,
  prepareRow,
  columnStyle,
  ...tableBodyProps
}: {
  className?: string;
  rows: Row<R>[];
  prepareRow: (row: Row<R>) => void;
  columnStyle?: ColumnStyle;
}) {
  return (
    <StyledTableBody className={className} {...tableBodyProps}>
      {rows.map((row, i) => {
        prepareRow(row);
        return <TableRow key={i} {...{ row, columnStyle }} />;
      })}
    </StyledTableBody>
  );
}

export default function DynamicTable<R extends object>({
  className,
  columnData,
  rowData,
  columnStyle,
}: {
  className?: string;
  columnData: Column<R>[];
  rowData: R[];
  columnStyle?: ColumnStyle;
}) {
  const data = React.useMemo(() => rowData, []);
  const columns = React.useMemo(() => columnData, []);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <TableWrapper>
      <Header>
        <Totals>{rows.length} Total Requests</Totals>{' '}
        {/* TODO: pass in the name of the record type (e.g. "Request"), and add pluralization */}
        <Controls>
          {/* TODO: Add search and filter capability */}
          <Control src={searchIcon} alt="Search" />
          <Control src={filterIcon} alt="Filter" />
          <Control src={exportIcon} alt="Export" />
        </Controls>
      </Header>
      <Table className={className} {...{ ...getTableProps() }}>
        <TableHeader className={className} {...{ headerGroups }} />
        <TableBody className={className} {...{ rows, prepareRow, columnStyle, ...getTableBodyProps() }} />
      </Table>
      {/* TODO: Add pagination */}
    </TableWrapper>
  );
}
