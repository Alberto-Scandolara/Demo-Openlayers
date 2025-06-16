import {MapAdapter, MapInitConfig} from "../interfaces/map.interface";

export class MaplibreMapAdapter implements MapAdapter {
    map: any;

    addLayer(layer: any): void {
    }

    addLayers(layers: any[]): void {
    }

    destroy(): void {
    }

    getCenter(): [number, number] {
        return [0, 0];
    }

    getZoom(): number {
        return 0;
    }

    init(config: Partial<MapInitConfig>): void {
    }

    removeLayer(id: string): void {
    }

    removeLayers(ids: string[]): void {
    }

    setCenter(center: [number, number]): void {
    }

    setZoom(zoom: number): void {
    }
}