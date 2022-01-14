import styled from 'styled-components';
import emtechLogo from '../assets/images/emtech-logo.svg';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 40px;
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

export default function DashboardHeader({ className, avatarUrl }: { className?: string; avatarUrl: string }) {
  return (
    <Header className={className}>
      <HeaderLeft>
        <Logo src={emtechLogo} />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={avatarUrl} />
      </HeaderRight>
    </Header>
  );
}
