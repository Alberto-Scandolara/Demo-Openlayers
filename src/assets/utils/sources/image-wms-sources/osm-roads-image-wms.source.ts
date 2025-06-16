import {ImageWMS} from "ol/source";

const osmRoadsImageWmsSource: ImageWMS = new ImageWMS({
    url: 'https://ows.terrestris.de/osm/service?',
    params: {LAYERS: 'OSM-Overlay-WMS', FORMAT: 'image/png'},
    ratio: 1,
    serverType: 'geoserver',
});

export { osmRoadsImageWmsSource };