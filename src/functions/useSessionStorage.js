/* Author: Sotiris Konstantis */

import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { isMobileDevice } from './isMobileDevice';

export const useSessionStorage = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const storedDate = sessionStorage.getItem('selectedDate');
    return storedDate ? storedDate : moment().tz("Europe/Athens").format("YYYY-MM-DD");
  });

  const [isSelected, setIsSelected] = useState(() => {
    const storedIsSelected = sessionStorage.getItem('isSelected');
    return storedIsSelected === 'true';
  });

  const [selectedId, setSelectedId] = useState(() => {
    const storedId = sessionStorage.getItem('selectedId');
    return storedId ? JSON.parse(storedId) : null;
  });

  useEffect(() => {
    sessionStorage.setItem('selectedDate', selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    sessionStorage.setItem('selectedId', JSON.stringify(selectedId));
  }, [selectedId]);

  useEffect(() => {
    sessionStorage.setItem('isSelected', isSelected.toString());
    if (!isSelected) {
      setSelectedId(null);
      setSelectedLongitude(null);
      setSelectedLatitude(null);
      sessionStorage.setItem('selectedId', JSON.stringify(null));
    }
  }, [isSelected]);

  const [selectedLongitude, setSelectedLongitude] = useState(() => {
    const storedSelectedLongitude = sessionStorage.getItem('selectedLongitude');
    return storedSelectedLongitude != "null" ? parseFloat(storedSelectedLongitude) : null;
  });

  useEffect(() => {
    sessionStorage.setItem('selectedLongitude', selectedLongitude);
  }, [selectedLongitude]);

  const [selectedLatitude, setSelectedLatitude] = useState(() => {
    const storedSelectedLatitude = sessionStorage.getItem('selectedLatitude');
    return storedSelectedLatitude != "null" ? parseFloat(storedSelectedLatitude) : null;
  });

  useEffect(() => {
    sessionStorage.setItem('selectedLatitude', selectedLatitude);
  }, [selectedLatitude]);

  const [mapCenter, setMapCenter] = useState(() => {
    const storedMapCenter = sessionStorage.getItem('mapCenter');
    return storedMapCenter ? JSON.parse(storedMapCenter) : (isMobileDevice() ? [37.6, 24.0] : [38.4, 24.8]);
  });

  useEffect(() => {
    sessionStorage.setItem('mapCenter', "[" + mapCenter + "]");
  }, [mapCenter]);

  const [mapZoom, setMapZoom] = useState(() => {
    const storedMapZoom = sessionStorage.getItem('mapZoom');
    return storedMapZoom ? JSON.parse(storedMapZoom) : (isMobileDevice() ? 5.8 : 6.5);
  });

  useEffect(() => {
    sessionStorage.setItem('mapZoom', mapZoom);
  }, [mapZoom]);

  const [isCitiesSettingEnabled, setIsCitiesSettingEnabled] = useState(() => {
    const isCitiesSettingEnabled = localStorage.getItem('isCitiesSettingEnabled');
    return isCitiesSettingEnabled === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isCitiesSettingEnabled', isCitiesSettingEnabled);
  }, [isCitiesSettingEnabled]);

  return { selectedDate, setSelectedDate, isSelected, setIsSelected, selectedId, setSelectedId, 
    selectedLongitude, setSelectedLongitude, selectedLatitude, setSelectedLatitude, mapCenter, 
    setMapCenter, mapZoom, setMapZoom, isCitiesSettingEnabled, setIsCitiesSettingEnabled };
};
