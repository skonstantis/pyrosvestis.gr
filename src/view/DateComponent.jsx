/* Author: Sotiris Konstantis */

import styles from "./date.module.css";
import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
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

const DateComponent = () => {
  const today = moment().format("YYYY-MM-DD");
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
  const [date, setDate] = useState(today);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const clickCount = useRef(0);
  const calendarRef = useRef(null);

  useSetDate(date);

  const maxColor = useMaxColor(date);
  const maxColorToday = useTodayMaxColor();
  const maxColorTomorrow = useTomorrowMaxColor();

  useEffect(() => {
    const outsideClickHandler = handleClickOutside(
      calendarRef,
      setCalendarVisible
    );
    document.addEventListener("click", outsideClickHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
      clearTimeout(intervalId);
    };
  }, [intervalId]);

  const handleTodayClick = () => {
    setDate(today);
    setCalendarVisible(false);
  };

  const handleTomorrowClick = () => {
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