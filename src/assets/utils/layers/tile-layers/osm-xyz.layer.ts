import TileLayer from "ol/layer/Tile";
import {osmXyzSource} from "../../sources/xyz/osm-xyz.source";

export const osmXyz: TileLayer = new TileLayer({
    source: osmXyzSource,
});