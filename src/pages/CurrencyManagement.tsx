import styled, { useTheme, css } from 'styled-components';
import { Column } from 'react-table';
import { Grid, Menu, Modal } from '@mantine/core';
import { useState } from 'react';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { Heading, Paragraph, ParagraphBold, Title } from '../components/styled';

import { WalletBalanceChart } from '../components/charts/WalletBalanceChart';
import { SecondaryButton } from '../components/Buttons';
import { navIconsActive as activeIcons, navIconsDefault as defaultIcons } from '../assets/images/icons/navigation';
import distributeSvg from '../assets/images/icons/distribute.svg';
import { WalletInfo } from '../components/WalletSideBar';
import mint from '../assets/images/icons/mint.svg';
import mintWhite from '../assets/images/icons/mint-white.svg';
import burn from '../assets/images/icons/burn.svg';
import burnWhite from '../assets/images/icons/burn-white.svg';
import { ManualDistributionForm } from '../components/ManualDistributionForm';
import { SuccessModal } from '../components/SuccessModal';
import { DistributionModal } from '../components/ManualDistributionModal';
import { CurrenyManagementSetupAlert } from '../components/CurrencyManagementSetup';
import { CurrencySummaryCard } from '../components/CurrencySummaryCard';
import { MintCoinsForm } from '../components/MintCoinsForm';

const Wrapper = styled.div`
  padding: 0 64px;
  padding-top: 40px;
`;

const Header = styled.div`
  margin-top: 40px;
`;

const RightBarHeader = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSideBar = styled(Grid.Col)``;

export const CurrencyManagement = (): JSX.Element => {
  const [distributeModalOpened, setDistributModalOpened] = useState<boolean>(false);
  const [formModalOpened, setFormModalOpened] = useState<boolean>(false);
  const [minFormModalOpened, setMintFormModalOpened] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const theme: any = useTheme();
  const { grey } = theme.colors.primary;
  return (
    <Wrapper>
      <CurrenyManagementSetupAlert />
      <Grid grow gutter={64}>
        <Grid.Col md={12} lg={8}>
          <Header>
            <Heading>Currency Management</Heading>
            <Title>Actions</Title>
          </Header>
          <Grid style={{ marginTop: 16, height: 500 }}>
            <Grid.Col md={6} lg={7} sm={12}>
              <DistributeOption>
                <div>
                  <CardTitle>Distribute</CardTitle>
                  <CardDescription>
                    Distribute or send funding to government institustions, financial institutions and citizens.
                  </CardDescription>
                </div>
                <div className="button" onClick={() => setDistributModalOpened(true)}>
                  Distribute
                </div>
              </DistributeOption>
            </Grid.Col>
            <Grid.Col md={6} lg={5} sm={12}>
              <div style={{ display: 'flex', flexDirection: 'column', height: 500 }}>
                <MintOption>
                  <div>
                    <Title>Mint Coins</Title>
                    <SmallerCardDescription>Mint and issue coins to the Master Wallet.</SmallerCardDescription>
                  </div>
                  <div className="button" onClick={() => setMintFormModalOpened(true)}>
                    Mint
                  </div>
                </MintOption>
                <BurnOption>
                  <div>
                    <Title>Burn Coins</Title>
                    <SmallerCardDescription>
                      Burn coins to remove currency in cirulcation; this reduces the number of coins in use.
                    </SmallerCardDescription>
                  </div>
                  <div className="button">Burn</div>
                </BurnOption>
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <RightSideBar md={12} lg={4}>
          <RightBarHeader>
            <Title>Summary</Title>
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
          </RightBarHeader>
          <div style={{ marginTop: 24 }}>
            <CurrencySummaryCard />
            <CurrencySummaryCard />
            <CurrencySummaryCard />
            <CurrencySummaryCard />
          </div>
        </RightSideBar>
      </Grid>

      <DistributionModal
        isVisible={distributeModalOpened}
        setIsVisible={setDistributModalOpened}
        manualDistributeCallback={() => {
          setFormModalOpened(true);
        }}
      />

      <ManualDistributionForm
        isVisible={formModalOpened}
        setIsVisible={setFormModalOpened}
        callback={() => setShowSuccessModal(true)}
      />

      <MintCoinsForm
        isVisible={minFormModalOpened}
        setIsVisible={setMintFormModalOpened}
        callback={() => setShowSuccessModal(true)}
      />
      <SuccessModal
        isVisible={showSuccessModal}
        title="Minting Successful!"
        message={'You have successfully minted\n'}
        amount={30000}
        setIsVisible={setShowSuccessModal}
      />
    </Wrapper>
  );
};

const baseButtonStyles = css`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.secondary.lightgrey};
  text-align: center;
  line-height: 40px;
  font-family: 'ProximaNovaBold', sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary.green};
  border-radius: 8px;
  cursor: pointer;
`;

const baseBoxStyles = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary.grey};
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
  div.button {
    ${baseButtonStyles}
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.green};
    div.button {
      background-color: ${({ theme }) => theme.colors.primary.white};
    }
    p,
    h3 {
      color: ${({ theme }) => theme.colors.primary.white};
    }
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
  background-image: url(${burn});
  &:hover {
    background-image: url(${burnWhite});
  }
`;

const CardTitle = styled(Title)`
  text-transform: none;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 8px;
`;

const CardDescription = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.darkgrey};
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
