import Map from "ol/Map";
import {Layer} from "./layer.interface";

interface MapContextProps {
    map: Map | null;
    baseLayers: Layer[];
    overlayLayers: Layer[];
    handleBaseLayerChange: (name: string) => void;
    toggleOverlay: (name: string) => void;
    setZoom: (zoom: number) => void;
}

export { MapContextProps };

export interface MapInitConfig {
    center: [number, number];
    zoom: number;
    layers: any[];
    targetId: string;
}