/* Author: Sotiris Konstantis */

import layers from "../constants/layers";
import colors from "../constants/colors";
import levels from "../constants/levels";
import locations from "../constants/locations";
import types from "../constants/types";
import L from 'leaflet';

export const onEachGreeceFeature = (feature, layer) => {
  layers.push(layer);

  layer.on({
    mouseover: (e) => {
      e.target.setStyle({
        fillOpacity: 0.5,
      });
    },
    mouseout: (e) => {
      e.target.setStyle({
        fillOpacity: 1,
      });
    },
    click: (e) => {
      const type = types.items.get(locations.items.get(feature.properties.CODE).type);
      const name = locations.items.get(feature.properties.CODE).name;
      const danger = levels.items.get(colors.getColorId(e.target.options.fillColor));

      const popupContent = `
        <strong>${type}: ${name}</strong><br>
        <strong>Κίνδυνος: ${danger}</strong>
      `;

      L.popup()
        .setLatLng(e.latlng)
        .setContent(popupContent)
        .openOn(e.target._map);
    },
  });
};
