import BaseLayer from "ol/layer/Base";
import {FC, ReactElement} from "react";

// Css
import './layer-list.component.css';

interface LayerListComponentProps {
    title: string;
    layers: { name: string; baseLayer: BaseLayer }[];
    type: 'radio' | 'checkbox';
    name: string;
    onToggle: (layerName: string) => void;
};

const LayerList: FC<LayerListComponentProps> = ({ title, layers, type, name, onToggle }: LayerListComponentProps): ReactElement => {
    return (
        <fieldset className="layers-group">
            <legend>{title}</legend>
            <ul className="layers-group-list">
                {layers.map(layer => (
                    <li key={layer.name}>
                        <label>
                            <input
                                type={type}
                                name={name}
                                value={layer.name}
                                checked={layer.baseLayer.getVisible()}
                                onChange={() => onToggle(layer.name)}
                            />
                            {layer.name}
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
    );
};

export { LayerList };