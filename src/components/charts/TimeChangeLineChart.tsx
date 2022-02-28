import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';
import { useTheme } from 'styled-components';

export interface TimeValue {
  timestamp: number;
  value: number;
}

export const TimeChangeLineChart = ({ chartId, data }: { chartId: string; data: TimeValue[] }): JSX.Element => {
  const theme = useTheme();

  const firstValue = data[0].value;
  const lastValue = data[data.length - 1].value;

  const colors = {
    positive: theme.colors.primary.green,
    negative: theme.colors.secondary.red,
    equal: theme.colors.primary.darkgrey,
  };

  let color: string;

  if (firstValue < lastValue) {
    color = colors.positive;
  } else if (firstValue > lastValue) {
    color = colors.negative;
  } else {
    color = colors.equal;
  }

  return (
    <ResponsiveContainer width="100%" aspect={6}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={chartId} gradientTransform="rotate(90)">
            <stop offset="0" stopColor={color} stopOpacity={0.5} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis type="number" domain={['dataMin', 'dataMax']} hide />
        <Area dataKey="value" stroke={color} fillOpacity={1} fill={`url(#${chartId})`} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
