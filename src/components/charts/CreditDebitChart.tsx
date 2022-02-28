import styled, { useTheme } from 'styled-components';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts';
import { Flex } from '../styled';
import credit from '../../assets/images/icons/credit.svg';
import debit from '../../assets/images/icons/debit.svg';
import { LabeledValueWithIcon } from '../LabeledValueWithIcon';

interface ChartData {
  month: string;
  credit: number;
  debit: number;
}

interface TickProps {
  x: number;
  y: number;
  payload: { value: number };
}

const Header = styled(Flex.Row)`
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledTooltip = styled.div`
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 3px rgb(60 64 67 / 30%);
  background-color: ${({ theme }) => theme.colors.primary.white};
`;

const TooltipLabel = styled.div`
  color: ${({ theme }) => theme.colors.primary.black};
  font-weight: 600;
`;

const TooltipRow = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
  display: flex;

  dt {
    flex-basis: 20%;
  }
  dd {
    flex-basis: 70%;
    flex-grow: 1;
    text-align: right;
  }
`;

const TooltipValues = styled.dl`
  padding: 0;
  margin: 0;
`;

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <StyledTooltip>
        <TooltipLabel>{label}</TooltipLabel>
        <TooltipValues>
          {payload.map((line) => (
            <TooltipRow $color={line.color}>
              <dt>{line.name}</dt>
              <dd>{line.value}</dd>
            </TooltipRow>
          ))}
        </TooltipValues>
      </StyledTooltip>
    );
  }

  return null;
};

const CustomYTick = ({ y, payload, $color }: Partial<TickProps> & { $color: string }) => (
  <text x={0} y={y} textAnchor="start" fill={$color} fontSize={12}>
    {payload.value}
  </text>
);

const CreditDebitChart = ({ chartData }: { chartData: ChartData[] }): JSX.Element => {
  const theme = useTheme();
  const { grey, lightgrey } = theme.colors.primary;
  const { red, darkgreen: green } = theme.colors.secondary;
  return (
    <div>
      <Header>
        {/* TODO: determine where these values come from */}
        <LabeledValueWithIcon label="Credit" value="$4.34B" icon={credit} />
        <LabeledValueWithIcon label="Debit" value="$2.37B" icon={debit} />
      </Header>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={chartData}>
          <CartesianGrid vertical={false} stroke={lightgrey} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: grey }}
            height={40}
            dy={20}
          />
          <YAxis tickLine={false} axisLine={false} tick={<CustomYTick $color={grey} />} />
          <Tooltip content={<CustomTooltip />} />
          {/* TODO: Internationalization */}
          <Line dataKey="credit" name="Credit" stroke={green} dot={{ stroke: green }} />
          <Line dataKey="debit" name="Debit" stroke={red} dot={{ stroke: red }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { CreditDebitChart };
