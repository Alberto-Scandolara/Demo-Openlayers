import ImageLayer from "ol/layer/Image";
import {ImageWMS} from "ol/source";
import {osmRoadsImageWmsSource} from "../../sources/image-wms-sources/osm-roads-image-wms.source";

export const osmRoads: ImageLayer<ImageWMS> = new ImageLayer({
    source: osmRoadsImageWmsSource,
});