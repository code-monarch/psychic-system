import React from 'react';
import styled from 'styled-components';
import { Cell, Column, HeaderGroup, Row, usePagination, useTable } from 'react-table';
import Table from './Table';
import searchIcon from '../../assets/images/icons/search.svg';
import filterIcon from '../../assets/images/icons/filter.svg';
import exportIcon from '../../assets/images/icons/export.svg';

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
  background-color: ${({ theme }) => theme.colors.primary.lightgrey};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.darkgrey};
`;

const StyledTableHeader = styled(Table.TH)`
  padding: 16px 10px;
  text-align: start;

  &:last-child {
    text-align: end;
  }
`;

const StyledTableBody = styled(Table.Body)`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.darkgrey};
`;

const StyledCell = styled(Table.TD)`
  padding: 10px;
`;

const Pagination = styled.div`
  text-align: end;
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
  getColumnProps: (col: Column<R>) => object;
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
  page,
  prepareRow,
  getColumnProps,
  getCellProps,
  ...tableBodyProps
}: {
  className?: string;
  page: Row<R>[];
  prepareRow: (row: Row<R>) => void;
  getColumnProps: (col: Column<R>) => object;
  getCellProps: (cell: Cell<R>) => object;
}) {
  return (
    <StyledTableBody className={className} {...tableBodyProps}>
      {page.map((row, i) => {
        prepareRow(row);
        return <TableRow key={i} {...{ row, getColumnProps, getCellProps }} />;
      })}
    </StyledTableBody>
  );
}

function EventedButton({
  className,
  text,
  callback,
  disabled,
}: {
  className?: string;
  text: string;
  callback: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}): JSX.Element {
  function handleClick(e) {
    e.preventDefault();
    if (!disabled) {
      callback(e);
    }
  }
  return (
    <button aria-disabled={disabled} className={className} type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

const TextButton = styled(EventedButton)`
  background: none;
  border: none;
  padding: 0 4px;
  font-family: 'ProximaNova', sans-serif;
  font-weight: 600;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.secondary.grey : theme.colors.primary.grey)};
  text-decoration: none;
  cursor: pointer;
`;

export const DynamicTable = <R extends object>({
  className,
  columnConfig,
  rowData,
  hideFilters = false,
  getColumnProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
}: {
  className?: string;
  hideFilters?: boolean;
  columnConfig: Column<R>[];
  rowData: R[];
  getColumnProps?: (col: Column<R>) => object;
  getCellProps?: (cell: Cell<R>) => object;
}): JSX.Element => {
  const data = React.useMemo(() => rowData, []);
  const columns = React.useMemo(() => columnConfig, []);
  const tableInstance = useTable<R>({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
  } = tableInstance;

  return (
    <TableWrapper>
      <Header>
        <Totals>{rows.length} Total Requests</Totals>
        {/* TODO: pass in the name of the record type (e.g. "Request"), and add pluralization */}
        {!hideFilters && (
          <Controls>
            {/* TODO: Add search and filter capability */}
            <Control src={searchIcon} alt="Search" />
            <Control src={filterIcon} alt="Filter" />
            <Control src={exportIcon} alt="Export" />
          </Controls>
        )}
      </Header>
      <Table className={className} {...{ ...getTableProps() }}>
        <TableHeader className={className} {...{ headerGroups }} />
        <TableBody
          className={className}
          {...{ page, prepareRow, getColumnProps, getCellProps, ...getTableBodyProps() }}
        />
      </Table>
      <Pagination>
        <TextButton text="<" callback={() => previousPage()} disabled={!canPreviousPage} />
        {/* TODO: Implement more complex pagination */}
        <TextButton text=">" callback={() => nextPage()} disabled={!canNextPage} />
      </Pagination>
    </TableWrapper>
  );
};
