import styled from 'styled-components';
import { Flex } from './styled';
import logo from '../assets/images/emtech_logo.png';

interface ILogo {
  imageHeight?: number;
  imageWidth?: number;
}

const Card = styled(Flex.Column)`
  cursor: pointer;
  z-index: 10;
  align-items: center;
`;

const LogoSubtitle = styled.h4`
  font-size: 7.5px;
  font-family: 'ProximaNovaBold';
  color: ${({ theme }) => theme.colors.primary.grey};
  margin: 0;
`;

const LogoImage = styled.img`
  height: auto;
`;

export const Logo = ({ imageHeight, imageWidth = 100 }: ILogo): JSX.Element => (
  <Card>
    <LogoImage src={logo} width={imageWidth} alt="Emtech logo" />
    <LogoSubtitle>DIGITAL ASSET PLATFORM</LogoSubtitle>
  </Card>
);
