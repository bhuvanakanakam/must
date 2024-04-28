import { FunctionComponent } from "react";
import styles from "./FRAMEHOMEPAGE.module.css";

const FRAMEHOMEPAGE: FunctionComponent = () => {
  return (
    <header className={styles.fRAMEHOMEPAGE}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <h1 className={styles.muspeedtest}>MUSpeedTest</h1>
        </div>
        <div className={styles.inputArea}>
          <div className={styles.frameParent}>
            <div className={styles.nav1Wrapper}>
              <div className={styles.nav1}>
                <div className={styles.home}>home</div>
                <div className={styles.nav1Child} />
              </div>
            </div>
            <div className={styles.nav11}>
              <div className={styles.home1}>Data</div>
              <div className={styles.navHome} />
            </div>
            <div className={styles.nav12}>
              <div className={styles.home2}>About Us</div>
              <div className={styles.nav1Item} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FRAMEHOMEPAGE;
