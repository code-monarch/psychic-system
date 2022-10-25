import styled from 'styled-components';
import { Container, Modal, Select, Space } from '@mantine/core';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Title } from '../styled';
import { selectStyles } from '../../lib/constants';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { useTransferTokens } from '../../hooks/useWallets';
import { ErrorText } from '../LoginForm';
import { TextInput } from '../Inputs';
import { AnimatedLabelInput } from '../AnimatedLabelInput';
import { SuccessModal } from './SuccessModal';
import switchIcon from '../../assets/images/switch_icon.svg';
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
  sourceWalletId: string;
}

export const WalletTransferModal = ({ isVisible, setIsVisible, callback }: Iprops) => {
  const { mutate: transferTokens, isLoading } = useTransferTokens();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [isTransferInProgress, setIsTransferInProgress] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | undefined>();
  const { t } = useTranslation();
  const { register, errors, handleSubmit, control, watch, trigger, setValue, formState } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      destinationWalletId: '',
      sourceWalletId: '',
      amount: '',
    },
  });
  const watchFields = watch(['destinationWalletId', 'sourceWalletId']);
  const { isDirty, isValid, isSubmitting } = formState;

  useEffect(() => {
    trigger('destinationWalletId');
    setValue('destinationWalletId', '', { shouldValidate: true });
  }, [trigger, watchFields?.sourceWalletId]);

  const { tokenDetails, walletSummaryDetails } = useTokenDetails();
  const tokenId = tokenDetails?.[0].id;
  const wallets = walletSummaryDetails?.wallets || [];

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
      transactionType: 'Distribution',
      sourceWalletId: data.sourceWalletId,
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

  const switchFields = () => {
    const sourceWalletId = watchFields?.sourceWalletId;
    setValue('sourceWalletId', watchFields?.destinationWalletId, { shouldValidate: true });
    setValue('destinationWalletId', sourceWalletId, { shouldValidate: true });
  };

  const distributionWalletId = wallets.find((wallet) => wallet.category === 'Distribution')?.id;
  const masterWalletId = wallets.find((wallet) => wallet.category === 'Master')?.id;

  const walletOptions = wallets
    .filter((wallet) => wallet.category !== 'Institution')
    .map((wallet) => ({
      label: `${wallet?.category} - ${formatAmountWithDecimals(
        Number(wallet.balances?.[0]?.amount),
        walletSummaryDetails?.decimals,
      )} ${walletSummaryDetails?.symbol}`,
      value: wallet?.id,
    }));
  let destinationWallets = [];
  if (watchFields?.sourceWalletId && distributionWalletId === watchFields?.sourceWalletId) {
    destinationWallets = walletOptions.filter((walletOption) => walletOption.value !== masterWalletId);
  } else {
    destinationWallets = walletOptions;
  }
  return (
    <Modal size="400px" opened={isVisible} centered onClose={() => setIsVisible(false)}>
      <Screen fluid>
        <PageContainer>
          <form onSubmit={handleSubmit(transfer)}>
            <FormWrapper>
              <FormHeader>{t('wallets.transfer.title')}</FormHeader>
              <Title>{t('transfer.from')}</Title>
              <FormSection>
                <Controller
                  name="sourceWalletId"
                  control={control}
                  defaultValue=""
                  rules={{ required: t('transfer.source.required') }}
                  render={({ ref, onChange, value, onBlur }) => (
                    <Select
                      label={t('choose.wallet.label')}
                      ref={ref}
                      onChange={onChange}
                      value={value}
                      onBlur={onBlur}
                      rightSection={<ChevronDownIcon />}
                      styles={selectStyles}
                      data={wallets
                        .filter((wallet) => wallet.category !== 'Distribution' && wallet.category !== 'Institution')
                        .map((wallet) => ({
                          label: `${wallet?.category} - ${formatAmountWithDecimals(
                            Number(wallet.balances?.[0]?.amount),
                            walletSummaryDetails?.decimals,
                          )} ${walletSummaryDetails?.symbol}`,
                          value: wallet?.id,
                        }))}
                    />
                  )}
                />
              </FormSection>
              <Space h={24} />
              {/* {watchFields?.sourceWalletId && watchFields?.destinationWalletId && ( */}
              {/*  <SwitchToggle onClick={switchFields}> */}
              {/*    <SwitchIcon src={switchIcon} /> */}
              {/*  </SwitchToggle> */}
              {/* )} */}

              <Space h={24} />
              <Title>{t('transfer.to')}</Title>
              <FormSection>
                <Controller
                  name="destinationWalletId"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: t('transfer.destination.required'),
                    validate: (value) => value !== watchFields?.sourceWalletId || t('transfer.destination.invalid'),
                  }}
                  render={({ ref, onChange, value, onBlur }) => (
                    <Select
                      label={t('choose.wallet.label')}
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      rightSection={<ChevronDownIcon />}
                      styles={selectStyles}
                      data={destinationWallets}
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
                        value: /^[0-9]*$/,
                        message: t('transfer.amount.invalid'),
                      },
                    })}
                  />
                </TextInput>
                {errors?.amount?.message && <ErrorText>{errors.amount.message}</ErrorText>}
                <Space h={24} />
              </FormSection>

              <ButtonArea>
                <PrimaryButton
                  title={t('distribute.title')}
                  loading={isLoading}
                  disabled={!isDirty || !isValid || isSubmitting || isTransferInProgress}
                />
                <SecondaryButton
                  title={t('close.button.label')}
                  style={{ width: 152, marginLeft: 30 }}
                  onClick={() => setIsVisible(false)}
                />
              </ButtonArea>
            </FormWrapper>
          </form>
        </PageContainer>
      </Screen>
      <SuccessModal
        isVisible={showSuccessModal}
        title={t('transfer.success.title')}
        message={`${t('transfer.success.description')}\n`}
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

const Screen = styled(Container)`
  padding: 0;
  a {
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.black};
  }
`;

const SwitchIcon = styled.img`
  height: 14px;
`;

const SwitchToggle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  padding: 0 24px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormHeader = styled.h1`
  font-size: 18px;
  margin: 0;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary.white};
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const FormSection = styled.div`
  margin-top: 25px;
`;
