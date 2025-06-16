import {createContext, useContext, useEffect, useState, ReactNode, Context} from "react";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import Map from "ol/Map";

// Assets
import mapConfigJson from '../assets/jsons/db/map-config.json';

// Constants
import { LAYERS_MAPPER } from "../constants/layers.constant";

// Interface
import { Layer } from "../interfaces/layer.interface";
import { IUserContext } from "../interfaces/user.interface";
import { MapContextProps } from "../interfaces/map.interface";

// Store
import { UserContext } from "./user.store";

const MapContext: Context<MapContextProps | undefined> =
    createContext<MapContextProps | undefined>(undefined);

const MapProvider = ({ children }: { children: ReactNode }) => {
    const { user } = useContext(UserContext) as IUserContext;
    const { center, target, zoom } = mapConfigJson;

    const [map, setMap] = useState<Map | null>(null);
    const [baseLayers, setBaseLayers] = useState<Layer[]>([]);
    const [overlayLayers, setOverlayLayers] = useState<Layer[]>([]);

    useEffect(() => {
        const mapInstance = new Map({
            target,
            view: new View({
                center: fromLonLat(center),
                zoom,
            }),
        });

        const layers: Layer[] = Array.from(
            LAYERS_MAPPER.values()
                .filter((layer: Layer) => layer.roles.includes(user!.role))
                .map((layer: Layer) => {
                    const isVisible = !layer.base && layer.visible;
                    layer.baseLayer.setProperties({ ...layer, visible: isVisible });
                    layer.baseLayer.setVisible(isVisible);
                    return layer;
                })
        );

        const base: Layer[] = layers.filter((layer: Layer) => layer.base);
        const overlays: Layer[] = layers.filter((layer: Layer) => !layer.base);

        [...base, ...overlays].forEach(layer => {
            mapInstance.addLayer(layer.baseLayer);
        });

        // Ensure one base is visible
        if (base.length > 0) {
            base[0].baseLayer.setVisible(true);
            base[0].visible = true;
        }

        setBaseLayers(base);
        setOverlayLayers(overlays);
        setMap(mapInstance);

        return () => {
            mapInstance.setTarget(undefined);
        };
    }, [user]);

    const handleBaseLayerChange: (selectedName: string) => void = (selectedName: string): void => {
        baseLayers.forEach((layer: Layer): void => {
            layer.baseLayer.setVisible(layer.name === selectedName);
        });
        setBaseLayers([...baseLayers]);
    };

    const toggleOverlay: (name: string) => void = (name: string): void => {
        overlayLayers.forEach((layer: Layer): void => {
            if (layer.name === name) {
                const visible: boolean = layer.baseLayer.getVisible();
                layer.baseLayer.setVisible(!visible);
            }
        });
        setOverlayLayers([...overlayLayers]);
    };

    const setZoom: (zoom: number) => void = (zoom: number): void => {
        map?.getView().setZoom(zoom);
    }

    const contextValue: MapContextProps = {
        map, baseLayers, overlayLayers, handleBaseLayerChange, toggleOverlay, setZoom
    };

    return (
        <MapContext.Provider value={contextValue}>
            {children}
        </MapContext.Provider>
    );
};

export { MapContext, MapProvider };