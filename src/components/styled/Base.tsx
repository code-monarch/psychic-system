import styled from 'styled-components';

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 16px auto;
  color: ${({ theme }) => theme.colors.primary.black};
`;

export { Title };
