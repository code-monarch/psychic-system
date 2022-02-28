import styled from 'styled-components';
import { Title } from '../styled';
import { SummaryTable } from './SummaryTable';

const StyledSummaryTable = styled(SummaryTable)`
  width: 100%;
`;

export const PopulationTable = (): JSX.Element => {
  // TODO: Get config data from API
  const config = [
    {
      header: 'Total Population',
      value: '12M',
    },
    {
      header: 'Total Active Wallets',
      value: '4M',
    },
    {
      header: '% of Population',
      value: '30%',
    },
  ];

  return (
    <div>
      <Title>Population</Title>
      <StyledSummaryTable config={config} />
    </div>
  );
};
