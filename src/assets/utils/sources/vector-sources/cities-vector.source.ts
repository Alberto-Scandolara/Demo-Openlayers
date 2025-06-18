import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import { fromLonLat } from 'ol/proj';
import cities from 'cities.json' with { type: 'json' }

const features: Feature<Point>[] = (cities as Array<any>)
    .map((city: { name: string, lat: number, lng: number }): Feature<Point> => {
        const feature = new Feature(new Point(fromLonLat([city.lng, city.lat])));
        feature.set('name', city.name);

        return feature;
    });

const citiesVectorSource: VectorSource = new VectorSource({
    features,
    attributions: [
        '<a href="https://github.com/lutangar/cities.json" target="_blank">Lutangar\'s github</a>',
    ]
});

export { citiesVectorSource };