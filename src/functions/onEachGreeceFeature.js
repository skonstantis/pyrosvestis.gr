/* Author: Sotiris Konstantis */

import layers from "../constants/layers"

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
      alert(`Clicked on ${feature.properties.CODE}`);
    },
  });
};