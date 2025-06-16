import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import countriesJson from "../../../jsons/geo/countries.geo.json";

const countriesVectorSource: VectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(countriesJson, {
        featureProjection: 'EPSG:3857',
    }),
});


export { countriesVectorSource };