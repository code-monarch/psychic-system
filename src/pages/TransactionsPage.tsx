import styled from 'styled-components';
import { TransactionsContent } from './transactions';

interface TransactionProps {
  displayName: string;
}

const Wrapper = styled.div`
  margin: 0 80px;
`;

const Header = styled.h2`
  color: ${({ theme }) => theme.colors.primary.black};
  font-weight: bold;
  font-size: 28px;
`;

export const Transactions = (props: TransactionProps): JSX.Element => {
  const { displayName } = props;
  return (
    <Wrapper>
      <Header>Welcome {displayName}!</Header>
      <TransactionsContent />
    </Wrapper>
  );
};
