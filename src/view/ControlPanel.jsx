/* Author: Sotiris Konstantis */

import { onSettingClick } from "../functions/controlPanelUtils";
import { useSessionStorage } from "../contexts/SessionStorageContext";
import styles from "./controlPanel.module.css";
import { isMobileDevice } from "../functions/isMobileDevice";

export const ControlPanel = () => {
    const { isCitiesSettingEnabled, setIsCitiesSettingEnabled } = useSessionStorage();

  return (
    <div className={isMobileDevice() ? styles.panelMobile : styles.panel}>
      <img 
        src= { isCitiesSettingEnabled ? "../../assets/setting-on.svg" : "../../assets/setting-off.svg"}
        onClick = {(e) => {onSettingClick(e, isCitiesSettingEnabled, setIsCitiesSettingEnabled)}}>
       </img>
      <p className={isCitiesSettingEnabled ? styles.on : styles.off}>Πόλεις</p>
    </div>
  );
};
