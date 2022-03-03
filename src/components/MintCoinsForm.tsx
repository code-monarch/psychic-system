import styled from 'styled-components';
import { Container, CSSObject, Grid, Modal, Select } from '@mantine/core';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { BaseSelectStylesNames } from '@mantine/core/lib/components/Select/types';
import { Title } from './styled';
import manual_distribution_image from '../assets/images/manual_distribution.svg';
import { PrimaryButton, SecondaryButton } from './Buttons';

const Screen = styled(Container)`
  padding: 0;
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
`;

const PageContainer = styled.div`
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 130px 0;
`;

const InnerWrapper = styled(Grid)`
  justify-content: center;
  display: flex;
`;

const ImageWrapper = styled.div`
  margin-right: 120px;
`;

const LoginPageImage = styled.img`
  max-width: 133px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  min-width: 390px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormHeader = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 56px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const FormSection = styled.div`
  margin-top: 25px;
`;

interface Iprops {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  callback?: () => void;
}

export const MintCoinsForm = ({ isVisible, setIsVisible, callback }: Iprops) => (
  <Modal size="800px" opened={isVisible} centered onClose={() => setIsVisible(false)}>
    <Screen fluid>
      <PageContainer>
        <InnerWrapper>
          <ImageWrapper>
            <LoginPageImage src={manual_distribution_image} alt="Manual Distribution Image" />
          </ImageWrapper>
          <FormWrapper>
            <FormHeader>Mint Coins</FormHeader>
            <FormSection>
              <Select
                label="Choose Destination"
                rightSection={<ChevronDownIcon />}
                styles={selectStyles}
                data={[{ value: 'distribution wallet', label: 'Distribution Wallet - 30,926.029 BTKB' }]}
              />
            </FormSection>
            <FormSection>
              <Select
                label="Amount"
                rightSection={<ChevronDownIcon />}
                styles={selectStyles}
                data={[{ value: 'HaitiPay', label: '30,000 BTKB' }]}
              />
            </FormSection>

            <ButtonArea>
              <PrimaryButton
                title="Mint"
                onClick={() => {
                  // call API endpoint to distribute
                  setIsVisible(false);
                  callback?.();
                }}
              />
              <SecondaryButton title="Close" style={{ width: 152 }} />
            </ButtonArea>
          </FormWrapper>
        </InnerWrapper>
      </PageContainer>
    </Screen>
  </Modal>
);

const selectStyles: Partial<Record<BaseSelectStylesNames, CSSObject>> = {
  input: {
    border: 'none',
    borderBottom: `1px solid #E3E2E2`,
    borderRadius: 0,
    paddingLeft: 0,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "'ProximaNova', sans-serif;",
    color: '#1A242D',
  },
  label: {
    fontSize: 14,
    fontFamily: "'ProximaNova', sans-serif;",
    color: '#828282',
  },
  rightSection: { pointerEvents: 'none' },
  root: {
    marginBottom: 29,
  },
};
