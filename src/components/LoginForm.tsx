import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useLocalStorage } from 'react-use';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { AnimatedLabelInput } from './AnimatedLabelInput';
import { AppUser, useAuth } from '../context/auth-context';
import { device, isValidEmailRegex, LOCAL_STORAGE_KEYS, MEMBER_ROUTE } from '../lib/constants';
import { PrimaryButton } from './Buttons';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  font-family: 'ProximaNovaBold', sans-serif;
  color: ${({ theme }) => theme.colors.secondary.red};
`;

const LoginButton = styled(PrimaryButton)`
  @media ${device.laptop} {
    width: 100%;
  }
`;

const TextInput = styled.div`
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.colors.primary.powderBlue};
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  margin: 40px auto 0 0;
  @media ${device.laptop} {
    width: 100%;
  }
`;

interface IFormData {
  email: string;
  password: string;
}

export const LoginForm = ({ className }: { className?: string }) => {
  const { useSignin, setUserRole, useGetUserRole, setAppUser } = useAuth();
  const { t } = useTranslation();
  const { mutate: getUserRole } = useGetUserRole();
  const [, saveToLocalStorage] = useLocalStorage<AppUser>(LOCAL_STORAGE_KEYS.USER_DATA, null);
  const [, saveTokenToLocalStorage] = useLocalStorage<string>(LOCAL_STORAGE_KEYS.TOKEN, null);
  const [, saveRefreshTokenToLocalStorage] = useLocalStorage<string>(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, null);
  const history = useHistory();
  const { register, errors, handleSubmit, formState } = useForm({ mode: 'all' });
  const { mutate: signin, isLoading: signinRequestInProgress } = useSignin();

  const handleFormSubmit = (data: IFormData) => {
    signin(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: async (userDataToken) => {
          const decodedUser = jwt_decode(userDataToken.token) as AppUser;

          setAppUser(decodedUser);
          getUserRole(null, {
            onSuccess: async (userRole) => {
              saveToLocalStorage(decodedUser);
              saveTokenToLocalStorage(userDataToken.token);
              saveRefreshTokenToLocalStorage(userDataToken.refreshToken);
              history.push(MEMBER_ROUTE.GET_STARTED);
              setUserRole(userRole);
            },
            onError: (error: AxiosError) => {
              const backendError = error?.response?.data?.error_description;
              toast.error(backendError || error?.response?.data?.message || error.message);
            },
          });
        },
        onError: (error: AxiosError) => {
          const backendError = error?.response?.data?.error_description;
          toast.error(backendError || error?.response?.data?.message || error.message);
        },
      },
    );
  };
  const disabled = !formState.isValid || formState.isSubmitting || signinRequestInProgress;

  return (
    <Form className={className} onSubmit={handleSubmit(handleFormSubmit)}>
      <TextInput>
        <AnimatedLabelInput
          label={t('login.email')}
          name="email"
          type="email"
          isLabelAnimated={false}
          ref={register({
            required: t('login.email.required'),
            pattern: {
              value: isValidEmailRegex,
              message: t('login.email.invalid'),
            },
          })}
        />
      </TextInput>
      {errors?.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
      <TextInput>
        <AnimatedLabelInput
          label={t('login.password')}
          isLabelAnimated={false}
          isPassword
          name="password"
          type="password"
          ref={register({
            required: t('login.password.required'),
          })}
        />
      </TextInput>

      {errors?.password?.message && <ErrorText>{errors.password.message}</ErrorText>}

      <ButtonContainer>
        <LoginButton title={t('login.title')} disabled={disabled} loading={signinRequestInProgress} />
      </ButtonContainer>
    </Form>
  );
};
