import styled, { css } from 'styled-components';
import { Grid } from '@mantine/core';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '@mantine/hooks';
import { Heading, Paragraph, Title } from '../components/styled';
import mint from '../assets/images/icons/mint.svg';
import mintWhite from '../assets/images/icons/mint-white.svg';
import requestDisabled from '../assets/images/icons/requests-disabled.svg';
import { device } from '../lib/constants';

const Wrapper = styled.div`
  padding: 40px 64px 0 64px;
  @media ${device.tablet} {
    padding: 40px 16px 0 16px;
  }
`;

const Header = styled.div``;

const RightBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RequestOptions = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const QuickActions = styled.div`
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.grey};
`;

const QuickAction = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 0;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.lightgrey};
`;

const PageDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.grey};
  margin: 10px 0 20px;
`;

const CardTitle = styled(Heading)`
  font-size: 18px;
  line-height: 27px;
`;

const ActionText = styled(Heading)`
  font-size: 14px;
  line-height: 16px;
`;

const Section = styled(Grid.Col)`
  @media ${device.tablet} {
    padding: 16px;
    margin: 0;
  }
`;

const GridSection = styled(Grid)`
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const Requests = (): JSX.Element => {
  const { t } = useTranslation();
  useDocumentTitle(`DAP: ${t('navigation.requests')}`);

  return (
    <Wrapper>
      <Heading style={{ marginBottom: 32 }}>{t('navigation.requests')}</Heading>
      <GridSection grow gutter={64}>
        <Section md={12} lg={8}>
          <Header>
            <Title>{t('navigation.manage')}</Title>
            <PageDescription>{t('request.description')}</PageDescription>
          </Header>
          <RequestOptions>
            <FundingOption style={{ marginRight: 16 }}>
              <CardTitle>
                {t('distribution.title')}/{t('funding')}
              </CardTitle>
              <SmallerCardDescription>{t('request.distribution')}</SmallerCardDescription>
            </FundingOption>
            <RequestOption className="disabled">
              <CardTitle>{t('request.wallet')}</CardTitle>
              <SmallerCardDescription>{t('request.wallet.requests')}</SmallerCardDescription>
            </RequestOption>
          </RequestOptions>
        </Section>
        <Section md={12} lg={4}>
          <RightBarHeader>
            <div style={{ marginBottom: 20 }}>
              <Title>{t('quick.actions.title')}</Title>
              {/* <PageDescription>{t('quick.actions.description')}</PageDescription> */}
            </div>
          </RightBarHeader>
          <QuickActions>
            <QuickAction>
              <ActionText>{t('wallets.issue')}</ActionText>
              <ArrowRightIcon />
            </QuickAction>
            <QuickAction>
              <ActionText>{t('distribute.title')}</ActionText>
              <ArrowRightIcon />
            </QuickAction>
            <QuickAction>
              <ActionText>{t('convert.title')}</ActionText>
              <ArrowRightIcon />
            </QuickAction>
          </QuickActions>
          <div style={{ marginTop: 24 }} />
        </Section>
      </GridSection>
    </Wrapper>
  );
};

const baseBoxStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  border-radius: 8px;
  width: 100%;
  padding: 68px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-position: 24px 28px;
  height: 270px;
  background-size: 30px;
  transition: 0.3s ease-in-out;
  &:not(.disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary.green};
    div.button {
      background-color: ${({ theme }) => theme.colors.primary.white};
    }
    p,
    h2 {
      color: ${({ theme }) => theme.colors.primary.white};
    }
  }
  &.disabled p,
  &.disabled .button,
  &.disabled h2 {
    color: ${({ theme }) => theme.colors.secondary.grey};
  }
`;

const FundingOption = styled.div`
  ${baseBoxStyles}
  flex:1;
  background-image: url(${mint});
  &:hover {
    background-image: url(${mintWhite});
  }
  @media ${device.mobileL} {
    margin-right: 0 !important;
    margin-bottom: 16px;
  }
`;

const RequestOption = styled.div`
  ${baseBoxStyles}
  flex:1;
  background-image: url(${requestDisabled});
`;

const SmallerCardDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.darkgrey};
  font-size: 14px;
  line-height: 21px;
  margin-top: 6px;
`;

const WalletsDropdown = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;
