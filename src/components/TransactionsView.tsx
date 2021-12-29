import styled from 'styled-components'
import SummaryTable from './SummaryTable'
import DynamicTable from './DynamicTable';


const View = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1; // TODO: Figure out how to determine this from parent
    margin-left: 40px;
`

const Header = styled.h2 `
    color: #2E2E2E;
    font-weight: bold;
    font-size: 28px;
`

const Title = styled.h5 `
    margin: 16px 0;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
`

const SubTitle = styled.div `
    font-size: 14px;
    font-weight: normal;
    color: #828282;
`

const TransactionsTable = styled(DynamicTable) `

`

const summaryTableHeaders = [
    "Requested",
    "Burnt",
    "Issued",
    "Distributed",
    "Redeemed",
    "Rejected",
    "In Circulation",
    "Recovered",
    "Available"
]

export default function TransactionsView() {
    return (
        <View>
            <Header>Welcome Olaide!</Header>
            <Title>Summary (Tokens)</Title>
            <SummaryTable headers={summaryTableHeaders}/>
            <Title>Requests Queue</Title>
            <SubTitle>2030 Total Requests</SubTitle>
            <TransactionsTable/>
        </View>
    )
}