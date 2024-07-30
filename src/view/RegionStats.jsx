import React, { useEffect, useState } from "react";
import styles from "./regionStats.module.css";

const RegionStats = ({ isSelected, selectedDate, selectedType, selectedName, selectedDanger, selectedColor }) => {

  if (!isSelected) {
    return null; 
  }

  const containerStyle = {
    borderBottomColor: selectedColor
  };

  return (
    <div className={styles.container} style={containerStyle} onClick={(e) => e.stopPropagation()}>
      <strong>{selectedDate}</strong><br />
      <strong>{selectedType}: {selectedName}</strong><br />
      <strong>Κίνδυνος: {selectedDanger}</strong><br />
    </div>
  );
};

export default RegionStats;
