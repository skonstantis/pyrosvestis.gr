/* Author: Sotiris Konstantis */

import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { isMobileDevice } from "../functions/isMobileDevice";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const openX = () => {
    window.open("https://x.com/pyrosvestis_gr", "_blank");
  };

  return (
    <header className={styles.header} 
    onClick={(e) => e.stopPropagation()}>
      <img
        src={"../assets/logo.svg"}
        alt="Logo"
        className={styles.logo}
        onClick={refreshPage}
      />
      <div className={styles.headerText} onClick={refreshPage}>
        Pyrosvestis.gr
      </div>
      {!isMobile && (
        <div className={styles.memoText} onClick={refreshPage}>
          Ημερήσιοι χάρτες κινδύνου εκδήλωσης & εξάπλωσης πυρκαγιάς
        </div>
      )}
      <img
        src={"../assets/x.svg"}
        alt="X"
        className={styles.x}
        onClick={openX}
      />
    </header>
  );
};

export default Header;