import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

const citiesRedStyle: (feature: any) => Style = (): Style => new Style({
    image: new CircleStyle({
        radius: 5,
        fill: new Fill({ color: 'rgba(255, 0, 0, 0.6)' }),
        stroke: new Stroke({ color: '#900', width: 1 }),
    }),
    // no text
});

export { citiesRedStyle };