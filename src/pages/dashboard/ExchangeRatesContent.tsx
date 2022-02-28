import styled, { useTheme } from 'styled-components';
import { Cell, Column } from 'react-table';
import { Coordinates, InternationalMap } from '../../components/charts/InternationalMap';
import { CURRENCY_NAMES, CurrencyCode } from '../../lib/constants';
import { BasicTable } from '../../components/tables/BasicTable';
import { Flex } from '../../components/styled';
import { TimeChangeLineChart, TimeValue } from '../../components/charts/TimeChangeLineChart';

interface ExchangeRatesRow {
  name: string;
  amount: number;
  change: number;
  chart: TimeValue[];
}

type CurrencyCoordinates = {
  [K in CurrencyCode]?: Coordinates;
};

// TODO: Get this from an API
const exchangeRates = {
  EUR: 116.0,
  USD: 101.62,
  CAD: 80.9,
  DOP: 1.75,
};

// TODO: Get this from... ?
const coordinates: CurrencyCoordinates = {
  EUR: [4.469936, 50.503887],
  USD: [-115.712891, 37.09024],
  CAD: [-106.346771, 56.130366],
  DOP: [-70.162651, 18.735693],
};

const HOUR_IN_MS = 3600000;

const makeTimeValues = (count = 24): TimeValue[] => {
  const values: TimeValue[] = [];
  for (let i = count; i > 0; i -= 1) {
    values.push({
      timestamp: new Date().getTime() - HOUR_IN_MS * i,
      value: (Math.random() * 0.5) / 100,
    });
  }
  return values;
};

const ExchangeRatesTable = ({
  className,
  columnData,
  rowData,
  getColumnProps,
  getCellProps,
}: {
  className?: string;
  columnData: Column<ExchangeRatesRow>[];
  rowData: ExchangeRatesRow[];
  getColumnProps?: (col: Column<ExchangeRatesRow>) => object;
  getCellProps?: (cell: Cell<ExchangeRatesRow>) => object;
}): JSX.Element => (
  <BasicTable<ExchangeRatesRow>
    className={className}
    columnData={columnData}
    rowData={rowData}
    getColumnProps={getColumnProps}
    getCellProps={getCellProps}
  />
);

const Wrapper = styled(Flex.Column)`
  margin: 0px;
`;

const ChartWrapper = styled.div`
  width: 150px;
  margin: 0 auto;
`;

const StyledExchangeRatesTable = styled(ExchangeRatesTable)`
  margin-top: 75px;
`;

export const ExchangeRatesContent = ({
  locale = 'en-US',
  localCurrency,
  exchangeCurrencies,
}: {
  locale?: string;
  localCurrency: CurrencyCode;
  exchangeCurrencies: CurrencyCode[];
}): JSX.Element => {
  const theme = useTheme();

  const decimalFormatter = new Intl.NumberFormat(locale, { style: 'decimal', minimumFractionDigits: 2 });
  const percentFormatter = new Intl.NumberFormat(locale, {
    style: 'percent',
    signDisplay: 'always',
    minimumFractionDigits: 2,
  });

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
    value: exchangeRates[curr],
    formatter: decimalFormatter.format,
  }));

  const tableColumns: Column<ExchangeRatesRow>[] = [
    {
      Header: CURRENCY_NAMES[localCurrency].name_formal,
      accessor: 'name',
    },
    {
      Header: `Amount (${CurrencyCode[localCurrency]})`,
      accessor: 'amount',
      Cell: (cell) => decimalFormatter.format(cell.value),
    },
    {
      Header: 'Change (24h)',
      accessor: 'change',
      Cell: (cell) => percentFormatter.format(cell.value),
    },
    {
      Header: 'Chart (24h)',
      accessor: 'chart',
      Cell: ({ row, value }: Cell<ExchangeRatesRow>) => (
        <ChartWrapper>
          <TimeChangeLineChart chartId={`tableChart-${row.index}`} data={value} />
        </ChartWrapper>
      ),
    },
  ];

  const tableRows: ExchangeRatesRow[] = exchangeCurrencies.map((curr) => {
    const chartValues = makeTimeValues(); // TODO: Get data from API
    const firstValue = chartValues[0].value;
    const lastValue = chartValues[chartValues.length - 1].value;
    return {
      name: CURRENCY_NAMES[curr].name_formal,
      amount: exchangeRates[curr],
      change: lastValue - firstValue,
      chart: chartValues,
    };
  });

  const columnPropGetter = (col: Column<ExchangeRatesRow>) => {
    const { id } = col;
    return {
      style: {
        ...(id === 'amount' && { textAlign: 'right' }),
        ...(id === 'change' && { textAlign: 'center' }),
      },
    };
  };

  const cellPropGetter = (cell: Cell<ExchangeRatesRow>) => {
    const columnId = cell.column.id;
    const { value } = cell;

    let color: string;
    if (value > 0) {
      color = theme.colors.primary.green;
    } else if (value < 0) {
      color = theme.colors.secondary.red;
    } else {
      color = theme.colors.primary.black;
    }

    return (
      columnId === 'change' && {
        style: { color },
      }
    );
  };

  return (
    <Wrapper>
      <InternationalMap width={650} markers={mapMarkers} />
      <StyledExchangeRatesTable
        columnData={tableColumns}
        rowData={tableRows}
        getColumnProps={columnPropGetter}
        getCellProps={cellPropGetter}
      />
    </Wrapper>
  );
};
