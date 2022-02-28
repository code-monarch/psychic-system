import styled from 'styled-components';

const Chart = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 2px;
`;

const ChartOption = styled.div<{ ratio: number; first?: boolean; last?: boolean }>`
  flex: ${(props) => props.ratio};
  display: flex;
  flex-direction: column;
  margin-right: 3px;
  text-align: center;

  ${(props) =>
    props.first &&
    `
        text-align: start;
        ${Bar} {
            border-radius: 2px 0 0 2px;
        }
    `}

  ${(props) =>
    props.last &&
    `
        margin-right: 0;
        text-align: end;
        ${Bar} {
            border-radius: 0 2px 2px 0;
        }
    `}
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.primary.grey};
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 6px;
`;

const Bar = styled.div<{ color: string }>`
  height: 10px;
  background-color: ${(props) => props.color};
`;

const Value = styled.div`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 14px;
  line-height: 150%;
  font-weight: 600;
  margin-top: 8px;
`;

export interface Option {
  label: string;
  color: string;
  value: number;
}

export default function ComparisonChart({ options }: { options: Option[] }) {
  const total = options.map((option) => option.value).reduce((a, b) => a + b);
  return (
    <Chart>
      {options.map((option, i, { length }) => {
        const ratio = option.value / total;
        return (
          <ChartOption key={`chartoption-${i}`} first={i === 0} last={i + 1 === length} ratio={ratio}>
            <Label>{option.label}</Label>
            <Bar color={option.color} />
            <Value>{Math.round(ratio * 100) /* TODO: Improve this to ensure it equals 100 */} %</Value>
          </ChartOption>
        );
      })}
    </Chart>
  );
}
