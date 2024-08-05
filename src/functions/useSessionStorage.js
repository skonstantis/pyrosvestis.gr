import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

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

  return { selectedDate, setSelectedDate, isSelected, setIsSelected, selectedId, setSelectedId, selectedLongitude, setSelectedLongitude, selectedLatitude, setSelectedLatitude };
};
