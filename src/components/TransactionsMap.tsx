import { Feature, FeatureCollection } from 'geojson';
import { geoPath, geoContains, geoNaturalEarth1 } from 'd3-geo';
import styled, { useTheme } from 'styled-components';
import nationalJson from '../assets/geo/haiti.geo.json';
import { Flex } from './styled';
import { NameValue } from './NameValue';
import { normalize } from '../lib/utils';

interface Transaction {
  value: number;
  latitude: number;
  longitude: number;
}

const Legend = styled.ul`
  flex: 1;
  padding: 0;
  margin: 0;
  margin-left: 3em;
`;

const LegendItem = styled.li`
  font-size: 14px;
  line-height: 2em;
  font-weight: 600;
  color: ${(props) => props.color};
`;

const LegendNameValue = styled(NameValue)`
  ${NameValue.Name} {
    color: ${(props) => props.theme.colors.primary.grey};
  }

  ${NameValue.Value} {
    color: ${(props) => props.theme.colors.primary.black};
  }
`;

const TransactionsMap = ({
  className,
  transactions,
  width = 200,
}: {
  className?: string;
  transactions?: Transaction[];
  width?: number;
}): JSX.Element => {
  const theme: any = useTheme();
  const colors = [
    theme.colors.secondary.yellow,
    theme.colors.secondary.lightgreen,
    theme.colors.primary.green,
    theme.colors.secondary.blue,
    theme.colors.secondary.darkgreen,
  ];

  const backgroundGrey = '#CCCCCC'; // TODO: Replace this with an appropriate theme color

  const country = nationalJson as FeatureCollection;
  const transactionsList = transactions || [];

  const projection = geoNaturalEarth1().fitWidth(width, country);
  const pathGenerator = geoPath().projection(projection);
  const [projectedWidth, projectedHeight] = pathGenerator.bounds(country)[1];

  // Place a single map marker for each region at the appropriate long/lat for that region, sized by the normalized aggregate value of the transactions in that region.
  const mapMarkers = country.features.map((feature: Feature, i: number) => ({
    longitude: feature.properties.longitude,
    latitude: feature.properties.latitude,
    total: transactionsList
      .filter((t) => geoContains(feature, [t.longitude, t.latitude])) // TODO: Validate longitude and latitude
      .reduce((acc, t) => acc + t.value, 0),
    color: colors[i % colors.length],
    name: feature.properties.name,
  }));
  const markerSizer = normalize(mapMarkers.map((m) => m.total));

  return (
    <Flex.Row>
      <svg className={className} width={width} viewBox={`0 0 ${projectedWidth} ${projectedHeight}`}>
        <defs>
          <pattern id="circles" x="1" y="1" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" style={{ fill: backgroundGrey }} />
          </pattern>
        </defs>
        <g className="features">
          {country.features.map((feature: any, i: number) => {
            const path = pathGenerator(feature);

            if (!path) {
              return false;
            }

            return (
              <path key={`feature-${i}`} d={path} className="country-feature" fill="url(#circles)" strokeWidth="0" />
            );
          })}
        </g>
        <g className="markers">
          {mapMarkers.map((marker, i) => {
            const projectedMarker = projection([marker.longitude, marker.latitude]);

            if (!projectedMarker) {
              return false;
            }

            const [x, y] = projectedMarker;
            const size = markerSizer(marker.total, 0, width * 0.05);

            return <circle key={`marker-${i}`} cx={x} cy={y} r={size} fill={marker.color} />;
          })}
        </g>
      </svg>
      <Legend>
        {mapMarkers.map((marker: any, i: number) => {
          const { name, total, color } = marker;

          if (total <= 0) {
            return false;
          }

          return (
            <LegendItem key={`legenditem-${i}`} color={color}>
              <LegendNameValue name={name} value={`${total}`} />
            </LegendItem>
          );
        })}
      </Legend>
    </Flex.Row>
  );
};

export { TransactionsMap };
