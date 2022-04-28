import styled from 'styled-components';
import { Container, CSSObject, Grid, Modal, Select, Space } from '@mantine/core';
import { BaseSelectStylesNames } from '@mantine/core/lib/components/Select/types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useTranslation } from 'react-i18next';
import mint_image from '../../assets/images/mint.svg';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { useGetWalletAndTokenDetails, useMintTokens } from '../../hooks/useWallets';
import { TextInput } from '../Inputs';
import { AnimatedLabelInput } from '../AnimatedLabelInput';
import { ErrorText } from '../LoginForm';
import { SuccessModal } from './SuccessModal';
import { cacheKey } from '../../hooks/cacheStateKey';

const FormSection = styled.div`
  margin-top: 25px;
`;

interface Iprops {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  callback?: () => void;
}

export const MintCoinsForm = ({ isVisible, setIsVisible, callback }: Iprops) => {
  const { mutate: mintTokens, isLoading } = useMintTokens();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { data: walletBalanceAndTokenDetails } = useGetWalletAndTokenDetails();
  const wallets = walletBalanceAndTokenDetails?.walletBalance || [];

  const { register, errors, handleSubmit, formState } = useForm({ mode: 'all' });

  const masterReserveWallet = wallets?.find((wallet) => wallet?.walletType === 'Master');

  interface IFormData {
    amount: string;
  }

  const mint = (data: IFormData) => {
    mintTokens(
      {
        amount: Number(data.amount),
        tokenOwnerMasterWalletId: masterReserveWallet.walletId,
        tokenId: walletBalanceAndTokenDetails.tokenId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(cacheKey.walletBalanceAndTokenDetails);
          queryClient.invalidateQueries(cacheKey.tokenReportSummary);
          setAmount(() => Number(data.amount));
          setShowSuccessModal(true);
          // setIsVisible(false);
          callback?.();
        },
      },
    );
  };
  return (
    <Modal size="900px" opened={isVisible} centered onClose={() => setIsVisible(false)}>
      <Screen fluid>
        <PageContainer>
          <InnerWrapper>
            <ImageWrapper>
              <PageImage src={mint_image} alt="Manual Distribution Image" />
            </ImageWrapper>
            <form onSubmit={handleSubmit(mint)}>
              <FormWrapper>
                <FormHeader>{t('mint.coins')}</FormHeader>
                <FormSection>
                  <Select
                    label={t('choose.wallet.destination')}
                    value={masterReserveWallet?.walletId}
                    styles={selectStyles}
                    data={[masterReserveWallet]?.map((item) => ({
                      label: `${item?.walletType} Wallet`,
                      value: item?.walletId,
                    }))}
                  />
                </FormSection>
                <FormSection>
                  <TextInput>
                    <AnimatedLabelInput
                      label={t('amount')}
                      name="amount"
                      type="number"
                      isLabelAnimated={false}
                      ref={register({
                        required: t('transfer.amount.required'),
                        pattern: {
                          value: /^[0-9]*$/,
                          message: t('transfer.amount.invalid'),
                        },
                      })}
                    />
                  </TextInput>
                  {errors?.amount?.message && <ErrorText>{errors.amount.message}</ErrorText>}
                </FormSection>
                <Space h={24} />

                <ButtonArea>
                  <PrimaryButton title={t('mint.title')} loading={isLoading} />
                  <SecondaryButton
                    title={t('close.button.label')}
                    style={{ width: 152 }}
                    onClick={() => setIsVisible(false)}
                  />
                </ButtonArea>
              </FormWrapper>
            </form>
          </InnerWrapper>
        </PageContainer>
      </Screen>
      <SuccessModal
        isVisible={showSuccessModal}
        title={t('minting.success.title')}
        message={`${t('minting.success.description')}\n`}
        amount={amount}
        buttonText={t('close.button.label')}
        onClose={() => {
          setIsVisible(false);
          setShowSuccessModal(false);
        }}
      />
    </Modal>
  );
};

const selectStyles: Partial<Record<BaseSelectStylesNames, CSSObject>> = {
  input: {
    border: 'none',
    borderBottom: `1px solid #E3E2E2`,
    borderRadius: 0,
    paddingLeft: 0,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "'ProximaNova', sans-serif;",
    color: '#1A242D',
  },
  label: {
    fontSize: 14,
    fontFamily: "'ProximaNova', sans-serif;",
    color: '#828282',
  },
  rightSection: { pointerEvents: 'none', display: 'none' },
  root: {
    marginBottom: 29,
  },
};

const Screen = styled(Container)`
  padding: 0;
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
`;

const PageContainer = styled.div`
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 130px 0;
`;

const InnerWrapper = styled(Grid)`
  justify-content: center;
  display: flex;
`;

const ImageWrapper = styled.div`
  margin-right: 100px;
`;

const PageImage = styled.img`
  max-width: 269px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  min-width: 390px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormHeader = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 56px;
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;
