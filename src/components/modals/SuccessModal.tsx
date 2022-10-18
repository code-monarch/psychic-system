import styled from 'styled-components';
import { Modal } from '@mantine/core';
import distribution_success_image from '../../assets/images/distribution_success.svg';
import { PrimaryButtonWithoutIcon } from '../Buttons';
import { useTokenDetails } from '../../context/token-details-context';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 16px;
`;

const SuccessImage = styled.img`
  max-width: 228px;
  margin-bottom: 32px;
`;

const ModalHeader = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary.white};
  margin: 0;
  margin-bottom: 6px;
  line-height: 27px;
  font-family: 'ProximaNovaBold', sans-serif;
`;

const ModalDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.grey};
  margin: 0;
  margin-bottom: 33px;
  line-height: 24px;
  font-family: 'ProximaNova', sans-serif;

  span {
    color: ${({ theme }) => theme.colors.primary.green};
    font-family: 'ProximaNovaBold', sans-serif;
  }
`;

interface ISuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  amount?: number;
}
export const SuccessModal = ({ isVisible, onClose, title, message, amount, buttonText }: ISuccessModalProps) => {
  const { walletSummaryDetails } = useTokenDetails();

  return (
    <Modal size="400px" opened={isVisible} centered closeOnClickOutside={false} closeOnEscape={false} onClose={onClose}>
      <ModalWrapper>
        <SuccessImage src={distribution_success_image} alt="Manual Distribution Image" />
        <ModalHeader>{title}</ModalHeader>
        <ModalDescription>
          {message}
          <span>
            {amount} {walletSummaryDetails?.symbol}
          </span>
        </ModalDescription>
        <PrimaryButtonWithoutIcon title={buttonText || 'Go to Wallets'} onClick={onClose} />
      </ModalWrapper>
    </Modal>
  );
};
