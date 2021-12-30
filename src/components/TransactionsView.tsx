import styled from 'styled-components'
import SummaryTable from './SummaryTable'
import TransactionsTable from './TransactionsTable';

const View = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1; // TODO: Figure out how to determine this from parent
    margin: 0 40px;
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
            <TransactionsTable/>
        </View>
    )
}