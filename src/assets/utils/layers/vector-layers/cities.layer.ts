import VectorLayer from "ol/layer/Vector";

import {citiesVectorSource} from "../../sources/vector-sources/cities-vector.source";
import {citiesBlueStyle} from "../../styles/cities-blue.style";

const citiesLayer: VectorLayer = new VectorLayer({
    source: citiesVectorSource,
    style: citiesBlueStyle
});

export { citiesLayer };
