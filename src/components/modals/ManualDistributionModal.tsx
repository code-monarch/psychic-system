import styled, { useTheme } from 'styled-components';
import { Modal } from '@mantine/core';
import manual_distribution from '../../assets/images/icons/manual_distribution.svg';
import distribution_request from '../../assets/images/icons/distribution_request.svg';
import { ParagraphBold } from '../styled';

export const DistributionModal = ({ isVisible, setIsVisible, manualDistributeCallback }) => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  return (
    <Modal
      opened={isVisible}
      centered
      onClose={() => setIsVisible(false)}
      hideCloseButton
      styles={{
        modal: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <DistributionModalWrapper>
        <DistributionOption
          style={{ marginRight: 16 }}
          onClick={() => {
            manualDistributeCallback();
            setIsVisible(false);
          }}
        >
          <img src={manual_distribution} alt="manual_distribution" />
          <OptionsText>Manual Distribution</OptionsText>
        </DistributionOption>
        <DistributionOption>
          <img src={distribution_request} alt="manual_distribution" style={{ mixBlendMode: 'luminosity' }} />
          <OptionsText style={{ color: grey }}>Distribution From Request</OptionsText>
        </DistributionOption>
      </DistributionModalWrapper>
    </Modal>
  );
};

const DistributionModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DistributionOption = styled.div`
  background: #ffffff;
  border-radius: 8px;
  min-width: 240px;
  height: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 24px;
  cursor: pointer;
`;

const OptionsText = styled(ParagraphBold)`
  font-size: 14px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
  margin-top: 28px;
`;
