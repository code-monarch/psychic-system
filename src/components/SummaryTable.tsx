import styled from 'styled-components'
import Table from './Table';

const StyledTable = styled(Table) `
    margin: 20px 0;
`

const Cell = styled(Table.TD) `
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`

const TableHead = styled(Table.Head) `
    font-size: 14px;
    font-weight: normal;
    color: #828282;
`

const Header = styled(Table.TH) `
    border-top: 1px solid #E3E2E2;
    border-left: 1px solid #E3E2E2;
    padding: 10px 0;

    & ${TableHead}:first-child {
        border-left: none;
    }
`

export default function SummaryTable({ headers }: {headers: string[]}) {
    return (
        <StyledTable>
            <TableHead>
                {
                    headers.map(header => (
                        <Header>{header}</Header>
                    ))
                }
            </TableHead>
            <Table.Body>
                <Table.TR>
                    <Cell>500,000</Cell>
                    <Cell>184,987</Cell>
                    <Cell>400,000</Cell>
                    <Cell>20,030</Cell>
                    <Cell>20,000</Cell>
                    <Cell>3450</Cell>
                    <Cell>209,930</Cell>
                    <Cell>4200</Cell>
                    <Cell>480,000</Cell>
                </Table.TR>
            </Table.Body>
        </StyledTable>
    )
}