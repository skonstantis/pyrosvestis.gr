/* Author: Sotiris Konstantis */

import layers from "../constants/layers";
import colors from "../constants/colors";
import { useSeason } from "../contexts/SeasonContext.jsx";
import { useEffect } from "react";

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
  const { seasonDataMap, seasonExists, loadData } = useSeason();

  useEffect(() => {
    loadData(date);
  }, [date, loadData]);

  return seasonDataMap
    ? colors.items.get(seasonDataMap[date]?.maxRisk ?? -1)
    : colors.items.get(-1);
};

export const useTodayMaxColor = () => {
  const { todayData } = useSeason();
  return todayData
    ? colors.items.get(todayData.maxRisk ?? -1)
    : colors.items.get(-1);
};

export const useTomorrowMaxColor = () => {
  const { tomorrowData } = useSeason();
  return tomorrowData
    ? colors.items.get(tomorrowData.maxRisk ?? -1)
    : colors.items.get(-1);
};
