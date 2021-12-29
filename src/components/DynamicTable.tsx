import React from 'react'
import styled from 'styled-components'
import { Row, Column, HeaderGroup, useTable } from 'react-table';
import Table from './Table'
import searchIcon from '../assets/images/icons/search.svg'
import filterIcon from '../assets/images/icons/filter.svg'
import exportIcon from '../assets/images/icons/export.svg'

interface RowData {
    id: string
    organization: string
    requestor: string
    openDate: Date
    amtRequested: number
    amtApproved?: number
    closeDate?: Date
    status: Status
    approver: string
    walletAddress: string
}

enum Status {
    PENDING,
    INPROGRESS,
    APPROVED,
    DENIED
}

type StatusRenderProps = {
    color: string
    text: string
}

type StatusRenderMappings = {[key in Status]: StatusRenderProps}

const statusRenderMappings: StatusRenderMappings = {
    [Status.PENDING]: {color: '#F5C14F', text: "Pending"},
    [Status.INPROGRESS]: {color: '#233984', text: "In Progress"},
    [Status.APPROVED]: {color: '#279F70', text: "Approved"},
    [Status.DENIED]: {color: '#EC3D08', text: "Denied"}
}

const ColoredDotSpan = styled.span `
    &:before {
        content: '\\25cf';
        color: ${props => props.color};
        margin-right: 5px;
    }
`

const StatusCell = ({ status, ...props } : {status: Status}) => {
    const {color, text} = statusRenderMappings[status];
    return (
        <ColoredDotSpan { ...{color} } >{text}</ColoredDotSpan>
    )
}

const formatDate = (date: Date) : string => {
    const year = '' + date.getFullYear()
    const month = ('' + (date.getMonth() + 1)).padStart(2, '0');
    const day = ('' + (date.getDate())).padStart(2, '0');

    return [month, day, year].join('-');
}

const headerData : Array<Column<RowData>> =
[
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
        Cell: props => formatDate(props.value)
    },
    {
        Header: 'Amount Requested',
        accessor: 'amtRequested',
    },
    {
        Header: 'Amount Approved',
        accessor: 'amtApproved',
        Cell: props => props.value || '\u2014'
    },
    {
        Header: 'Close Date',
        accessor: 'closeDate',
        Cell: props => props.value? formatDate(props.value) : '\u2014'
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: props => <StatusCell status={props.value}/>
    },
    {
        Header: 'Approver',
        accessor: 'approver',
    },
    {
        Header: 'Wallet Address',
        accessor: 'walletAddress',
    }
];

const rowData : Array<RowData> = [
    {
        id: "12345ABCDE",
        organization: "Ministry of Health",
        requestor: "Dr. Osas Obasi",
        openDate: new Date(2021, 3, 2),
        amtRequested: 200000,
        status: Status.PENDING,
        approver: "Carmelle Cadet",
        walletAddress: "0865FGHD7439"
    },
    {
        id: "12345ABCDF",
        organization: "First Bank, Plc",
        requestor: "Mr. Femi Obasi",
        openDate: new Date(2021, 3, 2),
        amtRequested: 1000000,
        status: Status.INPROGRESS,
        approver: "Carmelle Cadet",
        walletAddress: "0865FGHD7439"
    },
    {
        id: "12345ABCDG",
        organization: "Wema Bank, Plc",
        requestor: "Dr. Osas Obasi",
        openDate: new Date(2021, 2, 2),
        amtRequested: 1000000,
        amtApproved: 1000000,
        closeDate: new Date(2021, 3, 2),
        status: Status.APPROVED,
        approver: "Carmelle Cadet",
        walletAddress: "0865FGHD7439"
    }
]

const TableWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

const Totals = styled.div `
    font-size: 14px;
    font-weight: 600;
    color: #828282;
`

const Controls = styled.div `
    text-align:right;
`

const Control = styled.img `
    height: 24px;
    width: 24px;
    margin-left: 24px;
`

const StyledTable = styled(Table) `
    border-collapse: separate;
    border-spacing: 0 16px;
`

const StyledTableHead = styled(Table.Head) `
    background-color: #F5F5F5;
    font-size: 14px;
    font-weight: 600;
`

const StyledTableHeader = styled(Table.TH) `
    padding: 16px 0;
`

const StyledTableBody = styled(Table.Body) `
    font-size: 14px;
    font-weight: 600;
`

function TableHeader({ className, headerGroups }: { className?: string, headerGroups: HeaderGroup<RowData>[] }) {
    return (
        <StyledTableHead {...className}>
        {
        headerGroups.map(headerGroup => (
            <Table.TR {...headerGroup.getHeaderGroupProps()}>
                { headerGroup.headers.map(column => (
                <StyledTableHeader {...column.getHeaderProps()}>{column.render('Header')}</StyledTableHeader>
                ))}
            </Table.TR>
        ))}
        </StyledTableHead>
    )
}

function TableRow({ row }: { row: Row<RowData> }) {
    return (
        <Table.TR {...row.getRowProps()}>
            {row.cells.map(cell => (
                <Table.TD {...cell.getCellProps()}>{cell.render('Cell')}</Table.TD>
            ))}
        </Table.TR>
    );
}

function TableBody({ rows, prepareRow, ...tableBodyProps }: { rows: Row<RowData>[], prepareRow: (row: Row<RowData>) => void }) {
    return (
    <StyledTableBody {...tableBodyProps}>
       {
       rows.map(row => {
         prepareRow(row)
         return (
           <TableRow {...{ row }}/>
         )
       })}
     </StyledTableBody>
    )
}

// TODO: Pass data in
export default function DynamicTable( { className }: { className? : string }) {
    const data = React.useMemo(() => rowData, []);
    const columns = React.useMemo(() => headerData, []);
    const tableInstance = useTable( { columns, data });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance;

    return (
        <TableWrapper>
            <Header>
                <Totals>2030 Total Requests</Totals>
                <Controls>
                    <Control src={searchIcon} alt="Search"/>
                    <Control src={filterIcon} alt="Filter"/>
                    <Control src={exportIcon} alt="Export"/>
                </Controls>
            </Header>
            <StyledTable className={ className } { ...{...getTableProps()} }>
                <TableHeader className={ className } { ...{headerGroups} }/>
                <TableBody className={ className } { ...{ rows, prepareRow, ...getTableBodyProps() } } />
            </StyledTable>
        </TableWrapper>
    )
}
