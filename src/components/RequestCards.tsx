import styled from 'styled-components'
import { Flex, Title } from './styled'
import HistogramCard from './HistogramCard'

const CardRow = styled(Flex.Row) `
    margin-top: 40px;
    justify-content: space-evenly;
`

const TitledCard = styled.div `
width: 300px;
${Title} {
    margin-left: 8px;
}
`

function RequestCards() {
    // TODO: Get this data from API
    const histogramValues = [0, 0, 4, 7, 0, 1, 5];
    const walletsRows = [
        {
            name: 'Pending',
            value: '50'
        },
        {
            name: 'Issued',
            value: '30'
        },
        {
            name: 'Requested',
            value: '45'
        },
        {
            name: 'Activated',
            value: '25'
        }
    ];

    const tokensRows = [
        {
            name: 'Requested',
            value: '1,904,946'
        },
        {
            name: 'In Reserve',
            value: '28,000'
        },
        {
            name: 'Requested',
            value: '1,345,898'
        },
        {
            name: 'In Supply',
            value: '23,000,000'
        }
    ];
    return (
        <CardRow>
            <TitledCard>
                <Title>Active Wallets (YTD)</Title>
                <HistogramCard title="Total Wallets" value="30" histogramValues={histogramValues} rows={walletsRows}></HistogramCard>
            </TitledCard>
            <TitledCard>
                <Title>Tokens</Title>
                <HistogramCard title="Total Amount" value="$29,000" histogramValues={histogramValues} rows={tokensRows}></HistogramCard>
            </TitledCard>
        </CardRow>
    )
}

export { RequestCards }
