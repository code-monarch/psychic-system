import styled, { useTheme } from 'styled-components';
import { PieChart, Pie, Sector, ResponsiveContainer, Text } from 'recharts';
import { useState } from 'react';
import { NameValue } from '../NameValue';
import { Paragraph } from '../styled';
import { formatAmount } from '../../lib/utils';

const StyledLegendItem = styled.li`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const StyledNameValue = styled(NameValue)`
  font-size: 12px;
  line-height: 1.5em;
`;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      {/* <Text x={cx} y={cy} dy={0} textAnchor="middle" width={40} height={100} textLength={100}> */}
      {/*  {payload.name} */}
      {/* </Text> */}
      <foreignObject x={cx - 35} y={cy - 35} dy={-70} width="70" height="70">
        <CenterTextWrapper>
          <CenterText>{payload.name}</CenterText>
        </CenterTextWrapper>
      </foreignObject>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#4AB0A6"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#4AB0A6"
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#4AB0A6" fill="none" />
      <circle cx={ex} cy={ey} r={2} fill="#4AB0A6" stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#4AB0A6"
        style={{
          fontSize: 12,
          fontFamily: 'ProximaNovaBold',
        }}
      >{`${formatAmount(value)}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#1A242D"
        style={{
          fontSize: 12,
          fontFamily: 'ProximaNovaBold',
        }}
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

// TODO: Determine how to use `dataKey` with TypeScript instead of having a separate `valueGetter` function

export const CustomPieChart = <T extends object>({ data }: { data: T[] }) => {
  const theme: any = useTheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { grey } = theme.colors.secondary;
  const colors = [
    theme.colors.secondary.yellow,
    theme.colors.secondary.lightgreen,
    theme.colors.primary.green,
    theme.colors.secondary.blue,
    theme.colors.secondary.darkgreen,
  ];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={70} height={70}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={60}
          fill={grey}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const CenterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const CenterText = styled(Paragraph)`
  width: 60px;
  text-align: center;
`;
