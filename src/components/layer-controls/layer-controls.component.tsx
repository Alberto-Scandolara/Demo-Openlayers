import {ReactElement} from "react";

// Components
import {LayerList} from "../layer-list.component.ts/layer-list.component";

// Css
import './layer-controls.component.scss';

// Hooks
import {useMap} from "../../hooks/useMap.hook";

function LayerControls(): ReactElement {
    const { baseLayers, overlayLayers, handleBaseLayerChange, toggleOverlay } = useMap();

    return (
        <form id="layer-controls">
            <LayerList
                title="Base maps"
                layers={baseLayers}
                type="radio"
                name="baseLayer"
                onToggle={handleBaseLayerChange}
            />

            <LayerList
                title="Overlays"
                layers={overlayLayers}
                type="checkbox"
                name="overlayLayers"
                onToggle={toggleOverlay}
            />
        </form>
    );
}

export { LayerControls };
