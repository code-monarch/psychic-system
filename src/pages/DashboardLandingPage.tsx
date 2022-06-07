import styled from 'styled-components';
import { Container, Grid } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import loginImage from '../assets/images/emtech_connection_image.svg';
import { PrimaryButton } from '../components/Buttons';
import { device, MEMBER_ROUTE } from '../lib/constants';
import { WalletTransferModal } from '../components/modals/WalletTransferModal';
import { ManualDistributionForm } from '../components/modals/ManualDistributionForm';
import { useFeatureFlags } from '../context/features-flag-context';
import { useTokenDetails } from '../context/token-details-context';

const Screen = styled(Container)`
  min-height: 100vh;
  padding: 0;
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    margin-top: 0;
  }
`;

const InnerWrapper = styled(Grid)`
  justify-content: center;
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    padding: 16px;
    margin: 0;
    justify-content: flex-start;
  }
`;

const ImageWrapper = styled.div`
  margin-right: 120px;

  @media ${device.tablet} {
    margin-right: 50px;
  }
`;

const GetStartedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  @media ${device.tablet} {
    max-width: none;
  }
`;

const GetStartedText = styled.h1`
  font-size: 28px;
  margin: 0;
  margin-bottom: 16px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const GetStartedDescription = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const LoginPageImage = styled.img`
  max-width: 350px;
  @media ${device.laptop} {
    max-width: 200px;
  }

  @media ${device.mobileL} {
    max-width: 130px;
  }
`;

const ButtonContainer = styled.div`
  margin: 12px auto 0 0;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const LandingPageButton = styled(PrimaryButton)`
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const DashboardLandingPage = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [showWalletTransferModal, setShowWalletTransferModal] = useState<boolean>(false);
  const [formModalOpened, setFormModalOpened] = useState<boolean>(false);
  const { tokenDetails: walletBalanceAndTokenDetails } = useTokenDetails();

  useDocumentTitle(`DAP: ${t('navigation.home')}`);
  const { featureFlagsNormalized } = useFeatureFlags();
  return (
    <Screen fluid>
      <PageContainer>
        <InnerWrapper>
          <ImageWrapper>
            <LoginPageImage src={loginImage} alt="Login" />
          </ImageWrapper>
          <GetStartedWrapper>
            <GetStartedText>{t('home.title')}</GetStartedText>
            <GetStartedDescription>{t('home.description')}</GetStartedDescription>
            <ButtonContainer>
              <LandingPageButton
                title={t('navigation.dashboard')}
                onClick={() => {
                  history.push(MEMBER_ROUTE.DASHBOARD);
                }}
              />
            </ButtonContainer>
            <ButtonContainer>
              <LandingPageButton
                disabled={!featureFlagsNormalized?.TOKEN_TRANSFER_FLAG}
                title={t('transfer.title')}
                onClick={() => {
                  setShowWalletTransferModal(true);
                }}
              />
            </ButtonContainer>
            <ButtonContainer>
              <LandingPageButton
                title={`${t('distribute.title')} ${walletBalanceAndTokenDetails?.tokenSymbol}`}
                disabled={!featureFlagsNormalized?.TOKEN_TRANSFER_FLAG}
                onClick={() => {
                  setFormModalOpened(true);
                }}
              />
            </ButtonContainer>
          </GetStartedWrapper>
        </InnerWrapper>
      </PageContainer>
      <WalletTransferModal isVisible={showWalletTransferModal} setIsVisible={setShowWalletTransferModal} />
      <ManualDistributionForm isVisible={formModalOpened} setIsVisible={setFormModalOpened} />
    </Screen>
  );
};
