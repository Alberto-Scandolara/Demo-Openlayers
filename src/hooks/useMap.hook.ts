import {use} from "react";

// Interfaces
import {MapContextProps} from "../interfaces/map.interface";

// Stores
import {MapContext} from "../store/map.store";

export const useMap: () => MapContextProps = (): MapContextProps => {
    const context: MapContextProps | undefined = use(MapContext);
    if (!context) {
        throw new Error("useMapContext must be used within a MapProvider");
    }
    return context;
};