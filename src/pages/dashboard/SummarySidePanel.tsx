import styled from 'styled-components';
import { TransactionsMap } from 'src/components/TransactionsMap';
import { Flex } from '../../components/styled';
import { PopulationTable } from '../../components/tables/PopulationTable';
import { CirculationComponent } from '../../components/cards/CirculationComponent';

const View = styled(Flex.Column)`
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const transactions = [
  {
    longitude: -73.414569,
    latitude: 18.41448,
    value: 2100,
  },
  {
    longitude: -72.194979,
    latitude: 18.545518,
    value: 200,
  },
  {
    longitude: -72.263644,
    latitude: 18.68087,
    value: 550,
  },
  {
    longitude: -74.298861,
    latitude: 18.490826,
    value: 12,
  },
  {
    longitude: -72.172933,
    latitude: 18.662523,
    value: 1900,
  },
  {
    longitude: -71.954535,
    latitude: 19.450522,
    value: 900,
  },
  {
    longitude: -73.160688,
    latitude: 19.825479,
    value: 400,
  },
  {
    longitude: -73.330703,
    latitude: 19.682977,
    value: 700,
  },
];

export const SummarySidePanel = (): JSX.Element => (
  <View>
    <PopulationTableContainer>
      <PopulationTable />
    </PopulationTableContainer>
    <CirculationComponent />
    {/* <TransactionsMap transactions={transactions} /> */}
  </View>
);

const PopulationTableContainer = styled.div`
  margin-bottom: 12px;
`;
