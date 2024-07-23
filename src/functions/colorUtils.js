/* Author: Sotiris Konstantis */

import layers from "../constants/layers";
import colors from "../constants/colors";
import { useSeason } from "../contexts/seasonContext.jsx";

export const changeLayerColor = (code, level) => {
  const color = colors.items.get(level);

  layers.forEach((layer) => {
    if (layer.feature.properties.CODE == code)
      layer.setStyle({
        fillColor: color,
      });
  });
};

export const useMaxColor = (date) => {
  const { seasonDataMap } = useSeason();

  return seasonDataMap ? colors.items.get(seasonDataMap[date]?.maxRisk) : null;
};
