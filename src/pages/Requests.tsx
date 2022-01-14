import styled from 'styled-components';

const View = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // TODO: Figure out how to determine this from parent
  margin: 0 80px;
`;

const Header = styled.h2`
  color: #2e2e2e;
  font-weight: bold;
  font-size: 28px;
`;

export const Requests = () => (
  <View>
    <Header>Requests</Header>
  </View>
);
