import { useTheme } from 'styled-components';
import { Area, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTranslation } from 'react-i18next';
import { formatAmount } from '../../lib/utils';

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
      <text x={50} y={0} dy={3} textAnchor="end" fill="white" fontSize="12px" fontFamily="ProximaNova">
        {formatAmount(payload.value)}
      </text>
    </g>
  );
}

export const TrendedChart = <T extends object>({
  data,
  width = '100%',
  height = 245,
}: {
  data: T[];
  width?: string;
  height?: number;
}) => {
  const theme: any = useTheme();
  const { t } = useTranslation();
  const { green } = theme.colors.primary;

  return (
    <div
      style={{
        width,
        height,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
          <YAxis tick={<YAxisTick />} axisLine={false} tickLine={false} orientation="right" />
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
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
