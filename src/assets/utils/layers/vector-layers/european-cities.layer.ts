import VectorLayer from "ol/layer/Vector";
import {europeanCitiesVectorSource} from "../../sources/vector-sources/european-cities-vector.source";

const europeanCitiesLayer: VectorLayer = new VectorLayer({
    source: europeanCitiesVectorSource,
});

export { europeanCitiesLayer };
