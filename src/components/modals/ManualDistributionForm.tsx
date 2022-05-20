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
import { formatAmount } from '../../lib/utils';
import { useTokenDetails } from '../../context/token-details-context';

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
  const { t } = useTranslation();

  const { register, errors, handleSubmit, control } = useForm({
    mode: 'all',
    defaultValues: {
      destinationWalletId: '',
      amount: '',
    },
  });

  const { tokenDetails: walletBalanceAndTokenDetails } = useTokenDetails();

  const wallets = walletBalanceAndTokenDetails?.walletBalance || [];

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
        amount: Number(data.amount),
        latitude: String(currentLocation?.[1]),
        longitude: String(currentLocation?.[0]),
        transactionType: 'Institution',
        sourceWalletId: distributionWallet.walletId,
        destinationWalletId: data.destinationWalletId,
        tokenId: walletBalanceAndTokenDetails.tokenId,
      },
      {
        onSuccess: () => {
          setAmount(() => Number(data.amount));
          setShowSuccessModal(true);
          // callback?.();
        },
      },
    );
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
                <FormHeader>{t('distribution.manual.title')}</FormHeader>
                <Title>{t('transfer.from')}</Title>
                <FormSection>
                  <Select
                    label={t('choose.wallet.source')}
                    rightSection={null}
                    value={distributionWallet?.walletId}
                    styles={selectStyles}
                    data={[distributionWallet]?.map((item) => ({
                      label: `${item?.walletType} - ${formatAmount(Number(item?.balances?.[0]?.balance))} ${
                        walletBalanceAndTokenDetails?.tokenSymbol
                      }`,
                      value: item?.walletId,
                    }))}
                  />
                </FormSection>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <WalletTransferText onClick={() => setShowWalletTransferModal(true)}>
                    {t('wallets.transfer.title')}
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
                        label={t('institution.name.label')}
                        ref={ref}
                        onChange={onChange}
                        value={value}
                        rightSection={<ChevronDownIcon />}
                        styles={selectStyles}
                        data={institutionWallets.map((wallet) => ({
                          label: `${wallet?.userId} - ${
                            wallet?.balances?.[0]?.balance ? formatAmount(Number(wallet?.balances?.[0]?.balance)) : 0
                          } ${walletBalanceAndTokenDetails?.tokenSymbol}`,
                          value: wallet.walletId,
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
                  <PrimaryButton title={t('distribute.title')} loading={isLoading} />
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
  font-family: 'ProximaNovaExtraBold', sans-serif;
`;

const FormSection = styled.div`
  margin-top: 25px;
`;
