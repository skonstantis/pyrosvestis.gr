/* Author: Sotiris Konstantis */

import styles from "./categories.module.css";
import { isMobileDevice } from "../functions/isMobileDevice";

export const Categories = () => {
  const isMobile = isMobileDevice();

  return (
<div>
      <div className={isMobile ? `${styles.container} ${styles.mobile}` : `${styles.container} ${styles.desktop}`}>
        <div className={styles.entry}>
          <div className={styles.dots + ' ' + styles.five}></div>
          <div className={styles.text}>Συναγερμός</div>
        </div>
        
        <div className={styles.entry}>
          <div className={styles.dots + ' ' + styles.four}></div>
          <div className={styles.text}>Πολύ Υψηλός</div>
        </div>
        
        <div className={styles.entry}>
          <div className={styles.dots + ' ' + styles.three}></div>
          <div className={styles.text}>Υψηλός</div>
        </div>
        
        <div className={styles.entry}>
          <div className={styles.dots + ' ' + styles.two}></div>
          <div className={styles.text}>Μέτριος</div>
        </div>
        
        <div className={styles.entry}>
          <div className={styles.dots + ' ' + styles.one}></div>
          <div className={styles.text}>Χαμηλός</div>
        </div>
        
        <div className={styles.entry + ' ' + styles.lastEntry}>
          <div className={styles.dots + ' ' + styles.notfound}></div>
          <div className={styles.text}>Μη Διαθέσιμο</div>
        </div>
      </div>
    </div>
  );
};
