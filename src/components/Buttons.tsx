import { Loader } from '@mantine/core';
import styled, { CSSProperties } from 'styled-components';
import white_arrow from '../assets/images/icons/white_arrow.svg';

interface IButton {
  title: string;
  disabled?: boolean;
  style?: CSSProperties;
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

const TransparentButton = styled(Button)`
  background-color: transparent;
  font-size: 14px;
  justify-content: center;
  font-family: 'ProximaNovaBold';
  color: ${({ theme }) => theme.colors.primary.black};
  border: 1px solid ${({ theme }) => theme.colors.secondary.grey}; ;
`;

const Button2 = styled(Button)`
  justify-content: center;
`;

const ButtonText = styled.span``;

export const PrimaryButton = ({ title, disabled, loading, onClick, style }: IButton): JSX.Element => (
  <Button
    type="submit"
    style={style}
    disabled={disabled}
    onClick={() => {
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
    {loading ? <Loader size={20} color="#fff" /> : <img src={white_arrow} alt="white-arrow" />}
  </Button>
);

export const PrimaryButtonWithoutIcon = ({ title, disabled, onClick, style }: IButton): JSX.Element => (
  <Button2
    style={style}
    disabled={disabled}
    onClick={() => {
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
  </Button2>
);

export const SecondaryButton = ({ title, disabled, onClick, style }: IButton): JSX.Element => (
  <TransparentButton
    type="submit"
    style={style}
    disabled={disabled}
    onClick={() => {
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
  </TransparentButton>
);
