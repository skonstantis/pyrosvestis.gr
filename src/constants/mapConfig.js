/* Author: Sotiris Konstantis */

import {isMobileDevice} from "../functions/isMobileDevice"

export const greeceJSONPath = "../../assets/dasarcheia-final.geojson";

export const europeJSONPath = "../../assets/europe.geojson";

export const center = [38.4, 24];

export const zoom = isMobileDevice() ? 5.8 : 6.6;

export const minZoom = zoom;

export const maxZoom = 18;

export const zoomSnap = 0.7;

export const maxBounds = [
  [31.80495018157633, 11.295994098331422],
  [44.71497750316861, 38.10433099539361],
];

export const maxBoundsViscosity = 1.0;

export const style = { height: "100vh", width: "100%", background: "#B0B0B0" };

export const greeceStyle = {
  color: "#000000",
  weight: 1,
  opacity: 0.5,
  fillColor: "#505050",
  fillOpacity: 1,
};

export const europeStyle = {
  color: "#000000",
  weight: 0.3,
  opacity: 0.5,
  fillColor: "#4A4F77",
  fillOpacity: 0.1,
  stroke: "TRUE",
};
