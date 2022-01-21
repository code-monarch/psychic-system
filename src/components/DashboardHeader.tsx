import styled from 'styled-components';
import emtechLogo from '../assets/images/emtech-logo.svg';

const Header = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary.lightgrey};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 40px;
  margin: auto;
  max-width: 1440px;
  > div {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const HeaderLeft = styled.div`
  justify-content: flex-start;
`;

const HeaderRight = styled.div`
  justify-content: flex-end;
`;

const Logo = styled.img`
  height: 18px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  line-height: 32px;
`;

export const DashboardHeader = ({ className, avatarUrl }: { className?: string; avatarUrl: string }) => (
  <Header className={className}>
    <Container>
      <HeaderLeft>
        <Logo src={emtechLogo} />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={avatarUrl} />
      </HeaderRight>
    </Container>
  </Header>
);
