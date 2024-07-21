/* Author: Sotiris Konstantis */

import styles from './date.module.css';
import { formatDateInGreek, useSetDate, handleDateClick } from "../functions/dateUtils";
import React, { useState, useEffect, useRef } from "react";
import {
  runInterval,
  handleMouseDown,
  handleMouseUp,
  handleTouchStart,
  handleTouchEnd,
  handleTouchCancel
} from "../functions/intervalHandlers";

const DateComponent = () => {
  const [date, setDate] = useState("2024-07-15");
  const [intervalId, setIntervalId] = useState(null);
  const clickCount = useRef(0);

  useSetDate(date);

  useEffect(() => {
    return () => clearTimeout(intervalId);
  }, [intervalId]);

  return (
    <div className={styles.dateWrapper}>
      <span
        onMouseDown={() => handleMouseDown('previous', clickCount, setDate, setIntervalId, runInterval)}
        onMouseUp={() => handleMouseUp(clickCount, intervalId, setIntervalId)}
        onMouseLeave={() => handleMouseUp(clickCount, intervalId, setIntervalId)}
        onTouchStart={() => handleTouchStart('previous', clickCount, setDate, setIntervalId, runInterval)}
        onTouchEnd={() => handleTouchEnd(clickCount, intervalId, setIntervalId)}
        onTouchCancel={() => handleTouchCancel(clickCount, intervalId, setIntervalId)}
        className={`${styles.arrow} ${styles.previous}`}
      >
        &lt; 
      </span>
      <div className={styles.dateContainer}>
        <div className={styles.dateInnerContainer} onClick={handleDateClick}>
          {formatDateInGreek(date)}
        </div>
      </div>
      <span
        onMouseDown={() => handleMouseDown('next', clickCount, setDate, setIntervalId, runInterval)}
        onMouseUp={() => handleMouseUp(clickCount, intervalId, setIntervalId)}
        onMouseLeave={() => handleMouseUp(clickCount, intervalId, setIntervalId)}
        onTouchStart={() => handleTouchStart('next', clickCount, setDate, setIntervalId, runInterval)}
        onTouchEnd={() => handleTouchEnd(clickCount, intervalId, setIntervalId)}
        onTouchCancel={() => handleTouchCancel(clickCount, intervalId, setIntervalId)}
        className={`${styles.arrow} ${styles.next}`}
      >
        &gt; 
      </span>
    </div>
  );
};

export default DateComponent;