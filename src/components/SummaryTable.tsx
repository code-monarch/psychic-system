import styled from 'styled-components'
import Table from './Table';

export interface SummaryTableData {
    header: string,
    value: string
}

const StyledTable = styled(Table) `
    margin: 20px 0;
`

const Cell = styled(Table.TD) `
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
`

const TableHead = styled(Table.Head) `
    font-size: 14px;
    color: #828282;
`

const Header = styled(Table.TH) `
    border-top: 1px solid #E3E2E2;
    border-left: 1px solid #E3E2E2;
    padding: 10px 0;
    font-weight: 600;

    & ${TableHead}:first-child {
        border-left: none;
    }
`

export default function SummaryTable({ config }: { config: SummaryTableData[] }) {
    const headers = config.map(({ header }) => header)
    const values = config.map(({ value }) => value)
    return (
        <StyledTable>
            <TableHead>
                <Table.TR>
                {
                    headers.map((header, i) => (
                        <Header key={i}>{header}</Header>
                    ))
                }
                </Table.TR>
            </TableHead>
            <Table.Body>
                <Table.TR>
                {
                    values.map((data, i) => (
                        <Cell key={i}>{data}</Cell>
                    ))
                }
                </Table.TR>
            </Table.Body>
        </StyledTable>
    )
}