/**
 * A list of commonly used spatial reference systems (SRS), mapped by readable identifiers.
 * These projections can be used in mapping libraries such as OpenLayers or Leaflet.
 *
 * EPSG codes are maintained by the EPSG registry and define coordinate reference systems.
 */
export const FEATURES_PROJECTION: { [key: string]: string } = {
    /**
     * Web Mercator projection (spherical), used by most web maps (e.g., Google Maps, OSM).
     * Units: meters.
     */
    EPSG_3857: "EPSG:3857",

    /**
     * WGS 84 latitude/longitude projection.
     * Units: degrees.
     * Used for raw GeoJSON and GPS coordinates.
     */
    EPSG_4326: "EPSG:4326",

    /**
     * WGS 84 / UTM zone 33N. Common in parts of Europe (e.g., Italy).
     * Units: meters.
     */
    EPSG_32633: "EPSG:32633",

    /**
     * WGS 84 / UTM zone 32N. Used in central Europe (e.g., Germany, Switzerland).
     * Units: meters.
     */
    EPSG_32632: "EPSG:32632",

    /**
     * NAD83 / California (ftUS). Used in US state plane coordinate systems.
     * Units: US feet.
     */
    EPSG_2230: "EPSG:2230",

    /**
     * Pseudo-Mercator (same as EPSG:3857) but sometimes used with different libraries.
     */
    EPSG_900913: "EPSG:900913",

    /**
     * Popular pseudo-EPSG used internally by ESRI. Equivalent to EPSG:3857.
     */
    ESRI_102100: "ESRI:102100",

    /**
     * World Equidistant Cylindrical (Plate Carrée).
     * Straightforward mapping where longitude and latitude are treated as x/y.
     */
    EPSG_32662: "EPSG:32662",

    /**
     * Lambert Conformal Conic used in France.
     * This is one of several Lambert projections used in national mapping.
     */
    EPSG_2154: "EPSG:2154",

    /**
     * British National Grid.
     * Used by Ordnance Survey and mapping in the UK.
     */
    EPSG_27700: "EPSG:27700"
};
