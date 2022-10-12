import styled, { useTheme } from 'styled-components';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { LoadingOverlay } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import ComparisonChart from '../charts/ComparisonChart';
import { ParagraphBold, Title } from '../styled';
import { NameValue } from '../NameValue';
import { useGetInstitutionWallets } from '../../hooks/useWallets';
import { formatAmountWithDecimals, formatEntity } from '../../lib/utils';
import { MEMBER_ROUTE } from '../../lib/constants';
import { CustomPieChart } from '../charts/CustomPieChart';
import { ManualDistributionForm } from '../modals/ManualDistributionForm';
import { useTokenDetails } from '../../context/token-details-context';

const StyledNameValue = styled(NameValue)`
  margin: 8px 0;
  font-size: 0.75em;
  line-height: 1.5em;

  ${NameValue.Name} {
    color: ${({ theme }) => theme.colors.primary.grey};
  }

  ${NameValue.Value} {
    color: ${({ theme }) => theme.colors.primary.black};
    font-weight: 600;
  }
`;

export const CirculationComponent = () => {
  const {
    tokenDetails: walletBalanceAndTokenDetails,
    isLoadingWalletTokenDetails,
    walletSummaryDetails,
  } = useTokenDetails();

  const history = useHistory();
  const [distributeFormModalOpened, setDistributeFormModalOpened] = useState<boolean>(false);

  const wallets = walletSummaryDetails?.wallets || [];
  const institutionWallet = wallets?.find((wallet) => wallet?.category === 'Institution');
  const masterReserveWallet = wallets?.find((wallet) => wallet?.category === 'Master');
  const distributionWallet = wallets?.find((wallet) => wallet?.category === 'Distribution');

  const theme: any = useTheme();
  const { green, yellow, blue: primaryBlue } = theme.colors.primary;
  const { grey } = theme.colors.secondary;

  const colors = [green, primaryBlue, yellow];

  const { t } = useTranslation();
  const { data: institutionWallets = [], isLoading: isLoadingInstitutionWallets } = useGetInstitutionWallets();

  const tokensData = [
    { name: t('circulating.supply.description'), value: walletSummaryDetails?.inCirculation || 0 },
    { name: t('non.circulating.supply.description'), value: walletSummaryDetails?.notInCirculation || 0 },
  ];

  const institutionBalance = institutionWallet?.balances?.[0]?.amount;
  const masterBalance = masterReserveWallet?.balances?.[0]?.amount;
  const distributionBalance = distributionWallet?.balances?.[0]?.amount;

  const internalWalletOptions = [
    {
      label: t('master.title'),
      color: grey,
      value: Number(masterBalance),
    },
    {
      label: t('distribution.title'),
      color: green,
      value: Number(distributionBalance),
    },
  ];

  const internalWalletTotal = internalWalletOptions.map((option) => option.value).reduce((a, b) => a + b);
  const masterWalletPercentage = (Number(masterBalance) / internalWalletTotal) * 100;
  const distributionWalletPercentage = (Number(distributionBalance) / internalWalletTotal) * 100;
  return (
    <div>
      <Card style={{ height: 253 }}>
        <LoadingOverlay visible={isLoadingWalletTokenDetails} />
        <TokensHeaderWrapper>
          <Title>{t('tokens.circulation.description')}</Title>
          <Title>
            <TokensAmount>
              {walletSummaryDetails?.supply
                ? formatAmountWithDecimals(walletSummaryDetails?.supply, walletSummaryDetails?.decimals)
                : '0'}
            </TokensAmount>
            {walletSummaryDetails?.symbol}
          </Title>
        </TokensHeaderWrapper>
        <TokensChartWrapper>
          <CustomPieChart data={tokensData} />
        </TokensChartWrapper>
        <LinkContainer>
          <DashboardLink>
            <LinkText
              onClick={() => {
                history.push(MEMBER_ROUTE.CURRENCY_MANAGEMENT);
              }}
            >
              {t('tokens.manage')}
            </LinkText>
            <ArrowRightIcon fontWeight={600} color={green} />
          </DashboardLink>
        </LinkContainer>
      </Card>

      <Card>
        <LoadingOverlay visible={isLoadingWalletTokenDetails || isLoadingInstitutionWallets} />
        <TokensHeaderWrapper>
          <Title>{t('wallets.institution')}</Title>
          <Title>
            <TokensAmount>
              {formatAmountWithDecimals(institutionBalance, walletSummaryDetails?.decimals) || 0}
            </TokensAmount>
            {walletSummaryDetails?.symbol}
          </Title>
        </TokensHeaderWrapper>
        {institutionWallets.slice(0, 3).map((wallet, index) => {
          const walletBalance = wallet?.balances?.[0]?.amount || 0;
          const percentage = (Number(walletBalance) / Number(institutionBalance)) * 100;
          return (
            <WalletWrapper>
              <WalletLeftSection>
                <WalletTitle>{formatEntity(wallet?.userId)}</WalletTitle>
                <div style={{ width: '100%', height: 12, paddingRight: 20 }}>
                  <WalletProgressBar style={{ width: `${percentage}%`, backgroundColor: colors[index] }} />
                </div>
              </WalletLeftSection>
              <WalletRightSection>
                <WalletAmount>
                  {formatAmountWithDecimals(walletBalance, walletSummaryDetails?.decimals)},{' '}
                  <span>{percentage ? percentage.toFixed(2) : 'N/A'}%</span>
                </WalletAmount>
              </WalletRightSection>
            </WalletWrapper>
          );
        })}

        <LinkContainer>
          <DashboardLink>
            <LinkText
              onClick={() => {
                setDistributeFormModalOpened(true);
              }}
            >
              {t('distribute.title')}
            </LinkText>
            <ArrowRightIcon fontWeight={600} color={green} />
          </DashboardLink>
        </LinkContainer>
      </Card>

      <Card>
        <LoadingOverlay visible={isLoadingWalletTokenDetails} />
        <TokensHeaderWrapper>
          <Title>{t('wallets.internal')}</Title>
          <Title>
            <TokensAmount>
              {formatAmountWithDecimals(internalWalletTotal, walletSummaryDetails?.decimals) || 0}
            </TokensAmount>
            {walletSummaryDetails?.symbol}
          </Title>
        </TokensHeaderWrapper>

        <ComparisonChart options={internalWalletOptions} />
        <Section>
          <StyledNameValue
            name={`${t('wallets.master')}`}
            value={`${masterWalletPercentage ? masterWalletPercentage.toFixed(2) : '0'}%`}
          />
          <StyledNameValue
            name={`${t('wallets.distribution')}`}
            value={`${distributionWalletPercentage ? distributionWalletPercentage.toFixed(2) : '0'}%`}
          />
        </Section>
        <LinkContainer>
          <DashboardLink>
            <LinkText
              onClick={() => {
                history.push(MEMBER_ROUTE.WALLETS);
              }}
            >
              {t('wallets.title')}
            </LinkText>
            <ArrowRightIcon fontWeight={600} color={green} />
          </DashboardLink>
        </LinkContainer>
      </Card>

      <ManualDistributionForm isVisible={distributeFormModalOpened} setIsVisible={setDistributeFormModalOpened} />
    </div>
  );
};

const WalletProgressBar = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primary.green};
  height: 100%;
  border-radius: 4px;
`;
const WalletTitle = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 12px;
  font-family: ProximaNovaExtraBold;
  margin-bottom: 8px;
`;

const WalletAmount = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 14px;
  font-family: ProximaNovaBold;
  margin-bottom: 8px;
  & span {
    font-size: 12px;
    font-family: ProximaNova;
  }
`;

const WalletLeftSection = styled.div`
  flex: 1;
`;

const WalletRightSection = styled.div``;

const WalletWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary.secondaryGrey};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  position: relative;
`;

const TokensChartWrapper = styled.div`
  flex: 1;
`;

const TokensAmount = styled.span`
  font-size: 18px;
  display: inline-block;
  margin-right: 5px;
`;

const TokensHeaderWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkText = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 14px;
  font-family: ProximaNovaBold;
  margin-right: 10px;
`;

const Section = styled.div`
  margin-bottom: 10px;
`;

const DashboardLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
