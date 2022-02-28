import styled from 'styled-components';
import { Modal } from '@mantine/core';
import distribution_success_image from '../assets/images/distribution_success.svg';
import { PrimaryButtonWithoutIcon } from './Buttons';

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
  color: ${({ theme }) => theme.colors.primary.black};
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

export const SuccessModal = ({ isVisible, setIsVisible }) => (
  <Modal size="400px" opened={isVisible} centered onClose={() => setIsVisible(false)}>
    <ModalWrapper>
      <SuccessImage src={distribution_success_image} alt="Manual Distribution Image" />
      <ModalHeader>Distribution successful!</ModalHeader>
      <ModalDescription>
        You have successfully distributed <span>30,000 BTKB</span>
      </ModalDescription>
      <PrimaryButtonWithoutIcon title="Go to Wallets" onClick={() => setIsVisible(false)} />
    </ModalWrapper>
  </Modal>
);
