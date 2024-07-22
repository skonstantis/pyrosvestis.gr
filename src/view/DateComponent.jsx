/* Author: Sotiris Konstantis */

import styles from './date.module.css';
import React, { useState, useEffect, useRef } from "react";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
import moment from 'moment'; 
import { el } from 'date-fns/locale'; 
import {
  runInterval,
  handleMouseDown,
  handleMouseUp,
  handleTouchStart,
  handleTouchEnd,
  handleTouchCancel
} from "../functions/intervalHandlers";
import { formatDateInGreek, handleDateClick, onChange, useSetDate } from "../functions/dateUtils";

const DateComponent = () => {
  const today = moment().format('YYYY-MM-DD');
  const [date, setDate] = useState(today);
  const [calendarVisible, setCalendarVisible] = useState(false); 
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
      <div className={styles.dateContainer} onClick={() => handleDateClick(calendarVisible, setCalendarVisible)}>
        <div className={styles.dateInnerContainer}>
          {formatDateInGreek(date)}
        </div>
        {calendarVisible && (
          <div className={styles.calendarContainer} onClick={(e) => e.stopPropagation()}>
            <Calendar
              onChange={(newDate) => onChange(newDate, setDate, setCalendarVisible)}
              value={new Date(date)}
              className={styles.calendar}
              locale="el" 
            />
          </div>
        )}
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