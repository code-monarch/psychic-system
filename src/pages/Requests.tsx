import styled, { css, useTheme } from 'styled-components';
import { Grid, Menu } from '@mantine/core';
import { DotsVerticalIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '@mantine/hooks';
import { Heading, Paragraph, ParagraphBold, Title } from '../components/styled';
import mint from '../assets/images/icons/mint.svg';
import mintWhite from '../assets/images/icons/mint-white.svg';
import requestDisabled from '../assets/images/icons/requests-disabled.svg';

const Wrapper = styled.div`
  padding: 0 64px;
  padding-top: 40px;
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

const RightSideBar = styled(Grid.Col)``;

const CardTitle = styled(Heading)`
  font-size: 18px;
  line-height: 27px;
`;

const ActionText = styled(Heading)`
  font-size: 14px;
  line-height: 16px;
`;

export const Requests = (): JSX.Element => {
  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  const { t } = useTranslation();
  useDocumentTitle(`DAP: ${t('navigation.requests')}`);

  return (
    <Wrapper>
      <Heading style={{ marginBottom: 32 }}>{t('navigation.requests')}</Heading>
      <Grid grow gutter={64}>
        <Grid.Col md={12} lg={8}>
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
        </Grid.Col>
        <RightSideBar md={12} lg={4}>
          <RightBarHeader>
            <div>
              <Title>{t('quick.actions.title')}</Title>
              <PageDescription>{t('quick.actions.description')}</PageDescription>
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
        </RightSideBar>
      </Grid>
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
