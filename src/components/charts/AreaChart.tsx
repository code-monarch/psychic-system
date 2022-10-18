import styled, { useTheme } from 'styled-components';
import { Area, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTranslation } from 'react-i18next';
import { NameValue } from '../NameValue';
import { formatAmount } from '../../lib/utils';

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

function XAxisTick(props) {
  const { x, y, payload, className } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="white"
        fontSize="12px"
        fontFamily="ProximaNova"
        className={className}
      >
        {payload.value}
      </text>
    </g>
  );
}

function YAxisTick(props) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-10} y={0} dy={3} textAnchor="end" fill="white" fontSize="12px" fontFamily="ProximaNova">
        {formatAmount(payload.value)}
      </text>
    </g>
  );
}

// TODO: Customize legend later
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

export const ReAreaChart = <T extends object>({
  data,
  width = '100%',
  height = 300,
}: {
  data: T[];
  width?: string;
  height?: number;
}) => {
  const theme: any = useTheme();
  const { t } = useTranslation();
  const { green, white } = theme.colors.primary;
  const { red } = theme.colors.secondary;

  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={green} stopOpacity={0.8} />
              <stop offset="95%" stopColor={green} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={<XAxisTick />}
            stroke="black"
            interval="preserveStartEnd"
          />
          <Legend verticalAlign="top" height={36} align="right" iconSize={12} />
          <YAxis tick={<YAxisTick />} axisLine={false} tickLine={false} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#687D94" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={t('credit')}
            stroke={green}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Line type="monotone" dataKey={t('debit')} stroke={white} strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
