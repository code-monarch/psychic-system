import styled from 'styled-components'
import { normalize } from '../lib/utils'

const Column = styled.div<{value: number, normalizer: (value: number, newMin: number, newMax: number) => number}> `
    height: ${props => props.normalizer(props.value, 10, 100)}%;
    background-color: ${props => props.value > 0 ? '#279F70' /* TODO: Add this color to theme */ : props.theme.colors.secondary.grey };
`

const Chart = styled.div<{columnCount: number}> `
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    ${Column} {
        width: ${props => (100 / (props.columnCount * 2))}%
    }
`

export default function Histogram({ values }: { values: number[] }) {
    const normalizer = normalize(values);
    return (
        <Chart columnCount={values.length}>
            {
                values.map((value, i) => <Column key={'column-' + i} value={value} normalizer={normalizer}/>)
            }
        </Chart>
    )
}
