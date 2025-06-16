import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {osmBaseSource} from "../../sources/osm/osm-base.source";

export const osmBase: TileLayer = new TileLayer({
    source: osmBaseSource,
});