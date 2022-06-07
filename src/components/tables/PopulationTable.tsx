import styled, { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { ParagraphBold, Title } from '../styled';
import userIcon from '../../assets/images/icons/population/users.svg';
import walletIcon from '../../assets/images/icons/population/wallet.svg';
import percentageIcon from '../../assets/images/icons/population/percentage.png';
import { device } from '../../lib/constants';

export const PopulationTable = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const theme: any = useTheme();

  const { green, blue, yellow } = theme.colors.primary;

  return (
    <div>
      <PopulationHeader>
        <Title>{t('population.title')}</Title>
        <DateText>{moment().format('dddd, D MMM YYYY ')}</DateText>
      </PopulationHeader>

      <Cards>
        <PopulationCard style={{ marginRight: 15 }}>
          <TitleSection>
            <PopulationCardIcon src={userIcon} />
            <PopulationCardTitle style={{ color: green }}>12M</PopulationCardTitle>
          </TitleSection>
          <ParagraphBold>{t('total')}</ParagraphBold>
        </PopulationCard>

        <PopulationCard style={{ marginRight: 15 }}>
          <TitleSection>
            <PopulationCardIcon src={walletIcon} />
            <PopulationCardTitle style={{ color: blue }}>4M</PopulationCardTitle>
          </TitleSection>
          <ParagraphBold>{t('wallets.active')}</ParagraphBold>
        </PopulationCard>

        <PopulationCard>
          <TitleSection>
            <PopulationCardIcon src={percentageIcon} />
            <PopulationCardTitle style={{ color: yellow }}>30%</PopulationCardTitle>
          </TitleSection>
          <ParagraphBold>{t('percentage.of.population.description')}</ParagraphBold>
        </PopulationCard>
      </Cards>
    </div>
  );
};

const DateText = styled(ParagraphBold)`
  color: ${({ theme }) => theme.colors.primary.grey};
`;

const PopulationCardTitle = styled(ParagraphBold)`
  font-size: 24px;
  font-weight: 700;
  font-family: 'ProximaNovaBold', sans-serif;
  margin-left: 5px;
`;

const PopulationCardIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const PopulationHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PopulationCard = styled.div`
  height: 72px;
  background-color: ${({ theme }) => theme.colors.secondary.secondaryGrey};
  border-radius: 8px;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 100%;
    height: 72px;
    margin-bottom: 16px;
    padding: 16px;
    margin-right: 0 !important;
  }
`;
