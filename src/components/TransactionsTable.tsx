import styled, { CSSObject } from 'styled-components'
import { Column } from 'react-table';
import DynamicTable from './DynamicTable';

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

type StatusRenderMappings = {[key in Status]: {color: string, text: string}}

const statusRenderMappings: StatusRenderMappings = {
    [Status.PENDING]: {color: '#F5C14F', text: "Pending"},
    [Status.INPROGRESS]: {color: '#233984', text: "In Progress"},
    [Status.APPROVED]: {color: '#279F70', text: "Approved"},
    [Status.DENIED]: {color: '#EC3D08', text: "Denied"}
}

const ColoredDotSpan = styled.span `
    &:before {
        content: '\\25cf';
        color: ${({ color }) => color};
        margin-right: 5px;
    }
`

const StyledStatus = ({ status } : {status: Status}) => {
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

const columnData : Column<RowData>[] =
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
        Cell: props => <StyledStatus status={props.value}/>
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

// TODO: Get data from API
const rowData : RowData[] = [
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

const columnAlignment = (columnId: string) : CSSObject => {
    let textAlign: ('start' | 'end');
    switch(columnId) {
        case 'amtRequested':
        case 'amtApproved':
            textAlign = 'end'
            break;
        default:
            textAlign = 'start'
            break;
    }
    return {
        textAlign: textAlign
    }
}

export default function RequestsTable() {
    return (
        <DynamicTable columnData={columnData} columnStyle={columnAlignment} rowData={rowData}/>
    )
}