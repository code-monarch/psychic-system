import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Flex } from './styled';
import logo from '../assets/images/emtech_logo.png';

interface ILogo {
  imageHeight?: number;
  leftAlign?: boolean;
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
  color: ${({ theme }) => theme.colors.primary.green};
  margin: 0;
  text-transform: uppercase;
`;

const LogoImage = styled.img`
  height: auto;
`;

export const Logo = ({ imageHeight, imageWidth = 100, leftAlign = false }: ILogo): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Card style={{ alignItems: leftAlign ? 'flex-start' : 'center' }}>
      <LogoImage src={logo} width={imageWidth} alt="Emtech logo" />
      <LogoSubtitle>{t('digital.assets.platform')}</LogoSubtitle>
    </Card>
  );
};
