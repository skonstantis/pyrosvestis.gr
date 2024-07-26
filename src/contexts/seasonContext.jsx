/* Author: Sotiris Konstantis */

import React, { createContext, useState, useContext } from 'react';
import dataFile from '../constants/dataFile';
import { getDataLoadedPromise } from '../variables/dataLoaded';

const SeasonContext = createContext();

export const SeasonProvider = ({ children }) => {
  const [seasonDataMap, setSeasonDataMap] = useState(null);
  const [seasonExists, setSeasonExists] = useState(true);

  const loadData = async (date) => {
    try {
      const loaded = await getDataLoadedPromise();
      if (loaded) {
        const year = date.split("-")[0];
        const filePath = `${dataFile}season${year}.json`;

        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const dataMap = data.reduce((acc, item) => {
          acc[item.date] = item;
          return acc;
        }, {});

        setSeasonDataMap(dataMap);
      }
    } catch (error) {
      setSeasonExists(false);
    }
  };

  const value = {
    seasonDataMap,
    seasonExists,
    loadData,
  };

  return (
    <SeasonContext.Provider value={value}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => useContext(SeasonContext);