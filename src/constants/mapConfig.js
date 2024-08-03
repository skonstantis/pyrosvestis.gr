/* Author: Sotiris Konstantis */

import { isMobileDevice } from "../functions/isMobileDevice";
import initalFillColor from "./initialFillColor";

export const greeceJSONPath = "../../assets/dasarcheia-final.geojson";

export const europeJSONPath = "../../assets/europe.geojson";

export const center = isMobileDevice() ? [38.3, 24.0] : [38.4, 24.8];

export const zoom = isMobileDevice() ? 5.8 : 6.5;

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
  fillColor: initalFillColor,
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

export const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'grey',
  zIndex: 10000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '24px'
};