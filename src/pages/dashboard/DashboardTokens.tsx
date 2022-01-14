import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
`;

const Header = styled.h2`
  color: #2e2e2e;
  font-weight: bold;
  font-size: 28px;
`;

export const DashboardTokens = () => (
  <Wrapper>
    <Header>Tokens</Header>
  </Wrapper>
);
