import WebGLTileLayer from "ol/layer/WebGLTile.js";
import {tileIndexGradientDataTileSource} from "../../sources/data-tile-sources/tile-index-gradient-fata-tile.source";

export const tileIndexGradientLayer: WebGLTileLayer = new WebGLTileLayer({
    source: tileIndexGradientDataTileSource
});