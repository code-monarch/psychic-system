import styled from 'styled-components'
import { Pie, PieChart, Cell, Label, Legend } from 'recharts'
import { NameValue } from './NameValue';

const colors = [ "#F5C14F", "#CAEF45", "#279F70", "#233984", "#015E5F" ];

const StyledLegend = styled.ul `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`

const StyledLegendItem = styled.li `
    color: ${props => props.color};
    font-weight: 600;
`

const StyledNameValue = styled(NameValue) `
    font-size: 12px;
    line-height: 1.5em;
`

const CustomLabel = ({ viewBox, label, value }: { viewBox?: any, label: string, value: number }) => {
    const { cx, cy } = viewBox;
    return (
        <>
            <text x={cx} y={cy - 5} textAnchor='middle'>
            <tspan
                style={{
                fontSize: '12px',
                fontWeight: 'normal',
                fill: '#828282',
                }}
            >
                {label}
            </tspan>
            </text>
            <text x={cx} y={cy + 15} textAnchor='middle'>
            <tspan
                style={{
                fontSize: '14px',
                fontWeight: 600,
                fill: "#2E2E2E",
                }}
            >
                {value}
            </tspan>
            </text>
        </>
    );
};

const CustomLegend = (props: any) => {
    return (
        <StyledLegend>
          {
            props.payload.map((entry: any, index: number) => (
              
              <StyledLegendItem color={entry.color} key={`item-${index}`}>
                  <StyledNameValue name={entry.value} value={props.valueGetter(entry.payload)}/>
              </StyledLegendItem>
            ))
          }
        </StyledLegend>
      );
}

// TODO: Determine how to use `dataKey` with TypeScript instead of having a separate `valueGetter` function

export function DonutChart<T extends object>({ data, dataKey, valueGetter } : {data: T[], dataKey: string, valueGetter: (datum: T) => number}) {
    const total = data.reduce((acc, object) => { return acc + valueGetter(object) }, 0);
    return (
        <PieChart width={350} height={150}>
            <Pie data={data} dataKey={dataKey} outerRadius={65} innerRadius={45} startAngle={180} endAngle={-180} cx={65} fill="transparent">
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
            ))}
                <Label position="center" content={<CustomLabel label='Total' value={total}/>}/>
            </Pie>
            <Legend align="right" verticalAlign="middle" layout="vertical" iconType="circle" iconSize={6} wrapperStyle={{ top: 0, right: 0, height: '100%', width: '150px', display: 'flex' }} content={<CustomLegend valueGetter={valueGetter}/>} />
        </PieChart>
    )
}