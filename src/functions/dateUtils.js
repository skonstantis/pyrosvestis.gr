/* Author: Sotiris Konstantis */

import { useEffect, useState } from "react";
import { changeLayerColor } from "./changeLayerColor";
import dataFile from "../constants/dataFile";
import { dataLoadedPromise } from "../variables/dataLoaded";
import { calendarVisible, setCalendarVisible } from "../variables/calendarVisible";
import layers from "../constants/layers";

export const changeDate = (prevDate, direction) => {
  const newDate = new Date(prevDate);
  newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
  return newDate.toISOString().split("T")[0];
};

export const getInterval = (count) => {
  if (count < 1) return 300;
  if (count < 11) return 200;
  if (count < 41) return 100;
  return 50;
};

export const formatDateInGreek = (dateString) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    locale: "el-GR",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("el-GR", options);
};

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
      if (seasonExists && entries.length)
        entries.forEach(({ id, risk }) => {
          changeLayerColor(id, risk);
        });
      else
        layers.forEach((layer) =>
          changeLayerColor(layer.feature.properties.CODE, 5)
        );
    }
  }, [seasonDataMap, date]);
};

export const handleDateClick = () => {
  if (calendarVisible) {
    setCalendarVisible(false);
    alert("notVisible");
  } else {
    setCalendarVisible(true);
    alert("visible");
  }
};
