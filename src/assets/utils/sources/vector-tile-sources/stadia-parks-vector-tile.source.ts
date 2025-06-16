import VectorTileSource from "ol/source/VectorTile";
import MVT from "ol/format/MVT";

const stadiaParksVectorTileSource: VectorTileSource = new VectorTileSource({
    format: new MVT(),
    url:
        'https://tiles.stadiamaps.com/data/openmaptiles/{z}/{x}/{y}.pbf',
});

export  { stadiaParksVectorTileSource };