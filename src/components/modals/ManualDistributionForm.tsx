import styled, { useTheme } from 'styled-components';
import { Container, Grid, Modal, Select, Space } from '@mantine/core';
import { ArrowRightIcon, ChevronDownIcon } from '@modulz/radix-icons';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ParagraphBold, Title } from '../styled';
import manual_distribution_image from '../../assets/images/manual_distribution.svg';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { useGetInstitutionWallets, useTransferTokens } from '../../hooks/useWallets';
import { ErrorText } from '../LoginForm';
import { TextInput } from '../Inputs';
import { AnimatedLabelInput } from '../AnimatedLabelInput';
import { SuccessModal } from './SuccessModal';
import { WalletTransferModal } from './WalletTransferModal';
import { selectStyles } from '../../lib/constants';
import { formatAmountWithDecimals } from '../../lib/utils';
import { useTokenDetails } from '../../context/token-details-context';
import { TransferTokensRequest } from '../../services/wallet-service';

interface Iprops {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  callback?: () => void;
}

interface IFormData {
  amount: string;
  destinationWalletId: string;
}

export const ManualDistributionForm = ({ isVisible, setIsVisible, callback }: Iprops) => {
  const { mutate: transferTokens, isLoading } = useTransferTokens();
  const { data: institutionWallets = [] } = useGetInstitutionWallets();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showWalletTransferModal, setShowWalletTransferModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | undefined>();
  const [isTransferInProgress, setIsTransferInProgress] = useState<boolean>(false);

  const { t } = useTranslation();

  const { register, errors, handleSubmit, control, formState } = useForm({
    mode: 'all',
    defaultValues: {
      destinationWalletId: '',
      amount: '',
    },
  });

  const { isDirty, isValid, isSubmitting } = formState;
  const { tokenDetails, walletSummaryDetails } = useTokenDetails();
  const tokenId = tokenDetails?.[0].id;

  const wallets = walletSummaryDetails?.wallets || [];

  const distributionWallet = wallets?.find((wallet) => wallet?.category === 'Distribution');

  const theme = useTheme();
  const { green } = theme.colors.primary;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    setCurrentLocation([position.coords.longitude, position.coords.latitude]);
  };

  useEffect(() => {
    getLocation();
  }, []);

  const transfer = (data: IFormData) => {
    setIsTransferInProgress(true);
    const requestData: TransferTokensRequest = {
      amount: Number(data.amount),
      transactionType: 'Institution',
      sourceWalletId: distributionWallet.id,
      destinationWalletId: data.destinationWalletId,
      tokenId,
    };

    if (currentLocation?.[1] && currentLocation?.[0]) {
      requestData.latitude = String(currentLocation?.[1]);
      requestData.longitude = String(currentLocation?.[0]);
    }

    transferTokens(requestData, {
      onSuccess: () => {
        setAmount(() => Number(data.amount));
        setShowSuccessModal(true);
        // callback?.();
      },
      onSettled: () => {
        setIsTransferInProgress(false);
      },
    });
  };

  return (
    <Modal size="calc(100vw - 87px)" overflow="inside" opened={isVisible} centered onClose={() => setIsVisible(false)}>
      <Screen fluid>
        <PageContainer>
          <InnerWrapper>
            <ImageWrapper>
              <LoginPageImage src={manual_distribution_image} alt="Manual Distribution Image" />
            </ImageWrapper>
            <form onSubmit={handleSubmit(transfer)}>
              <FormWrapper>
                <FormHeader>{t('distribute.title')}</FormHeader>
                <Title>{t('transfer.from')}</Title>
                <FormSection>
                  <Select
                    label={t('wallets.distribution')}
                    rightSection={null}
                    value={distributionWallet?.id}
                    styles={selectStyles}
                    data={[distributionWallet]?.map((item) => ({
                      label: `${item?.category} - ${formatAmountWithDecimals(
                        Number(item?.balances?.[0]?.amount),
                        walletSummaryDetails?.decimals,
                      )} ${walletSummaryDetails?.symbol}`,
                      value: item?.id,
                    }))}
                  />
                </FormSection>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <WalletTransferText onClick={() => setShowWalletTransferModal(true)}>
                    {t('fund.wallet')}
                  </WalletTransferText>
                  <ArrowRightIcon fontWeight={600} color={green} />
                </div>
                <Space h={48} />
                <Title>{t('transfer.to')}</Title>
                <FormSection>
                  <Controller
                    name="destinationWalletId"
                    control={control}
                    defaultValue=""
                    rules={{ required: t('transfer.institution.required') }}
                    render={({ ref, onChange, value }) => (
                      <Select
                        label={t('Institutional.enduser.wallet')}
                        ref={ref}
                        onChange={onChange}
                        value={value}
                        rightSection={<ChevronDownIcon />}
                        styles={selectStyles}
                        data={institutionWallets.map((wallet) => ({
                          label: `${wallet?.owner} - ${
                            wallet?.balances?.[0]?.amount
                              ? formatAmountWithDecimals(
                                  Number(wallet?.balances?.[0]?.amount),
                                  walletSummaryDetails?.decimals,
                                )
                              : 0
                          } ${walletSummaryDetails?.symbol}`,
                          value: wallet.id,
                          ...wallet,
                        }))}
                      />
                    )}
                  />
                  {errors?.destinationWalletId?.message && <ErrorText>{errors.destinationWalletId.message}</ErrorText>}
                  <TextInput>
                    <AnimatedLabelInput
                      label={t('amount')}
                      name="amount"
                      type="number"
                      isLabelAnimated={false}
                      ref={register({
                        required: t('transfer.amount.required'),
                        pattern: {
                          value: /^[0-9]\d*$/,
                          message: t('transfer.amount.invalid'),
                        },
                        validate: (value) => Number(value) > 0 || t('transfer.amount.invalid'),
                      })}
                    />
                  </TextInput>
                  {errors?.amount?.message && <ErrorText>{errors.amount.message}</ErrorText>}
                  <Space h={24} />
                </FormSection>

                <ButtonArea>
                  <PrimaryButton
                    title={t('transfer.title')}
                    loading={isLoading}
                    disabled={!isDirty || !isValid || isSubmitting || isTransferInProgress}
                  />
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
        title={t('distribution.success.title')}
        message={`${t('distribution.success.description')}\n`}
        amount={amount}
        buttonText={t('close.button.label')}
        onClose={() => {
          setIsVisible(false);
          setShowSuccessModal(false);
        }}
      />
      <WalletTransferModal isVisible={showWalletTransferModal} setIsVisible={setShowWalletTransferModal} />
    </Modal>
  );
};

const Screen = styled(Container)`
  padding: 0;
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
`;

const WalletTransferText = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.green};
  font-size: 13px;
  font-family: ProximaNovaExtraBold;
  margin-right: 10px;
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
  margin-right: 120px;
`;

const LoginPageImage = styled.img`
  max-width: 133px;
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
  color: ${({ theme }) => theme.colors.primary.white};
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const FormSection = styled.div`
  margin-top: 25px;
`;
