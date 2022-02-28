import styled from 'styled-components';
import { ChevronDownIcon, ArrowUpIcon, ArrowDownIcon } from '@modulz/radix-icons';
import { Menu } from '@mantine/core';
import { Paragraph, ParagraphBold, Title } from '../styled';
import { ReAreaChart } from './AreaChart';

const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 8px;
  padding: 24px;
  margin-top: 42px;
`;

const TopSection = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 16px;
`;

const LeftSection = styled.div``;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WalletsDropdown = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Amount = styled.p`
  font-size: 28px;
  line-height: 42px;
  margin: 0;
  margin-top: 20px;
  font-family: 'ProximaNovaBold', sans-serif;
  color: ${({ theme }) => theme.colors.primary.green};
`;
const WalletSection = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const CreditLabel = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.green};
`;

const DebitLabel = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondary.red};
`;

const DebitPercentage = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.secondary.red};
`;

const CreditPercentage = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.green};
`;

const chartData = [
  {
    name: 'Feb',
    Current: 4000,
    Previous: 2400,
    amt: 2400,
  },
  {
    name: 'Mar',
    Current: 3000,
    Previous: 1398,
    amt: 2210,
  },
  {
    name: 'Apr',
    Current: 2000,
    Previous: 9800,
    amt: 2290,
  },
  {
    name: 'May',
    Current: 2780,
    Previous: 3908,
    amt: 2000,
  },
  {
    name: 'Jun',
    Current: 1890,
    Previous: 4800,
    amt: 2181,
  },
  {
    name: 'Jul',
    Current: 2390,
    Previous: 3800,
    amt: 2500,
  },
  {
    name: 'Aug',
    Current: 3490,
    Previous: 4300,
    amt: 2100,
  },
  {
    name: 'Sep',
    Current: 3490,
    Previous: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Current: 2000,
    Previous: 9800,
    amt: 2100,
  },
  {
    name: 'Nov',
    Current: 3000,
    Previous: 1398,
    amt: 2100,
  },
  {
    name: 'Dec',
    Current: 4000,
    Previous: 2400,
    amt: 2100,
  },
];

export const WalletBalanceChart = (): JSX.Element => (
  <Wrapper>
    <TopSection>
      <LeftSection>
        <Title>Balance (BTKB)</Title>
        <Amount>575,483.00</Amount>
      </LeftSection>
      <RightSection>
        <Menu
          control={
            <WalletsDropdown>
              <ParagraphBold>All Wallets</ParagraphBold>
              <ChevronDownIcon />
            </WalletsDropdown>
          }
        >
          <Menu.Item>All Wallets</Menu.Item>
        </Menu>
        <WalletSection style={{ marginBottom: 12 }}>
          <CreditLabel>Credit</CreditLabel>
          <ParagraphBold>$2.34B</ParagraphBold>
          <div style={{ display: 'flex' }}>
            <CreditPercentage>+5.4%</CreditPercentage>
            <ArrowUpIcon color="#4AB0A6" />
          </div>
        </WalletSection>
        <WalletSection>
          <DebitLabel>Debit</DebitLabel>
          <ParagraphBold>$500M</ParagraphBold>
          <div style={{ display: 'flex' }}>
            <DebitPercentage>-2.5%</DebitPercentage>
            <ArrowDownIcon color="#EC3D08" />
          </div>
        </WalletSection>
      </RightSection>
    </TopSection>

    <Menu
      control={
        <WalletsDropdown style={{ marginBottom: 0 }}>
          <ParagraphBold>This Year</ParagraphBold>
          <ChevronDownIcon />
        </WalletsDropdown>
      }
    >
      <Menu.Item>This Year</Menu.Item>
    </Menu>
    <ReAreaChart data={chartData} />
  </Wrapper>
);
