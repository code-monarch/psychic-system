import { Feature, FeatureCollection } from 'geojson';
import { geoPath } from 'd3-geo';
import { geoMiller } from 'd3-geo-projection';
import { useTheme } from 'styled-components';
import landJson from '../../assets/geo/world.geo.json';
import { normalize } from '../../lib/utils';

export type Coordinates = [number, number];

export interface Marker {
  name: string;
  color: string;
  coordinates: Coordinates;
  value: number;
  size?: 'dynamic' | number;
  formatter?: (value: number) => string;
}

interface MapMarkerColors {
  marker: string;
  markerFill: string;
  label: string;
  value: string;
}

interface MapMarkerProps {
  label: string;
  value: string;
  x: number;
  y: number;
  size: number;
  colors: MapMarkerColors;
  length: number;
  up?: boolean;
  labelSize?: number;
  valueSize?: number;
  labelMargin?: number;
}

export const MapMarker = ({
  label,
  value,
  x,
  y,
  size,
  colors,
  length,
  up = false,
  labelSize = 10,
  valueSize = 12,
  labelMargin = 14,
}: MapMarkerProps) => {
  const lineStart = up ? y - size : y + size;
  const lineEnd = up ? lineStart - length : lineStart + length;
  const textX = x + 8;
  const textY = up ? lineEnd + 15 : lineEnd - 15;
  return (
    <g>
      <circle cx={x} cy={y} r={size} fill={colors.markerFill} stroke={colors.marker} />
      <circle cx={x} cy={y} r={2} fill={colors.marker} />
      <line x1={x} y1={lineStart} x2={x} y2={lineEnd} stroke={colors.marker} />
      <text x={textX} y={textY}>
        <tspan style={{ fontSize: labelSize, fill: colors.label, fontWeight: 400 }} x={textX}>
          {label}
        </tspan>
        <tspan style={{ fontSize: valueSize, fill: colors.value, fontWeight: 600 }} x={textX} dy={labelMargin}>
          {value}
        </tspan>
      </text>
    </g>
  );
};

const defaultValueFormatter = (value: number) => `${value}`;

export const InternationalMap = ({
  className,
  markers = [],
  width = 800,
}: {
  className?: string;
  markers?: Marker[];
  width?: number;
}): JSX.Element => {
  const theme = useTheme();

  const backgroundGrey = '#CCCCCC'; // TODO: Replace this with an appropriate theme color

  const world = landJson as FeatureCollection;

  const projection = geoMiller().rotate([-10, 0]).fitWidth(width, world);
  const pathGenerator = geoPath().projection(projection);
  const [projectedWidth, projectedHeight] = pathGenerator.bounds(world)[1];
  const getMarkerSize = normalize(markers.map((point) => point.value));

  return (
    <svg className={className} width={width} viewBox={`0 0 ${projectedWidth} ${projectedHeight}`}>
      <defs>
        <pattern id="circles" x="1" y="1" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" style={{ fill: backgroundGrey }} />
        </pattern>
      </defs>
      <g className="features">
        {world.features.map((feature: Feature, i: number) => {
          const path = pathGenerator(feature);
          return path && <path key={`feature-${i}`} d={path} className="world-feature" fill="url(#circles)" />;
        })}
      </g>
      <g className="markers">
        {markers.map((marker, i) => {
          const projectedMarker = projection(marker.coordinates);

          if (!projectedMarker) {
            return false;
          }

          const [x, y] = projectedMarker;

          let size: number;
          if (marker.size === 'dynamic') {
            size = getMarkerSize(marker.value, 4, 20);
          } else if (marker.size > 0) {
            size = marker.size;
          } else {
            size = 4;
          }

          const formatValue = marker.formatter || defaultValueFormatter;

          const colors = {
            marker: marker.color,
            markerFill: theme.colors.primary.white,
            label: theme.colors.primary.grey,
            value: theme.colors.primary.black,
          };

          // TODO: These are hardcoded for the demo, but we should generalize them.
          const up = marker.coordinates[1] > 50;
          const length = 50;
          return (
            <MapMarker
              key={`mapmarker-${i}`}
              label={marker.name}
              value={formatValue(marker.value)}
              x={x}
              y={y}
              size={size}
              colors={colors}
              length={length}
              up={up}
            />
          );
        })}
      </g>
    </svg>
  );
};
