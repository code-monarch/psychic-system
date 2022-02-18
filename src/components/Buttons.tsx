import { Loader } from '@mantine/core';
import styled from 'styled-components';
import white_arrow from '../assets/images/icons/white_arrow.svg';

interface IButton {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.green};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  width: 200px;
  height: 40px;
  align-items: center;
  padding: 0 24px;
`;

const ButtonText = styled.span``;

export const PrimaryButton = ({ title, disabled, loading, onClick }: IButton): JSX.Element => (
  <Button
    type="submit"
    disabled={disabled}
    onClick={() => {
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
    {loading ? <Loader size={20} color="#fff" /> : <img src={white_arrow} alt="white-arrow" />}
  </Button>
);
