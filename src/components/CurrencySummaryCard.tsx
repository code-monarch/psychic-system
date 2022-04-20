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
  margin-bottom: 16px;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
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
  hideHistogram?: boolean;
}
const histogramValues = [0, 0, 4, 7, 0, 1, 5];

export const CurrencySummaryCard = ({
  title,
  amount,
  disabled,
  hideHistogram = false,
}: ICurrencySummaryCardProps): JSX.Element => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  return (
    <Wrapper>
      <CardTitle className={disabled ? 'disabled' : ''}>{title}</CardTitle>
      <BottomSection>
        <CardAmount className={disabled ? 'disabled' : ''}>{amount}</CardAmount>
        {!hideHistogram && (
          <HistogramContainer>
            <Histogram values={histogramValues} />
          </HistogramContainer>
        )}
      </BottomSection>
    </Wrapper>
  );
};

const CardTitle = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.grey};

  &.disabled {
    color: ${({ theme }) => theme.colors.secondary.grey};
  }
`;

const CardAmount = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 24px;
  font-family: 'ProximaNovaExtraBold', sans-serif;

  &.disabled {
    color: ${({ theme }) => theme.colors.secondary.grey};
  }
`;
