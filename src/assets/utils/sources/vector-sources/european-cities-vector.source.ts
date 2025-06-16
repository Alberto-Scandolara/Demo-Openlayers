import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Text from 'ol/style/Text';
import { fromLonLat } from 'ol/proj';

const cities = [
    { name: 'London, UK', coords: [-0.1276, 51.5074], population: 9.0 },
    { name: 'Paris, France', coords: [2.3522, 48.8566], population: 11.0 },
    { name: 'Berlin, Germany', coords: [13.405, 52.52], population: 3.6 },
    { name: 'Madrid, Spain', coords: [-3.7038, 40.4168], population: 3.2 },
    { name: 'Rome, Italy', coords: [12.4964, 41.9028], population: 2.8 },
    { name: 'Vienna, Austria', coords: [16.3738, 48.2082], population: 1.9 },
    { name: 'Brussels, Belgium', coords: [4.3517, 50.8503], population: 1.2 },
    { name: 'Sofia, Bulgaria', coords: [23.3219, 42.6977], population: 1.3 },
    { name: 'Zagreb, Croatia', coords: [15.9819, 45.815], population: 0.8 },
    { name: 'Nicosia, Cyprus', coords: [33.3823, 35.1856], population: 0.2 },
    { name: 'Prague, Czech Republic', coords: [14.4378, 50.0755], population: 1.3 },
    { name: 'Copenhagen, Denmark', coords: [12.5683, 55.6761], population: 0.8 },
    { name: 'Tallinn, Estonia', coords: [24.7536, 59.437], population: 0.4 },
    { name: 'Helsinki, Finland', coords: [24.941, 60.1695], population: 0.7 },
    { name: 'Athens, Greece', coords: [23.7275, 37.9838], population: 3.1 },
    { name: 'Budapest, Hungary', coords: [19.0402, 47.4979], population: 1.7 },
    { name: 'Reykjavik, Iceland', coords: [-21.8277, 64.1355], population: 0.13 },
    { name: 'Dublin, Ireland', coords: [-6.2603, 53.3498], population: 1.4 },
    { name: 'Rome, Italy', coords: [12.4964, 41.9028], population: 2.8 },
    { name: 'Riga, Latvia', coords: [24.1052, 56.9496], population: 0.6 },
    { name: 'Vilnius, Lithuania', coords: [25.2797, 54.6872], population: 0.6 },
    { name: 'Luxembourg City, Luxembourg', coords: [6.1319, 49.6117], population: 0.13 },
    { name: 'Valletta, Malta', coords: [14.5146, 35.8997], population: 0.006 },
    { name: 'Chisinau, Moldova', coords: [28.8638, 47.0105], population: 0.7 },
    { name: 'Monaco', coords: [7.4246, 43.7384], population: 0.04 },
    { name: 'Podgorica, Montenegro', coords: [19.2594, 42.4304], population: 0.2 },
    { name: 'Amsterdam, Netherlands', coords: [4.9041, 52.3676], population: 0.9 },
    { name: 'Oslo, Norway', coords: [10.7522, 59.9139], population: 0.7 },
    { name: 'Warsaw, Poland', coords: [21.0122, 52.2297], population: 1.8 },
    { name: 'Lisbon, Portugal', coords: [-9.1393, 38.7223], population: 2.8 },
    { name: 'Bucharest, Romania', coords: [26.1025, 44.4268], population: 1.8 },
    { name: 'Moscow, Russia', coords: [37.6173, 55.7558], population: 12.5 },
    { name: 'San Marino', coords: [12.4583, 43.9333], population: 0.03 },
    { name: 'Belgrade, Serbia', coords: [20.4573, 44.7866], population: 1.2 },
    { name: 'Bratislava, Slovakia', coords: [17.1077, 48.1486], population: 0.4 },
    { name: 'Ljubljana, Slovenia', coords: [14.5058, 46.0569], population: 0.3 },
    { name: 'Stockholm, Sweden', coords: [18.0686, 59.3293], population: 1.0 },
    { name: 'Bern, Switzerland', coords: [7.4474, 46.9481], population: 0.13 },
    { name: 'Kiev, Ukraine', coords: [30.5234, 50.4501], population: 2.8 },
    { name: 'Vatican City', coords: [12.4534, 41.9029], population: 0.001 },
];


// Create features with city points and a style including labels and circle radius based on population
const features = cities.map(city => {
    const feature = new Feature(new Point(fromLonLat(city.coords)));
    feature.set('name', city.name);
    feature.set('population', city.population);

    feature.setStyle(new Style({
        image: new CircleStyle({
            radius: 5 + city.population, // bigger circle for bigger cities
            fill: new Fill({ color: 'rgba(0, 123, 255, 0.7)' }),
            stroke: new Stroke({ color: '#004085', width: 1 }),
        }),
        text: new Text({
            text: city.name,
            offsetY: -15,
            fill: new Fill({ color: '#004085' }),
            stroke: new Stroke({ color: '#fff', width: 3 }),
            font: 'bold 14px Arial',
        }),
    }));

    return feature;
});

const europeanCitiesVectorSource: VectorSource = new VectorSource({
    features,
});

export { europeanCitiesVectorSource };