import { InternationalMap } from 'src/components/charts/InternationalMap';
import styled, { useTheme } from 'styled-components';
import { useElementSize } from '@mantine/hooks';
import { RequestCards } from '../../components/cards/RequestCards';
import { CurrencySummaryCard } from '../../components/CurrencySummaryCard';
import { formatAmount } from '../../lib/utils';
import { CURRENCY_NAMES, CurrencyCode } from '../../lib/constants';

const Wrapper = styled.div`
  margin-top: 24px;
`;

// TODO: Get this from... ?
const coordinates = {
  EUR: [4.469936, 50.503887],
  USD: [-115.712891, 37.09024],
  CAD: [-106.346771, 56.130366],
  DOP: [-70.162651, 18.735693],
};

// TODO: Get this from an API
const transactions = {
  EUR: 87,
  USD: 39022,
  CAD: 24000,
  DOP: 12045,
};

const exchangeCurrencies: CurrencyCode[] = [CurrencyCode.USD, CurrencyCode.EUR, CurrencyCode.CAD, CurrencyCode.DOP];

export const InternationalDashboardSummary = (): JSX.Element => {
  const { ref, width, height } = useElementSize();
  const theme = useTheme();

  const mapColors = [
    theme.colors.primary.green,
    theme.colors.secondary.yellow,
    theme.colors.primary.black,
    theme.colors.secondary.red,
    theme.colors.secondary.blue,
  ];

  const mapMarkers = exchangeCurrencies.map((curr, i) => ({
    name: CURRENCY_NAMES[curr].name_formal,
    color: mapColors[i % mapColors.length],
    coordinates: coordinates[curr],
    value: transactions[curr],
  }));
  return (
    <Wrapper>
      <TransactionCards>
        <div
          style={{
            marginRight: 20,
            flex: 1,
          }}
        >
          <CurrencySummaryCard title="Internal Transactions" amount={formatAmount(28000)} />
        </div>
        <div
          style={{
            flex: 1,
          }}
        >
          <CurrencySummaryCard title="External Transactions" amount={formatAmount(1345898)} />
        </div>
      </TransactionCards>
      <div>
        <MapWrapper ref={ref}>
          <InternationalMap width={width} markers={mapMarkers} />
        </MapWrapper>
      </div>
    </Wrapper>
  );
};

const TransactionCards = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const MapWrapper = styled.div`
  width: 90%;
  margin: auto;
`;
