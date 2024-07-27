/* Author: Sotiris Konstantis */

import styles from "./header.module.css";

const Header = () => {

    return (<header className={styles.header}>
        <div className={styles.headerText}>Pyrosvestis.gr</div>
    </header>);
};

export default Header;