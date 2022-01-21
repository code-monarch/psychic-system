import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useLocalStorage } from 'react-use';
import { AnimatedLabelInput } from './AnimatedLabelInput';
import { AppUser, useAuth } from '../context/auth-context';
import { isValidEmailRegex, LOCAL_STORAGE_KEYS, MEMBER_ROUTE } from '../lib/constants';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const ErrorText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.secondary.red};
`;

const TextInput = styled.div`
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary.grey};
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled.button`
  background-color: #279f70; // TODO: Add this color to theme
  border: none;
  border-radius: 8px;
  padding: 18px 24px;
  margin: 40px auto 0 0;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

// TODO: Replace with Link, rather than a, once router config is set up
// TODO: Make the whole password + forgot password link a single component
const ForgotPasswordLink = styled.div`
  text-align: end;
  margin-top: -48px;
`;

const LoginButtonText = styled.span`
  margin-right: 100px;
`;

interface IFormData {
  email: string;
  password: string;
}

export const LoginForm = ({ className }: { className?: string }) => {
  const { useSignin, setUserRole, useGetUserRole, setAppUser } = useAuth();
  const { mutate: getUserRole } = useGetUserRole();
  const [value, saveToLocalStorage] = useLocalStorage<AppUser>(LOCAL_STORAGE_KEYS.USER_DATA, null);
  const history = useHistory();
  const { register, errors, handleSubmit, formState } = useForm({ mode: 'all' });
  const {
    mutate: signin,
    isLoading: signinRequestInProgress,
    isError: hasSigninError,
    error: signinError,
  } = useSignin();

  const handleFormSubmit = (data: IFormData) => {
    signin(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: async (userDataToken) => {
          const decodedUser = jwt_decode(userDataToken.responsePayload.token) as AppUser;

          setAppUser(decodedUser);
          getUserRole(null, {
            onSuccess: async (userRole) => {
              saveToLocalStorage(decodedUser);
              history.push(MEMBER_ROUTE.HOME);
              setUserRole(userRole);
              // userRefetch();
            },
          });
        },
      },
    );
  };
  const disabled = !formState.isValid || formState.isSubmitting || signinRequestInProgress;

  return (
    <Form className={className} onSubmit={handleSubmit(handleFormSubmit)}>
      <TextInput>
        <AnimatedLabelInput
          label="Email Address"
          name="email"
          type="email"
          ref={register({
            required: 'Email is required',
            pattern: {
              value: isValidEmailRegex,
              message: 'This appears to be an invalid email address.',
            },
          })}
        />
      </TextInput>
      {errors?.email?.message && <ErrorText>{errors.email.message}</ErrorText>}
      <TextInput>
        <AnimatedLabelInput
          label="Password"
          isPassword
          name="password"
          type="password"
          ref={register({
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password length cannot be less than 6 characters',
            },
            maxLength: {
              value: 64,
              message: 'Name must be less than 64 characters',
            },
          })}
        />
      </TextInput>
      {errors?.password?.message && <ErrorText>{errors.password.message}</ErrorText>}
      {hasSigninError && <ErrorText>{(signinError as any)?.message} </ErrorText>}
      <ForgotPasswordLink>
        <a href="/">Forgot password?</a>
      </ForgotPasswordLink>
      <LoginButton type="submit" style={disabled ? { opacity: 0.6 } : {}} disabled={disabled}>
        <LoginButtonText>{signinRequestInProgress ? 'Signing you in ...' : 'Login'}</LoginButtonText>
        <span>-&gt;</span>
      </LoginButton>
    </Form>
  );
};
