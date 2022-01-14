import styled from 'styled-components';
import Histogram from './Histogram';
import { Flex } from './styled';
import { NameValue } from './NameValue';

const Card = styled.div`
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 8px;
  padding: 16px;
`;

const CardTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const Header = styled(Flex.Row)`
    color: ${({ theme }) => theme.colors.primary.darkgrey};
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    padding: 10px 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.secondary.lightgrey}
    margin-bottom: 16px;
`;

const HistogramContainer = styled.div`
  display: flex;
  width: 100px;
`;

const StyledNameValue = styled(NameValue)`
  font-size: 12px;
  margin: 10px 0;

  ${NameValue.Name} {
    color: ${({ theme }) => theme.colors.primary.grey};
    font-weight: 400;
  }

  ${NameValue.Value} {
    color: ${({ theme }) => theme.colors.primary.darkgrey};
    font-weight: 600;
  }
`;

function CardHeader({
  className,
  value,
  histogramValues,
}: {
  className?: string;
  value: string;
  histogramValues: number[];
}) {
  return (
    <Header className={className}>
      <div>{value}</div>
      <HistogramContainer>
        <Histogram values={histogramValues} />
      </HistogramContainer>
    </Header>
  );
}

export default function HistogramCard({
  className,
  title,
  value,
  histogramValues,
  rows,
}: {
  className?: string;
  title: string;
  value: string;
  histogramValues: number[];
  rows: { name: string; value: string }[];
}) {
  return (
    <Card className={className}>
      <CardTitle>{title}</CardTitle>
      <CardHeader value={value} histogramValues={histogramValues} />
      {rows.map((row, i) => (
        <StyledNameValue key={`cardrow-${i}`} name={row.name} value={row.value} />
      ))}
    </Card>
  );
}
