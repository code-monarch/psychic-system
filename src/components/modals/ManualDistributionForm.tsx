import styled, { useTheme } from 'styled-components';
import { Container, CSSObject, Grid, Modal, Select, Space } from '@mantine/core';
import { ChevronDownIcon, ArrowRightIcon } from '@modulz/radix-icons';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { ParagraphBold, Title } from '../styled';
import manual_distribution_image from '../../assets/images/manual_distribution.svg';
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
import { WalletTransferModal } from './WalletTransferModal';
import { selectStyles } from '../../lib/constants';
import { cacheKey } from '../../hooks/cacheStateKey';
import { formatAmount } from '../../lib/utils';

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
  const queryClient = useQueryClient();

  const { register, errors, handleSubmit, control } = useForm({
    mode: 'all',
    defaultValues: {
      destinationWalletId: '',
      amount: '',
    },
  });

  const { data } = useGetUserWallets();
  const { data: walletTokenDetails } = useGetWalletTokenDetails();

  const wallets = data?.wallets || [];
  const distributionWallet = wallets?.find((wallet) => wallet?.walletType === 'Distribution');

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
        transactionType: 'Institution',
        sourceWalletId: distributionWallet.walletId,
        destinationWalletId: data.destinationWalletId,
        tokenId: walletTokenDetails.tokenId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(cacheKey.walletTokenDetails);
          queryClient.invalidateQueries(cacheKey.tokenReportSummary);
          queryClient.invalidateQueries(cacheKey.userWallets);
          queryClient.invalidateQueries(cacheKey.transactionHistory);
          setAmount(() => Number(data.amount));
          setShowSuccessModal(true);
          // callback?.();
        },
      },
    );
  };

  return (
    <Modal size="calc(100vw - 87px)" opened={isVisible} centered onClose={() => setIsVisible(false)}>
      <Screen fluid>
        <PageContainer>
          <InnerWrapper>
            <ImageWrapper>
              <LoginPageImage src={manual_distribution_image} alt="Manual Distribution Image" />
            </ImageWrapper>
            <form onSubmit={handleSubmit(transfer)}>
              <FormWrapper>
                <FormHeader>Manual Distribution</FormHeader>
                <Title>FROM</Title>
                <FormSection>
                  <Select
                    label="Choose Source"
                    rightSection={null}
                    value={distributionWallet?.walletId}
                    styles={selectStyles}
                    data={[distributionWallet]?.map((item) => ({
                      label: `${item?.walletType} - ${formatAmount(Number(item?.balances?.[0]?.balance))} BTKB`,
                      value: item?.walletId,
                    }))}
                  />
                </FormSection>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <WalletTransferText onClick={() => setShowWalletTransferModal(true)}>
                    Wallet Transfer
                  </WalletTransferText>
                  <ArrowRightIcon fontWeight={600} color={green} />
                </div>
                <Space h={48} />
                <Title>TO</Title>
                <FormSection>
                  <Controller
                    name="destinationWalletId"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Please select an institution' }}
                    render={({ ref, onChange, value }) => (
                      <Select
                        label="Institution Name"
                        ref={ref}
                        onChange={onChange}
                        value={value}
                        rightSection={<ChevronDownIcon />}
                        styles={selectStyles}
                        data={institutionWallets.map((wallet) => ({
                          label: `${wallet?.userId} - ${
                            wallet?.balances?.[0]?.balance ? formatAmount(Number(wallet?.balances?.[0]?.balance)) : 0
                          } BTKB`,
                          value: wallet.walletId,
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
                  <SecondaryButton title="Close" style={{ width: 152 }} onClick={() => setIsVisible(false)} />
                </ButtonArea>
              </FormWrapper>
            </form>
          </InnerWrapper>
        </PageContainer>
      </Screen>
      <SuccessModal
        isVisible={showSuccessModal}
        title="Distribution successful!"
        message={'You have successfully distributed\n'}
        amount={amount}
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
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const FormSection = styled.div`
  margin-top: 25px;
`;
