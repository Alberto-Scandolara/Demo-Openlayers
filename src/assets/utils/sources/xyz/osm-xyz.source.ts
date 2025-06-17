import XYZ from "ol/source/XYZ";

const osmXyzSource = new XYZ({
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attributions: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

export { osmXyzSource };