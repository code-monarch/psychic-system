import { InternationalMap } from 'src/components/charts/InternationalMap';
import styled, { useTheme } from 'styled-components';
import { useElementSize } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { CurrencySummaryCard } from '../../components/CurrencySummaryCard';
import { formatAmount } from '../../lib/utils';
import { CurrencyCode, device } from '../../lib/constants';
import { useGetTransactionSummary } from '../../hooks/useWallets';
import { useTokenDetails } from '../../context/token-details-context';

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
  const { t } = useTranslation();

  const mapColors = [
    theme.colors.primary.green,
    theme.colors.secondary.yellow,
    theme.colors.primary.black,
    theme.colors.secondary.red,
    theme.colors.secondary.blue,
  ];

  const countryNames = {
    EUR: t('country.uk'),
    USD: t('country.usa'),
    CAD: 'Canada',
    DOP: t('country.dominican.republic'),
  };

  const mapMarkers = exchangeCurrencies.map((curr, i) => ({
    name: countryNames[curr],
    color: mapColors[i % mapColors.length],
    coordinates: coordinates[curr],
    value: transactions[curr],
  }));

  const { data: transactionSummary } = useGetTransactionSummary();
  const { tokenDetails } = useTokenDetails();

  return (
    <Wrapper>
      <TransactionCards>
        <CurrencyCardWrapper
          style={{
            marginRight: 20,
          }}
        >
          <CurrencySummaryCard
            title={`${t('internal.transaction.amount')} (${tokenDetails?.tokenSymbol})`}
            amount={formatAmount(transactionSummary?.totalInternalTransactionAmount)}
          />
        </CurrencyCardWrapper>
        <CurrencyCardWrapper>
          <CurrencySummaryCard
            title={`${t('external.transaction.amount')} (${tokenDetails?.tokenSymbol})`}
            amount={formatAmount(transactionSummary?.totalExternalTransactionAmount)}
          />
        </CurrencyCardWrapper>
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
  @media ${device.tablet} {
    margin-right: 0;
    flex-direction: column;
  }
`;

const MapWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const CurrencyCardWrapper = styled.div`
  flex: 1;
  @media ${device.tablet} {
    margin-right: 0 !important;
    width: 100%;
  }
`;
