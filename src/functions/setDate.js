/* Author: Sotiris Konstantis */

import { useEffect, useState } from "react";
import { changeLayerColor } from "./changeLayerColor"; 
import dataFile from "../constants/dataFile";
import { dataLoadedPromise } from "../variables/dataLoaded";
import layers from "../constants/layers"

export const useSetDate = (date) => {
  const [seasonDataMap, setSeasonDataMap] = useState(null);
  let seasonExists = true;

  useEffect(() => {
    const loadData = async () => {
      const loaded = await dataLoadedPromise;
      if (loaded) {
        const year = date.split("-")[0];
        const filePath = `${dataFile}season${year}.json`;

        try {
          const response = await fetch(filePath);
          const data = await response.json();
          const dataMap = data.reduce((acc, item) => {
            acc[item.date] = item;
            return acc;
          }, {});

          setSeasonDataMap(dataMap);
        } catch (error) {
          //console.error("Error fetching season JSON data:", error);
          seasonExists = false;
        }
      }
    };
    
    loadData();
  }, [date]);

  useEffect(() => {
    if (seasonDataMap) {
      const entries = seasonDataMap[date]?.entries || [];
      if(seasonExists && entries.length)
        entries.forEach(({ id, risk }) => {
          changeLayerColor(id, risk);
        });
      else
        console.log(layers.forEach((layer) => changeLayerColor(layer.feature.properties.CODE, 5)));
    }
  }, [seasonDataMap, date]);
};
