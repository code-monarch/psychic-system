import styled, { useTheme } from 'styled-components';
import { InternationalMap } from '../../components/InternationalMap';
import { CurrencyCode, CURRENCY_NAMES } from '../../lib/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px;
`;

// TODO: Get this from an API
const dummyExchangeResponse = {
  EUR: 116.0,
  USD: 101.62,
  CAD: 80.9,
  DOP: 1.75,
};

type CurrencyCoordinates = {
  [K in CurrencyCode]?: [number, number];
};

// TODO: Get this from... ?
const coordinates: CurrencyCoordinates = {
  EUR: [4.469936, 50.503887],
  USD: [-95.712891, 37.09024],
  CAD: [-106.346771, 56.130366],
  DOP: [-70.162651, 18.735693],
};

export const ExchangeRatesContent = ({
  localCurrency,
  exchangeCurrencies,
}: {
  localCurrency: CurrencyCode;
  exchangeCurrencies: CurrencyCode[];
}): JSX.Element => {
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
    value: dummyExchangeResponse[curr],
  }));
  return (
    <Wrapper>
      <InternationalMap width={650} markers={mapMarkers} />
    </Wrapper>
  );
};

// base currency (3 letter code)
