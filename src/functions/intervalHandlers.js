/* Author: Sotiris Konstantis */

import { changeDate, getInterval } from "./dateUtils";

import { tapDelay } from "../constants/tapDelay";

export const runInterval = (direction, clickCount, setDate, setIntervalId, runInterval) => {
  setDate(prevDate => changeDate(prevDate, direction));
  clickCount.current += 1;
  const interval = getInterval(clickCount.current);
  const id = setTimeout(() => runInterval(direction, clickCount, setDate, setIntervalId, runInterval), interval);
  setIntervalId(id);
};

export const handleMouseDown = (direction, clickCount, setDate, setIntervalId, runInterval) => {
  clickCount.current = 1;
  const initialInterval = getInterval(clickCount.current);
  const id = setTimeout(() => {
    if (clickCount.current !== 0) {
      runInterval(direction, clickCount, setDate, setIntervalId, runInterval);
    }
  }, tapDelay);

  setIntervalId(id);
  setDate(prevDate => changeDate(prevDate, direction));
};

export const handleMouseUp = (clickCount, intervalId, setIntervalId) => {
  clickCount.current = 0;
  if (intervalId) {
    clearTimeout(intervalId);
    setIntervalId(null);
  }
};

export const handleTouchStart = (direction, clickCount, setDate, setIntervalId, runInterval) => {
  handleMouseDown(direction, clickCount, setDate, setIntervalId, runInterval);
};

export const handleTouchEnd = (clickCount, intervalId, setIntervalId) => {
  handleMouseUp(clickCount, intervalId, setIntervalId);
};

export const handleTouchCancel = (clickCount, intervalId, setIntervalId) => {
  handleMouseUp(clickCount, intervalId, setIntervalId);
};
