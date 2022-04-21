import styled, { useTheme } from 'styled-components';
import { Container, Modal } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Paragraph, ParagraphBold } from '../styled';
import { Transaction } from '../../services/wallet-service';
import { formatAmount } from '../../lib/utils';

interface Iprops {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  callback?: () => void;
  data: Transaction;
}

export const TransactionDetailsModal = ({ isVisible, setIsVisible, callback, data }: Iprops) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const { green } = theme.colors.primary;

  return (
    <Modal
      size="calc(100vw - 10px)"
      opened={isVisible}
      centered
      onClose={() => setIsVisible(false)}
      transition="fade"
      transitionDuration={600}
      transitionTimingFunction="ease"
    >
      <Screen fluid>
        <PageContainer>
          <FormHeader>{t('transaction.details')}</FormHeader>
          <DetailSection>
            <DetailsValue style={{ marginRight: 20 }}>
              {t('transaction.title')} - {data.sourceWalletId}@{data.destinationWalletId}
            </DetailsValue>
            <DetailsValue style={{ color: green }}> • {t('success.title')}</DetailsValue>
          </DetailSection>
          <DetailsWrapper>
            <DetailSection>
              <DetailsLabel>{t('transaction.type')}</DetailsLabel>
              <DetailsValue>{data?.transactionType}</DetailsValue>
            </DetailSection>

            <DetailSection>
              <DetailsLabel>{t('transaction.Id')}</DetailsLabel>
              <DetailsValue>{data?.transactionHash}</DetailsValue>
            </DetailSection>

            <DetailSection>
              <DetailsLabel>{t('transaction.wallet.source')}</DetailsLabel>
              <DetailsValue style={{ color: green }}>{data?.sourceWalletCategory}</DetailsValue>
            </DetailSection>

            <DetailSection>
              <DetailsLabel>Funding Type</DetailsLabel>
              <DetailsValue>{data?.fundingType}</DetailsValue>
            </DetailSection>

            <DetailSection>
              <DetailsLabel>Transfer Amount</DetailsLabel>
              <DetailsValue>{formatAmount(data?.amount)} BTKB</DetailsValue>
            </DetailSection>

            <DetailSection>
              <DetailsLabel>Transaction Time</DetailsLabel>
              <DetailsValue>{moment(data?.createdAt).format('DD-MM-YYYY, h:mm:ss a')}</DetailsValue>
            </DetailSection>
          </DetailsWrapper>
        </PageContainer>
      </Screen>
    </Modal>
  );
};

const Screen = styled(Container)`
  padding: 0;
  height: calc(100vh - 130px);
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
`;

const DetailsLabel = styled(Paragraph)`
  font-size: 14px;
  line-height: 24px;
  width: 220px;
`;

const DetailsValue = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: 16px;
  line-height: 24px;
`;

const PageContainer = styled.div`
  margin-top: -80px;
  padding: 130px 40px;
`;

const DetailsWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary.lightgrey};
  padding-top: 24px;
`;

const DetailSection = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const FormHeader = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 56px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;
