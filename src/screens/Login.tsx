import styled from 'styled-components'
import LoginForm from '../components/LoginForm';
import loginImage from '../assets/images/login-image.svg';

const Screen = styled.div `
  flex: 1;
  display: flex;
  flex-direction: row;
  
  a {
    font-size: 13px;
    font-weight: bold;
    color: #2E2E2E;
  }
`

const LeftPane = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #FAFAFA;
`

const RightPane = styled.div `
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const LogoPanel = styled.div `
  margin-right: auto;
  background-color: #FAFAFA;
  padding: 40px;
`

const SignUpPanel = styled.div `
  margin-left: auto;
  color: #828282;
  padding: 40px;
`

const ImageWrapper = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    flex: 0;
  }
`

const CallToAction = styled.h2 `
  font-size: 36px;
  font-weight: bold;
  text-align: center;

  .green {
    color: #279F70;
  }
`

const LoginWrapper = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 160px;
  width: 400px;
`

const LoginText = styled.h1 `
  font-size: 36px;
  font-weight: bold;
`

export default function Login() {
    return (
        <Screen>
          <LeftPane>
            <LogoPanel>EMTECH</LogoPanel>
            <ImageWrapper>
              <img src={loginImage}/>
              <CallToAction>
                Access <span className="green">Digital Cash</span><br/>
                Like Never Before!
              </CallToAction>
            </ImageWrapper>
          </LeftPane>
          <RightPane>
            <SignUpPanel>Not a Member? <a href="/">Sign Up</a></SignUpPanel>
            <LoginWrapper>
              <LoginText>Login</LoginText>
              <LoginForm/>
            </LoginWrapper>
          </RightPane>
        </Screen>
    )
}
