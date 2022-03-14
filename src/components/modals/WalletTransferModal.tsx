import styled, { useTheme } from 'styled-components';
import { Container, CSSObject, Grid, Modal, Select, Space } from '@mantine/core';
import { ChevronDownIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { BaseSelectStylesNames } from '@mantine/core/lib/components/Select/types';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { ParagraphBold, Title } from '../styled';
import { isValidEmailRegex, selectStyles } from '../../lib/constants';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import {
  useGetInstitutionWallets,
  useGetUserWallets,
  useGetWalletTokenDetails,
  useTransferTokens,
} from '../../hooks/useWallets';
import { ErrorText } from '../LoginForm';
import { TextInput } from '../Inputs';
import { AnimatedLabelInput } from '../AnimatedLabelInput';
import { SuccessModal } from './SuccessModal';
import switchIcon from '../../assets/images/switch_icon.svg';
import { cacheKey } from '../../hooks/cacheStateKey';

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
  const { data: institutionWallets = [] } = useGetInstitutionWallets();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | undefined>();
  const { register, errors, handleSubmit, control, watch, trigger, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      destinationWalletId: '',
      sourceWalletId: '',
      amount: '',
    },
  });
  const watchFields = watch(['destinationWalletId', 'sourceWalletId']);
  const queryClient = useQueryClient();

  useEffect(() => {
    trigger('destinationWalletId');
  }, [trigger, watchFields?.sourceWalletId]);

  const { data } = useGetUserWallets();
  const { data: walletTokenDetails } = useGetWalletTokenDetails();

  const wallets = data?.wallets || [];

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
    transferTokens(
      {
        amount: Number(data.amount) * 10000,
        latitude: String(currentLocation[1]),
        longitude: String(currentLocation[0]),
        transactionType: 'Distribution',
        sourceWalletId: data.sourceWalletId,
        destinationWalletId: data.destinationWalletId,
        tokenId: walletTokenDetails.tokenId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(cacheKey.walletTokenDetails);
          queryClient.invalidateQueries(cacheKey.tokenReportSummary);
          queryClient.invalidateQueries(cacheKey.userWallets);
          setAmount(() => Number(data.amount));
          setShowSuccessModal(true);
          // callback?.();
        },
      },
    );
  };

  const switchFields = () => {
    const sourceWalletId = watchFields?.sourceWalletId;
    setValue('sourceWalletId', watchFields?.destinationWalletId, { shouldValidate: true });
    setValue('destinationWalletId', sourceWalletId, { shouldValidate: true });
  };

  return (
    <Modal size="400px" opened={isVisible} centered onClose={() => setIsVisible(false)}>
      <Screen fluid>
        <PageContainer>
          <form onSubmit={handleSubmit(transfer)}>
            <FormWrapper>
              <FormHeader>Wallet Transfer</FormHeader>
              <Title>FROM</Title>
              <FormSection>
                <Controller
                  name="sourceWalletId"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Please select a source wallet' }}
                  render={({ ref, onChange, value, onBlur }) => (
                    <Select
                      label="Choose Wallet"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                      onBlur={onBlur}
                      rightSection={<ChevronDownIcon />}
                      styles={selectStyles}
                      data={wallets.map((wallet) => ({
                        label: `${wallet?.walletType} - ${wallet.balances?.[0]?.balance} BTKB`,
                        value: wallet?.walletId,
                        ...wallet,
                      }))}
                    />
                  )}
                />
              </FormSection>
              <Space h={24} />
              {watchFields?.sourceWalletId && watchFields?.destinationWalletId && (
                <SwitchToggle onClick={switchFields}>
                  <SwitchIcon src={switchIcon} />
                </SwitchToggle>
              )}

              <Space h={24} />
              <Title>TO</Title>
              <FormSection>
                <Controller
                  name="destinationWalletId"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Please select a destination wallet',
                    validate: (value) =>
                      value !== watchFields?.sourceWalletId || 'Destination wallet cannot be the same as source wallet',
                  }}
                  render={({ ref, onChange, value, onBlur }) => (
                    <Select
                      label="Choose Wallet"
                      ref={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      rightSection={<ChevronDownIcon />}
                      styles={selectStyles}
                      data={wallets.map((wallet) => ({
                        label: `${wallet?.walletType} - ${wallet.balances?.[0]?.balance} BTKB`,
                        value: wallet?.walletId,
                        ...wallet,
                      }))}
                    />
                  )}
                />
                {errors?.destinationWalletId?.message && <ErrorText>{errors.destinationWalletId.message}</ErrorText>}
                <TextInput>
                  <AnimatedLabelInput
                    label="Amount"
                    name="amount"
                    type="number"
                    isLabelAnimated={false}
                    ref={register({
                      required: 'Amount is required',
                      pattern: {
                        value: /^[0-9]*$/,
                        message: 'This appears to be an invalid amount.',
                      },
                    })}
                  />
                </TextInput>
                {errors?.amount?.message && <ErrorText>{errors.amount.message}</ErrorText>}
                <Space h={24} />
              </FormSection>

              <ButtonArea>
                <PrimaryButton title="Distribute" loading={isLoading} />
                <SecondaryButton
                  title="Close"
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
        title="Transfer successful!"
        message={'You have successfully transferred\n'}
        amount={amount}
        buttonText="Return To Distribution"
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
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const FormSection = styled.div`
  margin-top: 25px;
`;
