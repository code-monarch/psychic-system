import React from 'react';
import styled from 'styled-components'
import { Row, Column, HeaderGroup, useTable } from 'react-table';

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
        Cell: props => props.value.toLocaleDateString()
    },
    {
        Header: 'Amount Requested',
        accessor: 'amtRequested',
    },
    {
        Header: 'Amount Approved',
        accessor: 'amtApproved',
    },
    {
        Header: 'Close Date',
        accessor: 'closeDate',
        Cell: props => props.value? props.value.toLocaleDateString() : '-'
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

function TableHeader({ headerGroups }: { headerGroups: HeaderGroup<RowData>[] }) {
    return (
        <thead>
        {
        headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                { headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
            </tr>
        ))}
        </thead>
    )
}

function TableRow({ row }: { row: Row<RowData> }) {
    return (
        <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            ))}
        </tr>
    );
}

function TableBody({ rows, prepareRow, ...tableBodyProps }: { rows: Row<RowData>[], prepareRow: (row: Row<RowData>) => void }) {
    return (
    <tbody {...tableBodyProps}>
       {
       rows.map(row => {
         prepareRow(row)
         return (
           <TableRow {...{ row }}/>
         )
       })}
     </tbody>
    )
}

export default function Table( { className }: { className? : string }) {
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
        <table { ...{className, ...getTableProps()} }>
            <TableHeader { ...{headerGroups} }/>
            <TableBody { ...{ rows, prepareRow, ...getTableBodyProps() } } />
        </table>
    )
}
