import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Text from "ol/style/Text";

const citiesBlueStyle: (feature: any) => Style = (feature: any): Style => new Style({
    image: new CircleStyle({
        radius: 5,
        fill: new Fill({ color: 'rgba(0, 123, 255, 0.7)' }),
        stroke: new Stroke({ color: '#004085', width: 1 }),
    }),
    text: new Text({
        text: feature.get('name'),
        offsetY: -15,
        fill: new Fill({ color: '#004085' }),
        stroke: new Stroke({ color: '#fff', width: 3 }),
        font: 'bold 14px Arial',
    }),
});

export { citiesBlueStyle };