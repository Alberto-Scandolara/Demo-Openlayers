import Map from 'ol/Map';
import {IMapContext, MapInitConfig} from "../interfaces/map.interface";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import View from "ol/View";
import {fromLonLat} from "ol/proj";
import BaseLayer from 'ol/layer/Base';

export class OpenLayersMapAdapter implements IMapContext {
    private _map!: Map;

    get map(): Map {
        return this._map;
    }

    public init(config: Omit<Partial<MapInitConfig>, 'target'> & { targetId: string }): void {
        const {center, zoom, targetId} = config;

        const target: HTMLElement | null = document.getElementById(targetId);
        if(!target) {
            throw new Error("target element does not exist");
        }

        this._map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: target,
            view: new View({
                center: fromLonLat(center as [number, number]),
                zoom: zoom,
            }),
        });
    }

    public setCenter(center: [number, number]): void {
        this._map.getView().setCenter(center);
    }

    public getCenter(): [number, number] {
        return this._map.getView().getCenter() as [number, number];
    }

    public setZoom(zoom: number): void {debugger
        this._map.getView().setZoom(zoom);
    }

    public getZoom(): number {
        return this._map.getView().getZoom()!;
    }

    public addLayer(layer: BaseLayer): void {
        this._map.addLayer(layer);
    }

    public addLayers(layers: BaseLayer[]): void {
        layers.forEach((layer: BaseLayer): void => this.addLayer(layer));
    }

    public removeLayer(id: string): void {
        const layer: BaseLayer | undefined = this._getLayer(id);
        if (layer) {
            this._map.removeLayer(layer);
        }
    }

    public removeLayers(ids: string[]): void {
        const layers: BaseLayer[] = this._getLayers(ids);
        layers.forEach((layer: BaseLayer): void => {
            this._map.removeLayer(layer);
        });
    }

    public destroy(): void {
        this._map.setTarget(undefined);
    }

    private _getLayer(id: string): BaseLayer | undefined {
        return this._map
            .getLayers()
            .getArray()
            .find((layer: BaseLayer): boolean => layer.get('id') === id);
    }

    private _getLayers(ids: string[]): BaseLayer[] {
        const layers: BaseLayer[] = this._map.getLayers().getArray();
        return layers.filter((layer: BaseLayer): boolean => ids.includes(layer.get('id')));
    }
}
