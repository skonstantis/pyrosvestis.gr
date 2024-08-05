// CircleComponent.js
import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const CircleComponent = ({ center }) => {
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
        fillColor: 'black',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(map);
    }
  }, [center, map]);

  return null;
};

export default CircleComponent;
