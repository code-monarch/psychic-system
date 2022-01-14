import styled from 'styled-components';
import AnimatedLabelInput from './AnimatedLabelInput';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
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

export default function LoginForm({ className }: { className?: string }) {
  return (
    <Form className={className}>
      <TextInput>
        <AnimatedLabelInput label="Email Address" />
      </TextInput>
      <TextInput>
        <AnimatedLabelInput label="Password" isPassword />
      </TextInput>
      <ForgotPasswordLink>
        <a href="/">Forgot password?</a>
      </ForgotPasswordLink>
      <LoginButton>
        <LoginButtonText>Login</LoginButtonText>
        <span>-&gt;</span>
      </LoginButton>
    </Form>
  );
}
