import React from 'react';
import styled from 'styled-components';
import { Row, Column, HeaderGroup, useTable, Cell } from 'react-table';
import Table from './Table';

const StyledTableHead = styled(Table.Head)`
  background-color: ${({ theme }) => theme.colors.primary.lightgrey};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
`;

const StyledTableHeader = styled(Table.TH)`
  padding: 12px 0;
`;

const StyledTableBody = styled(Table.Body)`
  font-size: 14px;
  font-weight: 600;
`;

const StyledCell = styled(Table.TD)`
  padding: 10px;
`;

const defaultPropGetter = () => ({});

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
  getColumnProps,
  getCellProps,
}: {
  className?: string;
  row: Row<R>;
  getColumnProps: (col: Column) => object;
  getCellProps: (cell: Cell<R>) => object;
}) {
  return (
    <Table.TR className={className} {...row.getRowProps()}>
      {row.cells.map((cell) => (
        <StyledCell {...cell.getCellProps([getColumnProps(cell.column), getCellProps(cell)])}>
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
  getColumnProps,
  getCellProps,
  ...tableBodyProps
}: {
  className?: string;
  rows: Row<R>[];
  prepareRow: (row: Row<R>) => void;
  getColumnProps: (col: Column) => object;
  getCellProps: (cell: Cell<R>) => object;
}) {
  return (
    <StyledTableBody className={className} {...tableBodyProps}>
      {rows.map((row, i) => {
        prepareRow(row);
        return <TableRow key={i} {...{ row, getColumnProps, getCellProps }} />;
      })}
    </StyledTableBody>
  );
}

export const BasicTable = <R extends object>({
  className,
  columnData,
  rowData,
  getColumnProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}: {
  className?: string;
  columnData: Column<R>[];
  rowData: R[];
  getColumnProps?: (col: Column) => object;
  getCellProps?: (cell: Cell<R>) => object;
}): JSX.Element => {
  const data = React.useMemo(() => rowData, []);
  const columns = React.useMemo(() => columnData, []);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <Table className={className} {...{ ...getTableProps() }}>
      <TableHeader {...{ headerGroups }} />
      <TableBody {...{ rows, prepareRow, getColumnProps, getCellProps, ...getTableBodyProps() }} />
    </Table>
  );
};
