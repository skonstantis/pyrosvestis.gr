/* Author: Sotiris Konstantis */
import styles from './date.module.css';
import { formatDateInGreek } from "../functions/formatDateInGreek";
import React, { useState, useEffect } from "react";
import { useSetDate } from "../functions/setDate"; 

const DateComponent = () => {
  const [date, setDate] = useState("2024-07-15");
  const [intervalId, setIntervalId] = useState(null);
  useSetDate(date);

  const changeDate = (direction) => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
      return newDate.toISOString().split('T')[0];
    });
  };

  const handleMouseDown = (direction) => {
    changeDate(direction); 
    const id = setInterval(() => changeDate(direction), 300);
    setIntervalId(id);
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className={styles.dateWrapper}>
      <span
        onMouseDown={() => handleMouseDown('previous')}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={styles.arrow}
      >
        &lt; 
      </span>
      <div className={styles.dateContainer}>
        {formatDateInGreek(date)}
      </div>
      <span
        onMouseDown={() => handleMouseDown('next')}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={styles.arrow}
      >
        &gt; 
      </span>
    </div>
  );
};

export default DateComponent;