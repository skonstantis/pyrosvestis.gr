/* Author: Sotiris Konstantis */

import styles from "./date.module.css";
import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment-timezone";
import {
  runInterval,
  handleMouseDown,
  handleMouseUp,
  handleTouchStart,
  handleTouchEnd,
  handleTouchCancel,
} from "../functions/intervalHandlers";
import {
  formatDateInGreek,
  handleDateClick,
  onChange,
  useSetDate,
  handleClickOutside,
} from "../functions/dateUtils";
import { useMaxColor, useTodayMaxColor, useTomorrowMaxColor } from "../functions/colorUtils";
import { SeasonProvider } from "../contexts/seasonContext.jsx";
import { isMobileDevice } from "../functions/isMobileDevice";

const DateComponent = ({date, setDate, setIsSelected, setSelectedLongitude, setSelectedLatitude}) => {
  const today = moment().tz("Europe/Athens").format("YYYY-MM-DD");
  const tomorrow = moment().tz("Europe/Athens").add(1, "days").format("YYYY-MM-DD");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const clickCount = useRef(0);
  const calendarRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  useSetDate(date);

  const maxColor = useMaxColor(date);
  const maxColorToday = useTodayMaxColor();
  const maxColorTomorrow = useTomorrowMaxColor();

useEffect(() => {
    const handleMouseDown = () => {
        setDragging(false); 
    };

    const handleMouseMove = () => {
      setDragging(true); 
    };

    const outsideClickHandler = handleClickOutside(
      dragging,
      calendarRef,
      setCalendarVisible,
      setIsSelected
    );

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('click', outsideClickHandler);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('click', outsideClickHandler);
      clearTimeout(intervalId);
    };
    
  }, [calendarRef, setCalendarVisible, setIsSelected, dragging, intervalId]);

  const handleTodayClick = (e) => {
    e.stopPropagation();
    setDate(today);
    setCalendarVisible(false);
  };

  const handleTomorrowClick = (e) => {
    e.stopPropagation();
    setDate(tomorrow);
    setCalendarVisible(false);
  };

  return (
    <SeasonProvider>
      <div className={styles.dateWrapper}>
        <div className={styles.dateContainer}>
          <div
            className={`${styles.dateInnerContainer} ${
              date === today ? styles.disabled : ""
            }`}
            style={{ borderBottom: "4px solid " + maxColorToday }}
            onClick={date !== today ? handleTodayClick : null}
          >
            Σήμερα
          </div>
        </div>
        <span
          onMouseDown={() => {
            if (!isMobileDevice())
              handleMouseDown(
                "previous",
                clickCount,
                setDate,
                setIntervalId,
                runInterval
              );
          }}
          onMouseUp={() => handleMouseUp(clickCount, intervalId, setIntervalId)}
          onMouseLeave={() =>
            handleMouseUp(clickCount, intervalId, setIntervalId)
          }
          onTouchStart={() =>
            handleTouchStart(
              "previous",
              clickCount,
              setDate,
              setIntervalId,
              runInterval
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(clickCount, intervalId, setIntervalId)
          }
          onTouchCancel={() =>
            handleTouchCancel(clickCount, intervalId, setIntervalId)
          }
          className={`${styles.arrow} ${styles.previous}`}
          onClick={(e) => e.stopPropagation()}
        >
          &lt;
        </span>
        <div
          className={styles.dateContainerCentral}
          onClick={(event) => {
            event.stopPropagation();
            handleDateClick(calendarVisible, setCalendarVisible);
          }}
        >
          <div
            className={styles.dateInnerContainer}
            style={{ borderBottom: "4px solid " + maxColor }}
          >
            {formatDateInGreek(date)}
          </div>
          {calendarVisible && (
            <div
              className={styles.calendarContainer}
              ref={calendarRef}
              onClick={(e) => e.stopPropagation()}
            >
              <Calendar
                onChange={(newDate) =>
                  onChange(newDate, setDate, setCalendarVisible)
                }
                value={new Date(date)}
                className={styles.calendar}
                locale="el"
              />
            </div>
          )}
        </div>
        <span
          onMouseDown={() => {
            if (!isMobileDevice())
              handleMouseDown(
                "next",
                clickCount,
                setDate,
                setIntervalId,
                runInterval
              );
          }}
          onMouseUp={() => handleMouseUp(clickCount, intervalId, setIntervalId)}
          onMouseLeave={() =>
            handleMouseUp(clickCount, intervalId, setIntervalId)
          }
          onTouchStart={() =>
            handleTouchStart(
              "next",
              clickCount,
              setDate,
              setIntervalId,
              runInterval
            )
          }
          onTouchEnd={() =>
            handleTouchEnd(clickCount, intervalId, setIntervalId)
          }
          onTouchCancel={() =>
            handleTouchCancel(clickCount, intervalId, setIntervalId)
          }
          className={`${styles.arrow} ${styles.next}`}
          onClick={(e) => e.stopPropagation()}
        >
          &gt;
        </span>
        <div className={styles.dateContainer}>
          <div
            className={`${styles.dateInnerContainer} ${
              date === tomorrow ? styles.disabled : ""
            }`}
            style={{ borderBottom: "4px solid " + maxColorTomorrow }}
            onClick={date !== tomorrow ? handleTomorrowClick : null}
          >
            Αύριο
          </div>
        </div>
      </div>
    </SeasonProvider>
  );
};

export default DateComponent;