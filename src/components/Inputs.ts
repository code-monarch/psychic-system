import styled from 'styled-components';

export const TextInput = styled.div`
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary.grey};
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;
