import styled from 'styled-components';
import { Container, Grid } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';
import { useState } from 'react';
import loginImage from '../assets/images/emtech_connection_image.svg';
import { PrimaryButton } from '../components/Buttons';
import { MEMBER_ROUTE } from '../lib/constants';
import { WalletTransferModal } from '../components/modals/WalletTransferModal';
import { ManualDistributionForm } from '../components/modals/ManualDistributionForm';

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
`;

const InnerWrapper = styled(Grid)`
  justify-content: center;
  display: flex;
  align-items: center;
`;

const LogoPanel = styled.div`
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  width: 100%;
  height: 80px;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-right: 120px;
`;

const GetStartedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
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
`;

const ButtonContainer = styled.div`
  margin: 12px auto 0 0;
`;

export const DashboardLandingPage = () => {
  const history = useHistory();
  const [showWalletTransferModal, setShowWalletTransferModal] = useState<boolean>(false);
  const [formModalOpened, setFormModalOpened] = useState<boolean>(false);

  useDocumentTitle('DAP: Home');
  return (
    <Screen fluid>
      <PageContainer>
        <InnerWrapper>
          <ImageWrapper>
            <LoginPageImage src={loginImage} alt="Login" />
          </ImageWrapper>
          <GetStartedWrapper>
            <GetStartedText>Get Started</GetStartedText>
            <GetStartedDescription>
              Manage digital assets internally and digital wallets for Financial Institutions. Use this platform to view
              CBDC ledger balances, transactions, distribute currency and monitor activity.
            </GetStartedDescription>
            <ButtonContainer>
              <PrimaryButton
                title="Dashboard"
                onClick={() => {
                  history.push(MEMBER_ROUTE.DASHBOARD);
                }}
              />
            </ButtonContainer>
            <ButtonContainer>
              <PrimaryButton
                title="Transfer"
                onClick={() => {
                  setShowWalletTransferModal(true);
                }}
              />
            </ButtonContainer>
            <ButtonContainer>
              <PrimaryButton
                title="Distribute BTKB"
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
