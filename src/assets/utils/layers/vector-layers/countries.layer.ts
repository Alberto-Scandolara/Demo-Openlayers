import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { FeatureLike } from "ol/Feature";
import {countriesVectorSource} from "../../sources/vector-sources/countries-vector.source";

const highlightList = ['IT', 'FR', 'DE'];

const highlightedStyle = new Style({
    stroke: new Stroke({
        color: '#444',
        width: 1.5,
    }),
    fill: new Fill({
        color: 'rgba(255, 0, 0, 0.1)',
    }),
});

const fadedStyle = new Style({
    stroke: new Stroke({
        color: '#999',
        width: 1,
    }),
    fill: new Fill({
        color: 'rgba(0, 0, 0, 0.05)',
    }),
});

const borderStyleFunction = (feature: FeatureLike): Style => {
    const iso = feature.get('ISO_A2'); // Works for both Feature and RenderFeature
    return highlightList.includes(iso) ? highlightedStyle : fadedStyle;
};

const countriesVectorLayer = new VectorLayer({
    source: countriesVectorSource,
    style: borderStyleFunction,
});

export { countriesVectorLayer };