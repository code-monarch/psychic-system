import React from 'react'
import styled from 'styled-components'
import { Row, Column, HeaderGroup, useTable } from 'react-table';
import Table from './Table'

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

const StyledHeader = styled(Table.Head) `
    background-color: #F5F5F5;
`

const Controls = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

function TableHeader({ className, headerGroups }: { className?: string, headerGroups: HeaderGroup<RowData>[] }) {
    return (
        <StyledHeader {...className}>
        {
        headerGroups.map(headerGroup => (
            <Table.TR {...headerGroup.getHeaderGroupProps()}>
                { headerGroup.headers.map(column => (
                <Table.TH {...column.getHeaderProps()}>{column.render('Header')}</Table.TH>
                ))}
            </Table.TR>
        ))}
        </StyledHeader>
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
    <Table.Body {...tableBodyProps}>
       {
       rows.map(row => {
         prepareRow(row)
         return (
           <TableRow {...{ row }}/>
         )
       })}
     </Table.Body>
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
            <Controls>
                <div>Search</div>
                <div>Filter</div>
                <div>Export</div>
            </Controls>
            <Table className={ className } { ...{...getTableProps()} }>
                <TableHeader className={ className } { ...{headerGroups} }/>
                <TableBody className={ className } { ...{ rows, prepareRow, ...getTableBodyProps() } } />
            </Table>
        </TableWrapper>
    )
}
