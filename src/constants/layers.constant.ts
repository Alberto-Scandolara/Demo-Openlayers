import {osmRoads} from "../assets/utils/layers/image-layers/osm-roads.layer";
import {graticuleLabelsLayer} from "../assets/utils/layers/graticules/graticule-labels.layer";
import {earthquakesLayer} from "../assets/utils/layers/heatmaps/earthquakes.layer";
import {osmBase} from "../assets/utils/layers/tile-layers/osm-base.layer";
import {osmXyz} from "../assets/utils/layers/tile-layers/osm-xyz.layer";
import {europeanCitiesLayer} from "../assets/utils/layers/vector-image-layers/european-cities.layer";
import {countriesVectorLayer} from "../assets/utils/layers/vector-layers/countries.layer";
import {europeanCitiesLayer as europeanCitiesVectorLayer} from "../assets/utils/layers/vector-layers/european-cities.layer";
import {stadiaParksVectorTileLayer} from "../assets/utils/layers/vector-tile-layers/stadia-parks.layer";
import {tileIndexGradientLayer} from "../assets/utils/layers/webgl-tile-layers/tile-index-gradient.layer";
import {Layer} from "../interfaces/layer.interface";
import {USER_ROLES} from "./user-roles.constant";

export const LAYER_TYPES: { [key: string]: string } = {
    IMAGE_LAYER: "IMAGE_LAYER",
    TILE_LAYER: "TILE_LAYER",
    WEBGL_TILE_LAYER: "WEBGL_TILE_LAYER",
    HEATMAP: "HEATMAP",
    VECTOR_IMAGE_LAYER: "VECTOR_IMAGE_LAYER",
    VECTOR_TILE_LAYER: "VECTOR_TILE_LAYER",
    VECTOR_LAYER: "VECTOR_LAYER",
    GRATICULE: "GRATICULE",
};

export const LAYERS_MAPPER: Map<string, Layer> = new Map<string, Layer>([
    [
        'GRATICULE_LABELS',
        {
            baseLayer: graticuleLabelsLayer,
            name: 'Graticule labels',
            group: LAYER_TYPES.GRATICULE,
            roles: [USER_ROLES.USER],
        }
    ],
    [
        'EARTHQUAKES',
        {
            baseLayer: earthquakesLayer,
            name: 'Earthquakes',
            group: LAYER_TYPES.HEATMAP,
            roles: [USER_ROLES.GUEST],
        }
    ],
    [
        'OSM_ROADS',
        {
            baseLayer: osmRoads,
            name: 'OSM roads',
            group: LAYER_TYPES.IMAGE_LAYER,
            roles: [],
        }
    ],
    [
        'OSM_BASE',
        {
            baseLayer: osmBase,
            name: 'OSM',
            group: LAYER_TYPES.TILE_LAYER,
            roles: [USER_ROLES.USER, USER_ROLES.GUEST],
        }
    ],
    [
        'OSM_XYZ',
        {
            baseLayer: osmXyz,
            name: 'OSM xyz',
            group: LAYER_TYPES.TILE_LAYER,
            roles: [USER_ROLES.USER, USER_ROLES.GUEST],
        }
    ],
    [
        'EUROPEAN_CITIES_VECTOR_IMAGE_LAYER',
        {
            baseLayer: europeanCitiesLayer,
            name: 'European cities vector image',
            group: LAYER_TYPES.VECTOR_IMAGE_LAYER,
            roles: [USER_ROLES.USER, USER_ROLES.GUEST],
        }
    ],
    [
        'COUNTRIES_VECTOR_LAYER',
        {
            baseLayer: countriesVectorLayer,
            name: 'Countries',
            group: LAYER_TYPES.VECTOR_LAYER,
            roles: [USER_ROLES.USER, USER_ROLES.GUEST],
        }
    ],
    [
        'EUROPEAN_CITIES_VECTOR_LAYER',
        {
            baseLayer: europeanCitiesVectorLayer,
            name: 'European cities vector',
            group: LAYER_TYPES.VECTOR_LAYER,
            roles: [USER_ROLES.USER, USER_ROLES.GUEST],
        }
    ],
    [
        'STADIA_PARKS',
        {
            baseLayer: stadiaParksVectorTileLayer,
            name: 'Strada parks',
            group: LAYER_TYPES.VECTOR_TILE_LAYER,
            roles: [USER_ROLES.USER, USER_ROLES.GUEST],
        }
    ],
    [
        'TILE_INDEX_GRADIENT',
        {
            baseLayer: tileIndexGradientLayer,
            name: 'Tile index gradient',
            group: LAYER_TYPES.WEBGL_TILE_LAYER,
            roles: [USER_ROLES.USER],
        }
    ],
]);