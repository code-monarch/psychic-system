import styled, { css } from 'styled-components';
import { Grid } from '@mantine/core';
import { useState } from 'react';
import { useDocumentTitle } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { Heading, Paragraph, Title } from '../components/styled';
import { navIconsActive as activeIcons } from '../assets/images/icons/navigation';
import distributeSvg from '../assets/images/icons/distribute.svg';
import mint from '../assets/images/icons/mint.svg';
import mintWhite from '../assets/images/icons/mint-white.svg';
import burnDisabled from '../assets/images/icons/burn-disabled.svg';
import { ManualDistributionForm } from '../components/modals/ManualDistributionForm';
import { DistributionModal } from '../components/modals/ManualDistributionModal';
import { CurrencySummaryCard } from '../components/CurrencySummaryCard';
import { MintCoinsForm } from '../components/modals/MintCoinsForm';
import { useGetTokenSummary } from '../hooks/useWallets';
import { formatAmountWithDecimals } from '../lib/utils';
import { device } from '../lib/constants';
import { BurnCoinsForm } from '../components/modals/BurnCoinsForm';
import { useTokenDetails } from '../context/token-details-context';

const Wrapper = styled.div`
  padding: 40px 64px 0 64px;
  @media ${device.tablet} {
    padding: 40px 16px 0 16px;
  }
`;

const Header = styled.div`
  margin-top: 40px;
`;

const RightBarHeader = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 24px;
  }
`;

const RightSideBar = styled(Grid.Col)``;

const PageWrapper = styled(Grid)`
  margin-top: 16px;
  height: 500px;
  @media ${device.tablet} {
    height: auto;
  }
`;

const InnerWrapper = styled(Grid)``;

export const CurrencyManagement = (): JSX.Element => {
  const [distributeModalOpened, setDistributModalOpened] = useState<boolean>(false);
  const [formModalOpened, setFormModalOpened] = useState<boolean>(false);
  const [mintFormModalOpened, setMintFormModalOpened] = useState<boolean>(false);
  const [burnFormModalOpened, setBurnFormModalOpened] = useState<boolean>(false);
  const { tokenDetails } = useTokenDetails();
  const tokenId = tokenDetails?.[0].id;
  const { data } = useGetTokenSummary(tokenId);
  const { t } = useTranslation();
  useDocumentTitle(`DAP: ${t('navigation.currency.management')}`);

  const tokenSummary = data?.totals;

  return (
    <Wrapper>
      {/* <CurrenyManagementSetupAlert /> */}

      <InnerWrapper grow gutter={64}>
        <Grid.Col md={12} lg={8}>
          <Header>
            <Heading>{t('navigation.currency.management')}</Heading>
            <Title>{t('actions.title')}</Title>
          </Header>
          <PageWrapper>
            <Grid.Col md={6} lg={7} sm={12}>
              <DistributeOption>
                <div>
                  <CardTitle>{t('distribute.title')}</CardTitle>
                  <CardDescription>{t('distribute.description')}</CardDescription>
                </div>
                <div
                  className="button"
                  onClick={() => {
                    setDistributModalOpened(true);
                  }}
                >
                  {t('distribute.title')}
                </div>
              </DistributeOption>
            </Grid.Col>
            <Grid.Col md={6} lg={5} sm={12}>
              <div style={{ display: 'flex', flexDirection: 'column', height: 500 }}>
                <MintOption>
                  <div>
                    <Title>{t('mint.coins')}</Title>
                    <SmallerCardDescription>{t('mint.issue')}</SmallerCardDescription>
                  </div>
                  <div className="button" onClick={() => setMintFormModalOpened(true)}>
                    {t('mint.title')}
                  </div>
                </MintOption>
                <BurnOption>
                  <div>
                    <Title>{t('burn.coins')}</Title>
                    <SmallerCardDescription>{t('burn.description')}</SmallerCardDescription>
                  </div>
                  <div className="button" onClick={() => setBurnFormModalOpened(true)}>
                    {t('burn.title')}
                  </div>
                </BurnOption>
              </div>
            </Grid.Col>
          </PageWrapper>
        </Grid.Col>
        <RightSideBar md={12} lg={4}>
          <RightBarHeader>
            <Title>{t('summary')}</Title>
          </RightBarHeader>
          <div style={{ marginTop: 24 }}>
            <CurrencySummaryCard
              hideHistogram
              title={t('currency.minted')}
              amount={formatAmountWithDecimals(tokenSummary?.minted, data?.decimals)}
            />
            <CurrencySummaryCard
              hideHistogram
              title={t('currency.transferred')}
              amount={formatAmountWithDecimals(tokenSummary?.transferred, data?.decimals)}
            />
            <CurrencySummaryCard
              hideHistogram
              title={t('currency.total.distributed')}
              amount={formatAmountWithDecimals(tokenSummary?.distributed, data?.decimals)}
            />
            <CurrencySummaryCard
              hideHistogram
              title={t('currency.total.burned')}
              amount={formatAmountWithDecimals(tokenSummary?.burned, data?.decimals)}
            />
          </div>
        </RightSideBar>
      </InnerWrapper>

      <DistributionModal
        isVisible={distributeModalOpened}
        setIsVisible={setDistributModalOpened}
        manualDistributeCallback={() => {
          setFormModalOpened(true);
        }}
      />

      <ManualDistributionForm isVisible={formModalOpened} setIsVisible={setFormModalOpened} />

      <MintCoinsForm isVisible={mintFormModalOpened} setIsVisible={setMintFormModalOpened} />
      <BurnCoinsForm isVisible={burnFormModalOpened} setIsVisible={setBurnFormModalOpened} />
    </Wrapper>
  );
};

const baseButtonStyles = css`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-family: 'ProximaNovaBold', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.green};
  border: 1px solid ${({ theme }) => theme.colors.primary.green};
  border-radius: 8px;
  cursor: pointer;
`;

const baseBoxStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.primary.powderBlue};
  border-radius: 8px;
  width: 100%;
  padding: 68px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: 24px 28px;
  background-size: 30px;
  transition: 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary.darkText};

  div.button {
    ${baseButtonStyles}
  }
  &.disabled div.button {
    cursor: not-allowed;
  }
  &:not(.disabled):hover {
    background-color: ${({ theme }) => theme.colors.primary.green};
    div.button {
      background-color: ${({ theme }) => theme.colors.primary.white};
    }
    p,
    h3 {
      color: ${({ theme }) => theme.colors.primary.white};
    }
  }
  &.disabled p,
  &.disabled .button,
  &.disabled h3 {
    color: ${({ theme }) => theme.colors.secondary.grey};
  }
`;

const DistributeOption = styled.div`
  ${baseBoxStyles}
  background-image: url(${activeIcons.manage});
  height: 100%;
  &:hover {
    background-image: url(${distributeSvg});
  }
`;
const MintOption = styled.div`
  ${baseBoxStyles}
  flex:1;
  margin-bottom: 16px;
  background-image: url(${mint});
  &:hover {
    background-image: url(${mintWhite});
  }
`;

const BurnOption = styled.div`
  ${baseBoxStyles}
  flex:1;
  background-image: url(${burnDisabled});
`;

const CardTitle = styled(Title)`
  text-transform: none;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 8px;
`;

const CardDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: 16px;
  line-height: 24px;
`;

const SmallerCardDescription = styled(CardDescription)`
  font-size: 14px;
  line-height: 21px;
  margin-top: 12px;
`;

const WalletsDropdown = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;
