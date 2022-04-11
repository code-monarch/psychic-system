import styled, { useTheme } from 'styled-components';
import { Paragraph, ParagraphBold } from './styled';
import Histogram from './charts/Histogram';
import { formatAmount } from '../lib/utils';

const Wrapper = styled.div`
  height: 92px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.lightgrey};
  border-radius: 8px;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

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
      <CardTitle>{title}</CardTitle>
      <BottomSection>
        <CardAmount>{amount ? formatAmount(Number(amount)) : 0}</CardAmount>
        <HistogramContainer>
          <Histogram values={histogramValues} />
        </HistogramContainer>
      </BottomSection>
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
