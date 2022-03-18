import styled, { useTheme } from 'styled-components';
import { Divider, Space, Skeleton } from '@mantine/core';
import { useState } from 'react';
import { Paragraph, ParagraphBold, Title } from './styled';
import { PrimaryButton } from './Buttons';
import { useGetUserWallets, useGetWalletTokenDetails } from '../hooks/useWallets';
import { WalletTransferModal } from './modals/WalletTransferModal';
import { formatAmount } from '../lib/utils';

export const WalletInfo = () => {
  const theme: any = useTheme();
  const { grey } = theme.colors.secondary;
  const { data: walletTokenDetails, isLoading: isLoadingWalletTokenDetails, refetch } = useGetWalletTokenDetails();
  const { data, isLoading: isLoadingUserWallets } = useGetUserWallets();
  const [showWalletTransferModal, setShowWalletTransferModal] = useState<boolean>(false);

  const wallets = data?.wallets || [];

  const nonCirculatingSupply = walletTokenDetails?.totalSupply - walletTokenDetails?.circulatingSupply;
  const masterReserveWallet = wallets?.find((wallet) => wallet?.walletType === 'Master');
  const distributionWallet = wallets?.find((wallet) => wallet?.walletType === 'Distribution');
  return (
    <Wrapper>
      <SupplyWallets>
        <WalletField>
          <Label>Total Supply</Label>
          {isLoadingWalletTokenDetails && <Skeleton height={8} mt={6} radius="xl" width={100} />}
          {!isLoadingWalletTokenDetails && <WalletValue>{formatAmount(walletTokenDetails?.totalSupply)}</WalletValue>}
        </WalletField>
        <WalletField>
          <Label>Circulating Supply</Label>
          {isLoadingWalletTokenDetails && <Skeleton height={8} mt={6} radius="xl" width={100} />}
          {!isLoadingWalletTokenDetails && (
            <WalletValue>{formatAmount(walletTokenDetails?.circulatingSupply)}</WalletValue>
          )}
        </WalletField>
        <WalletField>
          <Label>Total Not in Circulation</Label>
          {isLoadingWalletTokenDetails && <Skeleton height={8} mt={6} radius="xl" width={100} />}
          {!isLoadingWalletTokenDetails && (
            <WalletValue>{nonCirculatingSupply ? formatAmount(nonCirculatingSupply) : '0'}</WalletValue>
          )}
        </WalletField>
      </SupplyWallets>

      <AssetsSection>
        <Title>Assets in Circulation</Title>
        <Space h={24} />
        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>M</AssetIcon>
            <div>
              <AssetLabel>Distribution</AssetLabel>
              <AssetValue>{distributionWallet?.balances?.[0]?.symbol || 'N/A'}</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <Skeleton visible={isLoadingUserWallets} width={100}>
              <AssetLabel style={{ textAlign: 'right' }}>
                {formatAmount(Number(distributionWallet?.balances?.[0]?.balance)) || 0}
              </AssetLabel>
            </Skeleton>
            {/* <AssetValue style={{ textAlign: 'right' }}>USD 300</AssetValue> */}
          </div>
        </WalletCard>

        <Divider style={{ marginTop: 32, color: grey }} />
      </AssetsSection>

      <AssetsSection>
        <Title>assets not in circulation</Title>
        <Space h={24} />
        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>M</AssetIcon>
            <div>
              <AssetLabel>Master Reserve</AssetLabel>
              <AssetValue>{masterReserveWallet?.balances?.[0]?.symbol}</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <Skeleton visible={isLoadingUserWallets} width={100}>
              <AssetLabel style={{ textAlign: 'right' }}>
                {formatAmount(Number(masterReserveWallet?.balances?.[0]?.balance)) || 0}
              </AssetLabel>
            </Skeleton>
            {/* <AssetValue style={{ textAlign: 'right' }}>USD 300</AssetValue> */}
          </div>
        </WalletCard>
      </AssetsSection>

      <ButtonContainer onClick={() => setShowWalletTransferModal(true)}>
        <PrimaryButton title="Wallet Transfer" style={{ width: '100%' }} />
      </ButtonContainer>
      <WalletTransferModal isVisible={showWalletTransferModal} setIsVisible={setShowWalletTransferModal} />
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  margin: 150px auto 0 0;
`;
const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  margin-top: 16px;
`;

const WalletField = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const AssetValue = styled(Label)`
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const WalletValue = styled(ParagraphBold)`
  font-size: 14px;
  line-height: 21px;
`;

const AssetLabel = styled(WalletValue)`
  margin-bottom: 4px;
  line-height: 21px;
`;

const SupplyWallets = styled.div`
  margin-top: 24px;
`;

const AssetsSection = styled.div`
  margin-top: 24px;
`;

const WalletCard = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AssetCardLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const AssetIcon = styled.div`
  background: ${({ theme }) => theme.colors.secondary.blue};
  border-radius: 10px;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 32px;
  font-family: 'ProximaNovaBold', sans-serif;
  margin-right: 16px;
`;
