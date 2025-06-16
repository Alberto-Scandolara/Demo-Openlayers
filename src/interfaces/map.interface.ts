export interface MapInitConfig {
    center: [number, number];
    zoom: number;
    layers: any[];
    targetId: string;
}

export interface MapConfig {
    engine: 'maplibre' | 'openlayers';
    center: [number, number];
    zoom: number;
    targetId: string;
}

export interface IMapContext {
    map: any;
    init(config: Partial<MapInitConfig>): void;
    setCenter(center: [number, number]): void;
    getCenter(): [number, number];
    setZoom(zoom: number): void;
    getZoom(): number;
    addLayer(layer: any): void;
    addLayers(layers: any[]): void;
    removeLayer(id: string): void;
    removeLayers(ids: string[]): void;
    destroy(): void;
}

export interface MapAdapter {
    map: any;
    init(config: Partial<MapInitConfig>): void;
    setCenter(center: [number, number]): void;
    getCenter(): [number, number];
    setZoom(zoom: number): void;
    getZoom(): number;
    addLayer(layer: any): void;
    addLayers(layers: any[]): void;
    removeLayer(id: string): void;
    removeLayers(ids: string[]): void;
    destroy(): void;
}