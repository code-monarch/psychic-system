import styled from 'styled-components'
import SummaryTable from './SummaryTable'
import WalletsTable from './WalletsTable';

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

// TODO: Get values from API
const summaryTableConfig = [
    { header: "Requested", value: "500,000" },
    { header: "Burnt", value: "184,987" },
    { header: "Issued", value: "400,000" },
    { header: "Distributed", value: "20,030" },
    { header: "Redeemed", value: "20,000" },
    { header: "Rejected", value: "3450" },
    { header: "In Circulation", value: "209,930" },
    { header: "Recovered", value: "4200" },
    { header: "Available", value: "480,000" }
]

export default function WalletsView({ displayName }: { displayName: string }) {
    return (
        <View>
            <Header>Welcome {displayName}!</Header>
            <Title>Summary (Tokens)</Title>
            <SummaryTable config={summaryTableConfig}/>
            <Title>Requests Queue</Title>
            <WalletsTable/>
        </View>
    )
}