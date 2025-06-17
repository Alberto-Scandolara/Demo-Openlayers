import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

const earthquakesVectorSource: VectorSource = new VectorSource({
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
    format: new GeoJSON(),
    attributions: [
        'Data courtesy of the <a href="https://earthquake.usgs.gov/" target="_blank">U.S. Geological Survey</a>',
    ],
});

export { earthquakesVectorSource };