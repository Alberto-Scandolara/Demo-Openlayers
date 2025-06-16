import VectorImageLayer from 'ol/layer/VectorImage';
import {europeanCitiesVectorSource} from "../../sources/vector-sources/european-cities-vector.source";

const europeanCitiesLayer = new VectorImageLayer({
    source: europeanCitiesVectorSource
});

export { europeanCitiesLayer };
