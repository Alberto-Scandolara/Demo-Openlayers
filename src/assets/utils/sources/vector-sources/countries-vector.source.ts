import VectorSource from "ol/source/Vector";
import TopoJSON from 'ol/format/TopoJSON';
import GeoJSON from "ol/format/GeoJSON";

// Assets
import countriesJson from "../../../jsons/geo/countries.geo.json";
import countriesTopoJson from "../../../jsons/topo/countries.topojson.json";
import countriesSimplifiedTopoJson from "../../../jsons/topo/countries.topojson.json";

// Constants
import {FEATURES_PROJECTION} from "../../../../constants/feature-projections";

const countriesGeoJsonVectorSource: VectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(countriesJson, {
        featureProjection: FEATURES_PROJECTION.EPSG_3857,
    }),
});

const countriesVectorSource: VectorSource  = new VectorSource({
    features: new TopoJSON().readFeatures(countriesTopoJson, {
        featureProjection: FEATURES_PROJECTION.EPSG_3857,
    }),
});

const countriesSimplifiedTopoJsonVectorSource: VectorSource  = new VectorSource({
    features: new TopoJSON().readFeatures(countriesSimplifiedTopoJson, {
        featureProjection: FEATURES_PROJECTION.EPSG_3857,
    }),
});

export {
    countriesGeoJsonVectorSource,
    countriesVectorSource,
    countriesSimplifiedTopoJsonVectorSource
};