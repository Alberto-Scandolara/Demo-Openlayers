import XYZ from "ol/source/XYZ";

const osmXyzSource = new XYZ({
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
});

export { osmXyzSource };