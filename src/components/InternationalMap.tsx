import { FeatureCollection } from 'geojson'
import { geoPath } from 'd3-geo'
import { geoMiller } from 'd3-geo-projection'
import landJson from '../assets/geo/world.geo.json'
import { normalize } from '../lib/utils'

const MapMarker = ({ label, value, x, y, size, color, length, up = false }: { label: string, value: number, x: number, y: number, size: number, color: string, length: number, up?: boolean}) => {
    const lineStart = up? y - size : y + size;
    const lineEnd = up? lineStart - length : lineStart + length;
    const textX = x + 8;
    const textY = up? lineEnd + 15 : lineEnd - 15;
    return (
        <g>
            <circle
                cx={ x }
                cy={ y }
                r={ size }
                fill="#FFFFFF"
                stroke={ color }
            />
            <circle
                cx={ x }
                cy={ y }
                r={ 2 }
                fill={ color }
            />
            <line x1={ x } y1={ lineStart } x2={ x } y2={ lineEnd } stroke={ color } />
            <text x={ textX } y={ textY } >
                <tspan style={{fontSize: "10px", fill: "#828282", fontWeight: 400 }} x={ textX } >{label}</tspan>
                <tspan style={{fontSize: "12px", fill: "#2E2E2E", fontWeight: 600 }} x={ textX } dy= { 14 }>{value}</tspan>
            </text>
        </g>
    )
}

export interface Marker {
    name: string
    color: string
    coordinates: [number, number]
    value: number
}

function InternationalMap({ className, markers, width = 800 }: { className?: string, markers?: Marker[], width?: number }) {

    const mapMarkers = markers || [];

    const world = landJson as FeatureCollection;

    const projection = geoMiller()
        .rotate([-10, 0])
        .fitWidth(width, world);
    const pathGenerator = geoPath().projection(projection);
    const [projectedWidth, projectedHeight] = pathGenerator.bounds(world)[1];
    const markerSize = normalize(mapMarkers.map(point => point.value));
      
    return (
        <svg className={className} width={ width } viewBox={`0 0 ${projectedWidth} ${projectedHeight}`}>
            <defs>
                <pattern id="circles" x="1" y="1" width="4" height="4" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" style={{stroke: 'none', fill: '#CCCCCC'}} />
                </pattern>
            </defs>
            <g className="features">
                {world.features.map((feature: any, i: number) => {
                    const path = pathGenerator(feature);

                    if (!path) {
                        return false;
                    }

                    return (<path
                        key={ `feature-${ i }` }
                        d={ path  }
                        className="world-feature"
                        fill='url(#circles)'
                    />);
                })}
            </g>
            <g className="markers">
                {mapMarkers.map((marker, i) => {
                    const projectedMarker = projection(marker.coordinates);

                    if (!projectedMarker) {
                        return false;
                    }

                    const [ x, y ] = projectedMarker;
                    const size = markerSize(marker.value, 4, 20);

                    // TODO: These are hardcoded for the demo, but we should generalize them.
                    const up = marker.coordinates[1] > 50;
                    const length = 50;
                    return <MapMarker key={'marker-' + i} label={marker.name} value={marker.value} x={x} y={y} size={size} color={marker.color} length={length} up={up} />
                })}
            </g>
        </svg>
    )
}

export { InternationalMap }
