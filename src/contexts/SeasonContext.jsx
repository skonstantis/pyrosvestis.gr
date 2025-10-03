/* Author: Sotiris Konstantis */

import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import dataFile from '../constants/dataFile';
import { getDataLoadedPromise } from '../variables/dataLoaded';
import moment from "moment-timezone";

const SeasonContext = createContext();

export const SeasonProvider = ({ children }) => {
  const [seasonDataMap, setSeasonDataMap] = useState(null);
  const [seasonExists, setSeasonExists] = useState(true);
  const [todayData, setTodayData] = useState(null);
  const [tomorrowData, setTomorrowData] = useState(null);
  const [needsRefresh, setNeedsRefresh] = useState(false);

  const fetchSeasonData = async (date) => {
    const year = date.split("-")[0];
    const filePath = `${dataFile}season${year}.json`;
    try{
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.reduce((acc, item) => {
        acc[item.date] = item;
        return acc;
      }, {});
    }
    catch(e)
    {
    }
  };

  const loadData = useCallback(async (date) => {
    try {
      const loaded = await getDataLoadedPromise();
      if (loaded) {
        const dataMap = await fetchSeasonData(date);
        setSeasonDataMap(dataMap);
      }
    } catch (error) {
      setSeasonExists(false);
    }
  }, []);

  const loadTodayData = useCallback(async () => {
  const today = moment().tz("Europe/Athens").format("YYYY-MM-DD");
  const tomorrow = moment().tz("Europe/Athens").add(1, "days").format("YYYY-MM-DD");
    try {
      const todayMap = await fetchSeasonData(today);
      const tomorrowMap = await fetchSeasonData(tomorrow);
      setTodayData(todayMap[today]);
      setTomorrowData(tomorrowMap[tomorrow]);

      if (tomorrowMap[tomorrow]?.maxRisk === -1) {
        const intervalId = setInterval(async () => {
          try {
            const newTomorrowMap = await fetchSeasonData(tomorrow);
            setTomorrowData(newTomorrowMap[tomorrow]);
            if (newTomorrowMap[tomorrow]?.maxRisk !== -1) {
              clearInterval(intervalId);
              setNeedsRefresh(true);
            }
          } catch (error) {
            console.error("Error refreshing tomorrow's data", error);
          }
        }, 1000); 

        return () => clearInterval(intervalId);
      }
    } catch (error) {
      console.error("Error loading today's or tomorrow's data", error);
    }
  }, []);

  useEffect(() => {
    loadTodayData();
  }, [loadTodayData]);

  const value = {
    seasonDataMap,
    seasonExists,
    loadData,
    todayData,
    tomorrowData,
    needsRefresh,
    setNeedsRefresh
  };

  return (
    <SeasonContext.Provider value={value}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => useContext(SeasonContext);