import styled, { useTheme } from 'styled-components';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Space } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ComparisonChart from '../charts/ComparisonChart';
import { ParagraphBold, Title } from '../styled';
import { NameValue } from '../NameValue';
import { useGetWalletAndTokenDetails } from '../../hooks/useWallets';
import { formatAmount } from '../../lib/utils';
import { AssetCard } from '../AssetCard';
import { MEMBER_ROUTE } from '../../lib/constants';

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

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary.grey};
  margin: 18px 0;
`;

export const CirculationComponent = () => {
  const { data: walletBalanceAndTokenDetails, isLoading: isLoadingWalletTokenDetails } = useGetWalletAndTokenDetails();
  const history = useHistory();

  const theme: any = useTheme();
  const { green } = theme.colors.primary;
  const { darkgreen, blue } = theme.colors.secondary;

  const { t } = useTranslation();

  // TODO: Replace with data from API
  const options = [
    {
      label: t('local.tab.title'),
      color: green,
      value: 86,
    },
    {
      label: t('international.tab.title'),
      color: darkgreen,
      value: 14,
    },
  ];
  return (
    <div>
      <TokensHeaderWrapper>
        <Title>{t('tokens.circulation.description')}</Title>
        <Title>
          {walletBalanceAndTokenDetails?.circulatingSupply
            ? formatAmount(walletBalanceAndTokenDetails?.circulatingSupply)
            : '0'}
        </Title>
      </TokensHeaderWrapper>

      <ComparisonChart options={options} />
      <Space h={12} />
      <DashboardLink>
        <LinkText
          onClick={() => {
            history.push(MEMBER_ROUTE.TRANSACTIONS);
          }}
        >
          {t('all.transactions.title')}
        </LinkText>
        <ArrowRightIcon fontWeight={600} color={green} />
      </DashboardLink>

      <Section style={{ marginBottom: 30, marginTop: 30 }}>
        <Title>{t('total.assets')}</Title>
        <CardsWrapper>
          <AssetCard name="HTG & BTKB" value="431.2B" color={blue} symbol="B" />
          <AssetCard name="USD & USDC Balance" value="$4.34B" color={green} symbol="$" />
        </CardsWrapper>
      </Section>

      <Section>
        <Title>{t('digital.assets')}</Title>
        <StyledNameValue name={`${t('total')} Bitkob`} value="200.1B (BTKB)" />
        <StyledNameValue name={`${t('total')} USDC ${t('reserves')}`} value="1.97B (USDC)" />
      </Section>

      <Divider aria-hidden="true" />

      <Section>
        <Title>Fiat</Title>
        <StyledNameValue name={`${t('total')} Gourdes (HTG)`} value="G231.2B" />
        <StyledNameValue name={`${t('total')} USD ${t('reserves')}`} value="$2.37B" />
      </Section>

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
    </div>
  );
};

const TokensHeaderWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkText = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 13px;
  font-family: ProximaNovaExtraBold;
  margin-right: 10px;
`;

const Section = styled.div``;

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
