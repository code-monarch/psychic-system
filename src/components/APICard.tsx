import styled from 'styled-components';
import { Flex } from './styled';

interface CardInfo {
  title: string;
  environment: string;
  type: string;
  description: string;
}

const Card = styled(Flex.Column)`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary.lightgrey};
  border-radius: 8px;
  width: 360px;
  height: 300px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.lightgrey};
    box-shadow: 0 2px 3px rgb(60 64 67 / 30%), 0 6px 10px rgb(60 64 67 / 15%);
    transition: background 0.1s ease-out, box-shadow 0.1s ease-out;
  }
`;

const Header = styled(Flex.Row)`
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.colors.secondary.grey};
  padding: 16px 16px 20px 16px;
`;

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.black};
  margin: 0;
`;

const Body = styled.div`
  flex: 1;
  margin: 24px 16px 0 16px;
`;

const APIEnv = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary.darkgreen};
`;

const APIType = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.darkgrey};
`;

const APIDescription = styled.div`
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const AccessLink = styled.div`
  color: ${({ theme }) => theme.colors.primary.black};
`;

const SubscribeLink = styled.div`
  color: ${({ theme }) => theme.colors.primary.green};
`;

const Footer = styled(Flex.Row)`
  justify-content: space-between;
  margin: 0 16px 16px 20px;
  font-size: 14px;
  font-weight: 700;
`;

const MoreSVG = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} height="16" width="16" viewBox="0 0 16 16">
    <circle cx="2" cy="8" r="1.5" />
    <circle cx="8" cy="8" r="1.5" />
    <circle cx="14" cy="8" r="1.5" />
  </svg>
);

const More = styled(MoreSVG)`
  stroke: ${({ theme }) => theme.colors.primary.grey};
  fill: none;
`;

const APICard = ({ info }: { info: CardInfo }): JSX.Element => (
  <Card>
    <Header>
      <Title>{info.title}</Title>
      {/* TODO: Set up this link */}
      <More />
    </Header>
    <Body>
      <APIEnv>{info.environment}</APIEnv>
      <APIType>{info.type}</APIType>
      <APIDescription>{info.description}</APIDescription>
    </Body>
    <Footer>
      {/* TODO: Set up these links */}
      <AccessLink>Get Access Token</AccessLink>
      <SubscribeLink>Subscribe/Unsubscribe</SubscribeLink>
    </Footer>
  </Card>
);

export { APICard };
