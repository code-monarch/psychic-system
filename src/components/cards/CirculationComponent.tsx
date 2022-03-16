import styled, { useTheme } from 'styled-components';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Space } from '@mantine/core';
import { useHistory } from 'react-router-dom';
import ComparisonChart from '../charts/ComparisonChart';
import { ParagraphBold, Title } from '../styled';
import { NameValue } from '../NameValue';
import { useGetWalletTokenDetails } from '../../hooks/useWallets';
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
  const { data: walletTokenDetails } = useGetWalletTokenDetails();
  const history = useHistory();

  const theme: any = useTheme();
  const { green } = theme.colors.primary;
  const { darkgreen, blue } = theme.colors.secondary;

  // TODO: Replace with data from API
  const options = [
    {
      label: 'Local',
      color: green,
      value: 86,
    },
    {
      label: 'International',
      color: darkgreen,
      value: 14,
    },
  ];
  return (
    <div>
      <TokensHeaderWrapper>
        <Title>Tokens in Circulation</Title>
        <Title>
          {walletTokenDetails?.circulatingSupply ? formatAmount(walletTokenDetails?.circulatingSupply) : '0'}
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
          All Transactions
        </LinkText>
        <ArrowRightIcon fontWeight={600} color={green} />
      </DashboardLink>

      <Section style={{ marginBottom: 30, marginTop: 30 }}>
        <Title>TOTAL ASSETS</Title>
        <CardsWrapper>
          <AssetCard name="HTG & BTKB" value="431.2B" color={blue} symbol="B" />
          <AssetCard name="USD & USDC Balance" value="$4.34B" color={green} symbol="$" />
        </CardsWrapper>
      </Section>

      <Section>
        <Title>DIGITAL ASSETS</Title>
        <StyledNameValue name="Total Bitkob" value="200.1B (BTKB)" />
        <StyledNameValue name="Total USDC Reserves" value="1.97B (USDC)" />
      </Section>

      <Divider aria-hidden="true" />

      <Section>
        <Title>Fiat</Title>
        <StyledNameValue name="Total Gourdes (HTG)" value="G231.2B" />
        <StyledNameValue name="Total USD Reserves" value="$2.37B" />
      </Section>

      <DashboardLink>
        <LinkText
          onClick={() => {
            history.push(MEMBER_ROUTE.WALLETS);
          }}
        >
          Wallets
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
