import styled, { useTheme } from 'styled-components';
import { Paragraph, ParagraphBold } from './styled';
import Histogram from './charts/Histogram';
import { formatAmount } from '../lib/utils';

const Wrapper = styled.div`
  height: 92px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.lightgrey};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;

  &.disabled p {
    color: ${({ theme }) => theme.colors.secondary.grey};
  }
`;

const HistogramContainer = styled.div`
  display: flex;
  width: 100px;
  height: 24px;
`;

interface ICurrencySummaryCardProps {
  title: string;
  amount?: string;
  disabled?: boolean;
}
const histogramValues = [0, 0, 4, 7, 0, 1, 5];

export const CurrencySummaryCard = ({ title, amount, disabled }: ICurrencySummaryCardProps): JSX.Element => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  return (
    <Wrapper>
      <LeftSection className={disabled ? 'disabled' : ''}>
        <CardTitle>{title}</CardTitle>
        <CardAmount>{amount ? formatAmount(Number(amount)) : 0}</CardAmount>
      </LeftSection>
      <HistogramContainer>
        <Histogram values={histogramValues} />
      </HistogramContainer>
    </Wrapper>
  );
};

const CardTitle = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const CardAmount = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 24px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;
