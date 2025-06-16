import {use, useEffect} from "react";
import Map from "ol/map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import {fromLonLat} from "ol/proj";
import LayerGroup from "ol/layer/Group";
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import BaseLayer from "ol/layer/Base";

// CSS
import './map.component.css';

// Assets
import mapConfigJson from '../../assets/jsons/db/map-config.json';

// Constants
import {LAYERS_MAPPER} from "../../constants/layers.constant";

// Interfaces
import {IUserContext} from "../../interfaces/user.interface";
import {Layer} from "../../interfaces/layer.interface";

// Store
import {UserContext} from "../../store/user.store";

function MapView() {
    const {user} = use(UserContext) as IUserContext;
    const {center, target, zoom } = mapConfigJson;

    useEffect(() => {
        const map: Map = new Map({
            target: target,
            view: new View({
                zoom: zoom,
                center: fromLonLat(center),
            }),
        });

        const layers: Layer[] = Array.from(
            LAYERS_MAPPER.values()
            .filter((value: Layer): boolean => value.roles.includes(user!.role))
            .map((value: Layer): Layer => {
                const properties = {
                    name: value.name,
                    group: value.group,
                    roles: value.roles,
                }
                value.baseLayer.setProperties(properties);
                return value;
            }));

        layers.forEach((value: Layer): void => map.addLayer(value.baseLayer));

        return () => {
            map.setTarget(undefined);
        };
    }, []);

    return <div id={target}/>;
}

export default MapView
