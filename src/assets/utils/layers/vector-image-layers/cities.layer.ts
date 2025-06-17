import VectorImageLayer from 'ol/layer/VectorImage';

import {citiesVectorSource} from "../../sources/vector-sources/cities-vector.source";
import {citiesRedStyle} from "../../styles/cities-red.style";

const citiesLayer = new VectorImageLayer({
    source: citiesVectorSource,
    style: citiesRedStyle,
});

export { citiesLayer };
