/* Author: Sotiris Konstantis */

import layers from "../constants/layers";
import colors from "../constants/colors";

export const changeLayerColor = (code, level) => {
  const color = colors.items.get(level);

  layers.forEach((layer) => {
    if (layer.feature.properties.CODE == code)
      layer.setStyle({
        fillColor: color,
      });
  });
};