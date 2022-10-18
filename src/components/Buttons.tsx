import { Loader } from '@mantine/core';
import styled, { CSSProperties } from 'styled-components';
import white_arrow from '../assets/images/icons/white_arrow.svg';

interface IButton {
  title: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  loading?: boolean;
  onClick?: () => void;
}

const Button = styled.button<{ disabled?: boolean }>`
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
  ${(props) =>
    props?.disabled &&
    `
         background-color: ${props.theme.colors.primary.disabled};
         cursor:not-allowed
    `}
`;

const TransparentButton = styled.div<{ disabled?: boolean }>`
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 200px;
  height: 40px;
  align-items: center;
  padding: 0 24px;
  background-color: transparent;
  font-size: 14px;
  justify-content: center;
  font-family: 'ProximaNovaBold';
  color: ${({ theme }) => theme.colors.primary.green};
  border: 1px solid ${({ theme }) => theme.colors.primary.green};

  ${(props) =>
    !props?.disabled &&
    `
         &:hover {
          background-color: ${props.theme.colors.primary.green};
          color: ${props.theme.colors.primary.white};
      }
    `}

  ${(props) =>
    props?.disabled &&
    `
         background-color: ${props.theme.colors.secondary.disabled};
         cursor:not-allowed;
         color: ${props.theme.colors.primary.white}
    `}
`;

const Button2 = styled(Button)`
  justify-content: center;
  font-size: 14px;
  font-family: 'ProximaNovaBold';
`;

const ButtonText = styled.span``;

export const PrimaryButton = ({ title, disabled, loading, onClick, style, className }: IButton): JSX.Element => (
  <Button
    type="submit"
    style={style}
    className={className}
    disabled={disabled}
    onClick={() => {
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
    {loading ? <Loader size={20} color="#fff" /> : <img src={white_arrow} alt="white-arrow" />}
  </Button>
);

export const PrimaryButtonWithoutIcon = ({ title, disabled, onClick, style, className }: IButton): JSX.Element => (
  <Button2
    style={style}
    className={className}
    disabled={disabled}
    onClick={() => {
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
  </Button2>
);

export const SecondaryButton = ({ title, disabled, onClick, style, className }: IButton): JSX.Element => (
  <TransparentButton
    style={style}
    className={className}
    disabled={disabled}
    onClick={(e) => {
      if (disabled) return;
      e?.preventDefault();
      onClick?.();
    }}
  >
    <ButtonText>{title}</ButtonText>
  </TransparentButton>
);
