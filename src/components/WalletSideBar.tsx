import styled, { useTheme } from 'styled-components';
import { Divider, Skeleton, Space } from '@mantine/core';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, ParagraphBold, Title } from './styled';
import { PrimaryButton } from './Buttons';
import { WalletTransferModal } from './modals/WalletTransferModal';
import { formatAmountWithDecimals } from '../lib/utils';
import { useTokenDetails } from '../context/token-details-context';

export const WalletInfo = () => {
  const theme: any = useTheme();
  const { t } = useTranslation();
  const { grey } = theme.colors.secondary;

  const { walletSummaryDetails, isLoadingWalletTokenDetails } = useTokenDetails();

  const [showWalletTransferModal, setShowWalletTransferModal] = useState<boolean>(false);

  const wallets = walletSummaryDetails?.wallets || [];

  const nonCirculatingSupply = walletSummaryDetails?.notInCirculation;
  const masterReserveWallet = wallets?.find((wallet) => wallet?.category === 'Master');
  const distributionWallet = wallets?.find((wallet) => wallet?.category === 'Distribution');
  const institutionWallet = wallets?.find((wallet) => wallet?.category === 'Institution');

  const decimals = walletSummaryDetails?.decimals;
  const symbol = walletSummaryDetails?.symbol || '';

  return (
    <Wrapper>
      <SupplyWallets>
        <WalletField>
          <Label>{t('total.supply.description')}</Label>
          {isLoadingWalletTokenDetails && <Skeleton height={8} mt={6} radius="xl" width={100} />}
          {!isLoadingWalletTokenDetails && (
            <WalletValue>
              {formatAmountWithDecimals(walletSummaryDetails?.supply, decimals)} {symbol}
            </WalletValue>
          )}
        </WalletField>
        <WalletField>
          <Label>{t('circulating.supply.description')}</Label>
          {isLoadingWalletTokenDetails && <Skeleton height={8} mt={6} radius="xl" width={100} />}
          {!isLoadingWalletTokenDetails && (
            <WalletValue>
              {formatAmountWithDecimals(walletSummaryDetails?.inCirculation, decimals)} {symbol}
            </WalletValue>
          )}
        </WalletField>
        <WalletField>
          <Label>{t('total.not.circulation.description')}</Label>
          {isLoadingWalletTokenDetails && <Skeleton height={8} mt={6} radius="xl" width={100} />}
          {!isLoadingWalletTokenDetails && (
            <WalletValue>
              {nonCirculatingSupply ? formatAmountWithDecimals(nonCirculatingSupply, decimals) : '0'} {symbol}
            </WalletValue>
          )}
        </WalletField>
      </SupplyWallets>

      <AssetsSection>
        <Title>{t('assets.circulation.description')}</Title>
        <Space h={24} />
        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>M</AssetIcon>
            <div>
              <AssetLabel>{t('wallets.distribution')}</AssetLabel>
              <AssetValue>{walletSummaryDetails?.symbol || 'N/A'}</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <Skeleton visible={isLoadingWalletTokenDetails} width={100}>
              <AssetLabel style={{ textAlign: 'right' }}>
                {formatAmountWithDecimals(Number(distributionWallet?.balances?.[0]?.amount), decimals) || 0}
              </AssetLabel>
            </Skeleton>
            {/* <AssetValue style={{ textAlign: 'right' }}>USD 300</AssetValue> */}
          </div>
        </WalletCard>

        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>M</AssetIcon>
            <div>
              <AssetLabel>{t('wallets.institution')}</AssetLabel>
              <AssetValue>{walletSummaryDetails?.symbol || 'N/A'}</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <Skeleton visible={isLoadingWalletTokenDetails} width={100}>
              <AssetLabel style={{ textAlign: 'right' }}>
                {formatAmountWithDecimals(Number(institutionWallet?.balances?.[0]?.amount), decimals) || 0}
              </AssetLabel>
            </Skeleton>
            {/* <AssetValue style={{ textAlign: 'right' }}>USD 300</AssetValue> */}
          </div>
        </WalletCard>
        <Divider style={{ marginTop: 32, color: grey }} />
      </AssetsSection>

      <AssetsSection>
        <Title>{t('assets.not.circulation.description')}</Title>
        <Space h={24} />
        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>M</AssetIcon>
            <div>
              <AssetLabel>{t('wallets.master')}</AssetLabel>
              <AssetValue>{walletSummaryDetails?.symbol}</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <Skeleton visible={isLoadingWalletTokenDetails} width={100}>
              <AssetLabel style={{ textAlign: 'right' }}>
                {formatAmountWithDecimals(Number(masterReserveWallet?.balances?.[0]?.amount), decimals) || 0}
              </AssetLabel>
            </Skeleton>
            {/* <AssetValue style={{ textAlign: 'right' }}>USD 300</AssetValue> */}
          </div>
        </WalletCard>
      </AssetsSection>

      <ButtonContainer>
        <PrimaryButton
          title={t('wallets.transfer.title')}
          style={{ width: '100%' }}
          onClick={() => setShowWalletTransferModal(true)}
        />
      </ButtonContainer>
      <WalletTransferModal isVisible={showWalletTransferModal} setIsVisible={setShowWalletTransferModal} />
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  margin: 150px auto 0 0;
`;
const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary.powderBlue};
  margin-top: 16px;
`;

const WalletField = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary.white};
`;

const AssetValue = styled(Label)`
  color: #e4e4e4;
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
