import Heatmap from "ol/layer/Heatmap.js";
import {earthquakesVectorSource} from "../../sources/vector-sources/earthquakes-vector.source";

export const earthquakesLayer: Heatmap = new Heatmap({
    source: earthquakesVectorSource,
    blur: 25,
    radius: 15,
    weight: f => {
        const mag = f.get('mag');
        return mag ? Math.min(mag / 10, 1) : 0;
    }
});