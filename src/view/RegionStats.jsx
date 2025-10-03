/* Author: Sotiris Konstantis */

import styles from "./regionStats.module.css";

import { formatDateInGreek } from "../functions/dateUtils";
import levels from "../constants/levels";
import colors from "../constants/colors";

const RegionStats = ({
  isSelected,
  selectedDate,
  selectedType,
  selectedName,
  selectedDanger,
  selectedColor,
  riskData,
}) => {
  if (!isSelected || !riskData) {
    return null;
  }

  const containerStyle = {
    borderBottomColor: selectedColor,
  };

  riskData = JSON.parse(JSON.stringify(riskData));
  let totalData =
    riskData[0] + riskData[1] + riskData[2] + riskData[3] + riskData[4];

  const renderProgressBar = (value) => {
    const percentage = ((riskData[value] / totalData) * 100).toFixed(2);
    return (
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${percentage}%`,
            backgroundColor: colors.items.get(value),
          }}
        ></div>
        <div className={styles.progressText}>
          {value == 4 ? "Συναγερμός" : levels.items.get(value)} {percentage}%
        </div>
      </div>
    );
  };

  return (
    <div
      className={styles.container}
      style={containerStyle}
      onClick={(e) => e.stopPropagation()}
    >
        <div className={styles.title}>Ιστορικά Στατιστικά</div>
        <div className={styles.header}>
        {selectedType + " " + selectedName}
      </div>
        <div> {renderProgressBar(0)}</div>
        <div> {renderProgressBar(1)}</div>
        <div> {renderProgressBar(2)}</div>
        <div> {renderProgressBar(3)}</div>
        <div> {renderProgressBar(4)}</div>
      </div>
  );
};

export default RegionStats;
