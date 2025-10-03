/* Author: Sotiris Konstantis */

import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export const CircleComponent = ({ center }) => {
  const map = useMap();

  React.useEffect(() => {
    map.eachLayer(layer => {
        if (layer instanceof L.Circle) {
          map.removeLayer(layer);
        }
      });

    if (center && center.lat && center.lng) {

      const { lat, lng } = center;

      L.circle([lat, lng], {
        color: 'black',
        fillColor: 'white',
        weight: 1,
        fillOpacity: 1,
        radius: 5000,
        interactive: false
      }).addTo(map);
    }
  }, [center, map]);

  return null;
};