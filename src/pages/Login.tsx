import styled from 'styled-components';
import { Container, Grid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../components/LoginForm';
import loginImage from '../assets/images/emtech_connection_image.svg';
import { Logo } from '../components/Logo';
import { device } from '../lib/constants';

const Screen = styled(Container)`
  min-height: 100vh;
  padding: 0;
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
  @media ${device.laptop} {
    padding: 0 8px;
    min-height: auto;
  }
`;

const LoginContainer = styled(Grid)`
  min-height: 100vh;
  margin: 0;
  margin-top: -80px;

  @media ${device.laptop} {
    min-height: auto;
    margin-top: 20px;
  }
`;

const LeftPane = styled(Grid.Col)`
  background-color: ${({ theme }) => theme.colors.secondary.lightgrey};
  justify-content: center;
  display: flex;
  align-items: center;
  @media ${device.laptop} {
    max-height: 250px;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const RightPane = styled(Grid.Col)`
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

  @media ${device.laptop} {
    padding: 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    flex: 0;
  }
`;

const CallToAction = styled.h2`
  font-size: 28px;
  font-family: 'ProximaNovaBold', sans-serif;
  text-align: center;

  @media ${device.laptop} {
    font-size: 18px;
  }

  .green {
    font-family: 'ProximaNovaBold', sans-serif;
    color: #279f70; // TODO: Add this color to theme
  }
`;

const LoginWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
`;

const LoginText = styled.h1`
  font-size: 36px;
  margin: 0;
  margin-bottom: 36px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const LoginPageImage = styled.img`
  max-width: 350px;
  @media ${device.laptop} {
    max-width: 100px;
  }
`;

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Screen fluid>
      <LogoPanel>
        <Logo imageWidth={100} />
      </LogoPanel>
      <LoginContainer>
        <LeftPane sm={12} md={6}>
          <ImageWrapper>
            <LoginPageImage src={loginImage} alt={t('login.title')} />
            <CallToAction>
              <span className="green">{t('digital.cash')}</span>
              <br />
              {t('like.never.before')}
            </CallToAction>
          </ImageWrapper>
        </LeftPane>
        <RightPane md={6} sm={12}>
          <LoginWrapper>
            <LoginText>{t('login.title')}</LoginText>
            <LoginForm />
          </LoginWrapper>
        </RightPane>
      </LoginContainer>
    </Screen>
  );
};
