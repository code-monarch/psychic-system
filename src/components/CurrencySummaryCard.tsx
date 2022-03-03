import styled, { useTheme } from 'styled-components';
import profileIcon from '../assets/images/icons/profile.svg';

const Wrapper = styled.div`
  height: 112px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.lightgrey};
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CurrencySummaryCard = (): JSX.Element => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  return <Wrapper />;
};
