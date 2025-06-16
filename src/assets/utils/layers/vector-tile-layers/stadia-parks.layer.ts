import VectorTileLayer from "ol/layer/VectorTile";
import Fill from "ol/style/Fill";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import {stadiaParksVectorTileSource} from "../../sources/vector-tile-sources/stadia-parks-vector-tile.source";

const styleFunction = (feature: { get: (arg0: string) => any; }) => {
    const layer = feature.get('layer');
    const kind = feature.get('class') || feature.get('kind'); // some vector tile schemas use 'class' or 'kind'

    switch (layer) {
        case 'water':
            return new Style({
                fill: new Fill({ color: '#a0c8f0' }),
                stroke: new Stroke({ color: '#3f7fbf', width: 1 }),
            });

        case 'road':
            // Different road kinds get different widths/colors
            if (kind === 'motorway') {
                return new Style({
                    stroke: new Stroke({ color: '#ff7f50', width: 4 }),
                });
            } else if (kind === 'primary') {
                return new Style({
                    stroke: new Stroke({ color: '#ffa07a', width: 3 }),
                });
            } else if (kind === 'secondary') {
                return new Style({
                    stroke: new Stroke({ color: '#f0e68c', width: 2 }),
                });
            } else {
                return new Style({
                    stroke: new Stroke({ color: '#888', width: 1 }),
                });
            }

        case 'building':
            return new Style({
                fill: new Fill({ color: 'rgba(200, 190, 180, 0.7)' }),
                stroke: new Stroke({ color: '#a1887f', width: 1 }),
            });

        case 'park':
            return new Style({
                fill: new Fill({ color: '#a8d5a2' }),
                stroke: new Stroke({ color: '#4d9148', width: 1 }),
            });

        case 'railway':
            return new Style({
                stroke: new Stroke({ color: '#b0b0b0', width: 2, lineDash: [10, 10] }),
            });

        case 'boundary':
            return new Style({
                stroke: new Stroke({ color: '#ff0000', width: 1, lineDash: [4, 8] }),
            });

        case 'landuse':
            if (kind === 'residential') {
                return new Style({
                    fill: new Fill({ color: '#f5f5dc' }),
                });
            } else if (kind === 'commercial') {
                return new Style({
                    fill: new Fill({ color: '#ffe4c4' }),
                });
            }
            break;

        case 'aeroway':
            return new Style({
                fill: new Fill({ color: '#e0eafc' }),
                stroke: new Stroke({ color: '#a3b8ee', width: 1 }),
            });

        default:
            return new Style({
                stroke: new Stroke({ color: '#999', width: 1 }),
                fill: new Fill({ color: 'rgba(200, 200, 200, 0.2)' }),
            });
    }
};

const stadiaParksVectorTileLayer = new VectorTileLayer({
    source: stadiaParksVectorTileSource,
    style: styleFunction,
});

export { stadiaParksVectorTileLayer };