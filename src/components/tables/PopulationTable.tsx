import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Title } from '../styled';
import { SummaryTable } from './SummaryTable';

const StyledSummaryTable = styled(SummaryTable)`
  width: 100%;
`;

export const PopulationTable = (): JSX.Element => {
  const { t } = useTranslation();

  // TODO: Get config data from API

  const config = [
    {
      header: t('total'),
      value: '12M',
    },
    {
      header: t('wallets.active'),
      value: '4M',
    },
    {
      header: t('percentage.of.population.description'),
      value: '30%',
    },
  ];

  return (
    <div>
      <Title>{t('population.title')}</Title>
      <StyledSummaryTable config={config} />
    </div>
  );
};
