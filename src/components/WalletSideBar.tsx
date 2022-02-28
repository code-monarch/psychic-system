import styled, { useTheme } from 'styled-components';
import { Divider, Space } from '@mantine/core';
import { Heading, Paragraph, ParagraphBold, Title } from './styled';
import { PrimaryButton } from './Buttons';

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
export const WalletInfo = () => {
  const theme: any = useTheme();
  const { grey } = theme.colors.secondary;
  return (
    <Wrapper>
      <SupplyWallets>
        <WalletField>
          <Label>Total Supply</Label>
          <WalletValue>575,483.00</WalletValue>
        </WalletField>
        <WalletField>
          <Label>Circulating Supply</Label>
          <WalletValue>147,079.00</WalletValue>
        </WalletField>
        <WalletField>
          <Label>Total Supply</Label>
          <WalletValue>575,483.00</WalletValue>
        </WalletField>
      </SupplyWallets>

      <AssetsSection>
        <Title>Assets in Circulation</Title>
        <WalletField style={{ marginTop: 5, marginBottom: 28 }}>
          <Label>Total Amount</Label>
          <WalletValue style={{ fontSize: 18 }}>147,079.00</WalletValue>
        </WalletField>

        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>R</AssetIcon>
            <div>
              <AssetLabel>Reserve</AssetLabel>
              <AssetValue>BTKB</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <AssetLabel>30,926.03</AssetLabel>
            <AssetValue>$6,000 USD</AssetValue>
          </div>
        </WalletCard>

        <WalletCard>
          <AssetCardLeftSection>
            <AssetIcon>D</AssetIcon>
            <div>
              <AssetLabel>Distribution</AssetLabel>
              <AssetValue>BTKB</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <AssetLabel>116,152.97</AssetLabel>
            <AssetValue>$25,000 USD</AssetValue>
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
              <AssetLabel>Master</AssetLabel>
              <AssetValue>BTKB</AssetValue>
            </div>
          </AssetCardLeftSection>
          <div>
            <AssetLabel>428,404.00</AssetLabel>
            <AssetValue>USD 300</AssetValue>
          </div>
        </WalletCard>
      </AssetsSection>

      <ButtonContainer>
        <PrimaryButton title="Wallet Transfer" style={{ width: '100%' }} />
      </ButtonContainer>
    </Wrapper>
  );
};

const ButtonContainer = styled.div`
  margin: 150px auto 0 0;
`;
