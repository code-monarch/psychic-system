import styled from 'styled-components'
import Histogram from './Histogram'

const Card = styled.div `
    display: flex;
    flex-direction: column;
    
    font-size: 12px;
    line-height: 1.5em;
    color: #828282;

    background-color: rgba(250, 250, 250, 0.8);
    border-radius: 8px;
    padding: 16px;
`

const CardTitle = styled.div `
    font-weight: 600;
`

const Header = styled.div `
    display: flex;
    color: #4F4F4F;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    padding: 4px 0;
    border-bottom: solid 1px #F5F5F5;
    margin-bottom: 15px;
`

const HistogramContainer = styled.div `
    display: flex;
    width: 100px;
`

const StyledRow = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3px;
`

const StyledRowTitle = styled.div `
    font-weight: 400;
`

const StyledRowValue = styled.div `
    font-weight: 600;
    color: #4F4F4F;
`

function CardHeader({ className, value, histogramValues }: { className?: string, value: number, histogramValues: number[] }) {
    return (
        <Header className={className}>
            <div>{value}</div>
            <HistogramContainer>
                <Histogram values={histogramValues}/>
            </HistogramContainer>
        </Header>
    )
}

function CardRow({ className, title, value }: { className?: string, title: string, value: number }) {
    return (
        <StyledRow className={className}>
            <StyledRowTitle>{title}</StyledRowTitle>
            <StyledRowValue>{value}</StyledRowValue>
        </StyledRow>
    )
}

export default function HistogramCard({ className, title, value, histogramValues, rows }: { className?: string, title: string, value: number, histogramValues: number[], rows: { title: string, value: number }[] }) {
    return (
        <Card className={className}>
            <CardTitle>{title}</CardTitle>
            <CardHeader value={value} histogramValues={histogramValues} />
            {
                rows.map((row, i) => {
                    return (
                        <CardRow key={'cardrow-' + i} title={row.title} value={row.value}/>
                    )
                })
            }
        </Card>
    )
}