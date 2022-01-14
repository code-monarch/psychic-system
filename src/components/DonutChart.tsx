import styled, { useTheme } from 'styled-components';
import { Pie, PieChart, Cell, Label, Legend } from 'recharts';
import { NameValue } from './NameValue';

const StyledLegend = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const StyledLegendItem = styled.li`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const StyledNameValue = styled(NameValue)`
  font-size: 12px;
  line-height: 1.5em;
`;

const CustomLabel = ({
  viewBox,
  label,
  data,
}: {
  viewBox?: any;
  label: { text: string; color: string };
  data: { value: number; color: string };
}) => {
  const { cx, cy } = viewBox;
  return (
    <>
      <text x={cx} y={cy - 5} textAnchor="middle">
        <tspan
          style={{
            fontSize: '12px',
            fontWeight: 'normal',
            fill: label.color,
          }}
        >
          {label.text}
        </tspan>
      </text>
      <text x={cx} y={cy + 15} textAnchor="middle">
        <tspan
          style={{
            fontSize: '14px',
            fontWeight: 600,
            fill: data.color,
          }}
        >
          {data.value}
        </tspan>
      </text>
    </>
  );
};

const CustomLegend = (props: any) => (
  <StyledLegend>
    {props.payload.map((entry: any, index: number) => (
      <StyledLegendItem color={entry.color} key={`item-${index}`}>
        <StyledNameValue name={entry.value} value={props.valueGetter(entry.payload)} />
      </StyledLegendItem>
    ))}
  </StyledLegend>
);

// TODO: Determine how to use `dataKey` with TypeScript instead of having a separate `valueGetter` function

export function DonutChart<T extends object>({
  data,
  dataKey,
  valueGetter,
}: {
  data: T[];
  dataKey: string;
  valueGetter: (datum: T) => number;
}) {
  const theme: any = useTheme();
  const colors = [
    theme.colors.secondary.yellow,
    theme.colors.secondary.lightgreen,
    theme.colors.primary.green,
    theme.colors.secondary.blue,
    theme.colors.secondary.darkgreen,
  ];
  const total = data.reduce((acc, object) => acc + valueGetter(object), 0);
  const label = { text: 'Total', color: theme.colors.primary.grey };
  const labelData = { value: total, color: theme.colors.primary.black };
  return (
    <PieChart width={350} height={150}>
      <Pie
        data={data}
        dataKey={dataKey}
        outerRadius={65}
        innerRadius={45}
        startAngle={180}
        endAngle={-180}
        cx={65}
        fill="transparent"
      >
        {data.map((entry, i) => (
          <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
        ))}
        <Label position="center" content={<CustomLabel label={label} data={labelData} />} />
      </Pie>
      <Legend
        align="right"
        verticalAlign="middle"
        layout="vertical"
        iconType="circle"
        iconSize={6}
        wrapperStyle={{ top: 0, right: 0, height: '100%', width: '150px', display: 'flex' }}
        content={<CustomLegend valueGetter={valueGetter} />}
      />
    </PieChart>
  );
}
