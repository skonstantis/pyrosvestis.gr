/* Author: Sotiris Konstantis */

import styles from "./regionStats.module.css";

import { formatDateInGreek } from "../functions/dateUtils";

const RegionStats = ({ isSelected, selectedDate, selectedType, selectedName, selectedDanger, selectedColor, riskData }) => {

  if (!isSelected || !riskData) {
    return null; 
  }

  const containerStyle = {
    borderBottomColor: selectedColor
  };

  return (
    <div className={styles.container} style={containerStyle} onClick={(e) => e.stopPropagation()}>
      <div className={styles.title}>{formatDateInGreek(selectedDate)}</div><br />
      <div>{selectedType}: {selectedName}</div><br />
      <div>Κίνδυνος: {selectedDanger}</div><br />
      <div>Data: {JSON.stringify(riskData)}</div> {/* Display the fetched data */}
    </div>
  );
};

export default RegionStats;
