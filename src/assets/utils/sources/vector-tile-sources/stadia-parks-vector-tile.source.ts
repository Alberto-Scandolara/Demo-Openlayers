import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";

const stadiaParksVectorTileSource: VectorTileSource = new VectorTileSource({
    format: new MVT(),
    url:
        'https://tiles.stadiamaps.com/data/openmaptiles/{z}/{x}/{y}.pbf',
    attributions: '© <a href="https://stadiamaps.com/">Stadia Maps</a>, ' +
        '© <a href="https://openmaptiles.org/">OpenMapTiles</a>, ' +
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

export  { stadiaParksVectorTileSource };