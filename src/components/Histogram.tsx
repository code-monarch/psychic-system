import styled from 'styled-components'

const normalize = (values: number[]) => {
    const min = Math.min(...values);
    const max = Math.max(...values);
    return function(val: number, newMin = 0, newMax = 1, constant = 0.5) {
        val = Math.min(Math.max(val, min), max);
        const normalized = (min < max) ? ((val - min) / (max - min)) : constant;
        return normalized * (newMax - newMin) + newMin;
    }
}

const Column = styled.div<{value: number, normalizer: (value: number, newMin: number, newMax: number) => number}> `
    height: ${props => props.normalizer(props.value, 10, 100)}%;
    background-color: ${props => props.value > 0 ? 'green' : 'gray' };
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
