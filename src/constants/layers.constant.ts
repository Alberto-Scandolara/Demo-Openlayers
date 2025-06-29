import {osmRoads} from "../assets/utils/layers/image-layers/osm-roads.layer";
import {graticuleLabelsLayer} from "../assets/utils/layers/graticules/graticule-labels.layer";
import {earthquakesLayer} from "../assets/utils/layers/heatmaps/earthquakes.layer";
import {osmBase} from "../assets/utils/layers/tile-layers/osm-base.layer";
import {osmXyz} from "../assets/utils/layers/tile-layers/osm-xyz.layer";
import {citiesLayer} from "../assets/utils/layers/vector-image-layers/cities.layer";
import {countriesVectorLayer} from "../assets/utils/layers/vector-layers/countries.layer";
import {citiesLayer as citiesVectorLayer} from "../assets/utils/layers/vector-layers/cities.layer";
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
            type: LAYER_TYPES.GRATICULE,
            roles: [
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
    [
        'EARTHQUAKES',
        {
            baseLayer: earthquakesLayer,
            name: 'Earthquakes',
            type: LAYER_TYPES.HEATMAP,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
    [
        'OSM_ROADS',
        {
            baseLayer: osmRoads,
            name: 'OSM roads',
            type: LAYER_TYPES.IMAGE_LAYER,
            roles: [
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
    [
        'OSM_BASE',
        {
            baseLayer: osmBase,
            name: 'OSM',
            type: LAYER_TYPES.TILE_LAYER,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: true,
            visible: false,
        }
    ],
    [
        'OSM_XYZ',
        {
            baseLayer: osmXyz,
            name: 'OSM xyz',
            type: LAYER_TYPES.TILE_LAYER,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: true,
            visible: false,
        }
    ],
    [
        'CITIES_VECTOR_IMAGE_LAYER',
        {
            baseLayer: citiesLayer,
            name: 'Cities vector image',
            type: LAYER_TYPES.VECTOR_IMAGE_LAYER,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
    [
        'COUNTRIES_VECTOR_LAYER',
        {
            baseLayer: countriesVectorLayer,
            name: 'Countries',
            type: LAYER_TYPES.VECTOR_LAYER,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
    [
        'CITIES_VECTOR_LAYER',
        {
            baseLayer: citiesVectorLayer,
            name: 'Cities vector',
            type: LAYER_TYPES.VECTOR_LAYER,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
    [
        'STADIA_PARKS',
        {
            baseLayer: stadiaParksVectorTileLayer,
            name: 'Strada parks',
            type: LAYER_TYPES.VECTOR_TILE_LAYER,
            roles: [
                USER_ROLES.ADMINISTRATOR,
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: true,
            visible: false,
        }
    ],
    [
        'TILE_INDEX_GRADIENT',
        {
            baseLayer: tileIndexGradientLayer,
            name: 'Tile index gradient',
            type: LAYER_TYPES.WEBGL_TILE_LAYER,
            roles: [
                USER_ROLES.CONTROL_ROOM_OPERATOR,
                USER_ROLES.DOMAIN_USER,
                USER_ROLES.MAP_VIEWER,
                USER_ROLES.MAP_OPERATOR,
                USER_ROLES.MAP_MASTER,
            ],
            base: false,
            visible: true,
        }
    ],
]);