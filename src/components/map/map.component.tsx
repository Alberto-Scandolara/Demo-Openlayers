import { useEffect } from "react";

// Css
import './map.component.css';

// Components
import { LayerControls } from "../layer-controls/layer-controls.component";

// Hooks
import { useMap } from "../../hooks/useMap.hook";

function MapView() {
    const { map } = useMap();

    useEffect(() => {
        if (map) {
            map.setTarget("map");
            return () => map.setTarget(undefined);
        }
    }, [map]);

    return (
        <section className="map-wrapper">
            <div id="map" className="map-container" />
            <LayerControls></LayerControls>
        </section>
    );
}

export { MapView };