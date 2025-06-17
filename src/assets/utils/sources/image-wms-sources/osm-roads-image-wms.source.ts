import {ImageWMS} from "ol/source";

const osmRoadsImageWmsSource: ImageWMS = new ImageWMS({
    url: 'https://ows.terrestris.de/osm/service?',
    params: {LAYERS: 'OSM-Overlay-WMS', FORMAT: 'image/png'},
    ratio: 1,
    serverType: 'geoserver',
    attributions: [
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
        'Tiles courtesy of <a href="https://www.terrestris.de/" target="_blank" rel="noopener noreferrer">terrestris.de</a>',
    ],

});

export { osmRoadsImageWmsSource };