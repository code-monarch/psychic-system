import styled, { useTheme } from 'styled-components';
import { Paragraph, ParagraphBold } from './styled';

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.lightgrey};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

interface ICurrencySummaryCardProps {
  title: string;
  subtitle: string;
  amount?: string;
  color?: string;
  cardImage?: string;
  disabled?: boolean;
  usdAmount: number | null;
}

const numberFormatter = (num: number) =>
  new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
export const OverviewCard = ({
  title,
  subtitle,
  amount,
  disabled,
  color,
  cardImage,
  usdAmount,
}: ICurrencySummaryCardProps): JSX.Element => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;

  const usd = numberFormatter(usdAmount);
  return (
    <Wrapper>
      <TopSection>
        <CardTitle className={disabled ? 'disabled' : ''}>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </TopSection>
      <BottomSection>
        <CardImage src={cardImage} />
        <AmountSection>
          <CardAmount style={{ color }}>
            {amount} <span>BTKB</span>
          </CardAmount>
          {Boolean(usdAmount) && <CardAmountUSD style={{ color }}>${`${usd} USD`}</CardAmountUSD>}
        </AmountSection>
      </BottomSection>
    </Wrapper>
  );
};

const CardImage = styled.img`
  width: 40px;
  height: 40px;
`;

const AmountSection = styled.div`
  margin-left: 8px;
`;

const CardSubtitle = styled(ParagraphBold)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const CardTitle = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.black};
`;

const CardAmount = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 26px;
  font-weight: 700;
  font-family: 'ProximaNovaBold', sans-serif;

  & span {
    font-size: 16px;
  }
`;

const CardAmountUSD = styled(ParagraphBold)`
  font-size: 13px;
  margin-top: 4px;

  & span {
    font-size: 16px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
