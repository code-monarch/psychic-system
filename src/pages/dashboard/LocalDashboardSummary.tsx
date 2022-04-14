import styled, { useTheme } from 'styled-components';
import { useElementSize } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { TransactionsMap } from '../../components/TransactionsMap';
import { Title } from '../../components/styled';

const Wrapper = styled.div`
  margin-top: 24px;
`;

// TODO: Get this from an API
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

export const LocalDashboardSummary = (): JSX.Element => {
  const { ref, width, height } = useElementSize();
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <Wrapper>
      <Title>{t('local.tab.description')}</Title>
      <div>
        <MapWrapper ref={ref}>
          <TransactionsMap width={width} transactions={transactions} />
        </MapWrapper>
      </div>
    </Wrapper>
  );
};

const MapWrapper = styled.div`
  width: 90%;
  margin: auto;
`;
