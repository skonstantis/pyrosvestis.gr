/* Author: Sotiris Konstantis */

import { useEffect } from "react";
import moment from "moment";
import { changeLayerColor } from "./colorUtils";
import layers from "../constants/layers";
import { useSeason } from "../contexts/seasonContext.jsx";

export const handleClickOutside = (ref, setCalendarVisible) => {
  return (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setCalendarVisible(false);
    }
  };
};

export const handleDateClick = (calendarVisible, setCalendarVisible) => {
  setCalendarVisible(!calendarVisible);
};

export const onChange = (newDate, setDate, setCalendarVisible) => {
  const formattedDate = moment(newDate).format("YYYY-MM-DD");
  setDate(formattedDate);
  setCalendarVisible(false);
};

export const changeDate = (prevDate, direction) => {
  return moment(prevDate)
    .add(direction === "next" ? 1 : -1, "days")
    .format("YYYY-MM-DD");
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
  const { seasonDataMap, seasonExists, loadData } = useSeason();

  useEffect(() => {
    loadData(date);
  }, [date, loadData]);

  useEffect(() => {
    if (seasonDataMap) {
      const entries = seasonDataMap[date]?.entries || [];
      if (seasonExists && entries.length) {
        entries.forEach(({ id, risk }) => {
          changeLayerColor(id, risk);
        });
      } else {
        layers.forEach((layer) =>
          changeLayerColor(layer.feature.properties.CODE, -1)
        );
      }
    }
  }, [seasonDataMap, date, seasonExists]);
};