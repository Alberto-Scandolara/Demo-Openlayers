import {createContext, FC, ReactNode, useContext, useState} from 'react';
import {MapAdapter} from "../interfaces/map.interface";

type MapContextType = {
    adapter: MapAdapter | null;
    setAdapter: (adapter: MapAdapter) => void;
};

const MapContext = createContext<MapContextType | null>(null);

export const useMapContext = () => {
    const ctx = useContext(MapContext);
    if (!ctx) throw new Error('MapContext not available');
    return ctx;
};

export const MapProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [adapter, setAdapter] = useState<MapAdapter | null>(null);

    return (
        <MapContext.Provider value={{ adapter, setAdapter }}>
            {children}
        </MapContext.Provider>
    );
};