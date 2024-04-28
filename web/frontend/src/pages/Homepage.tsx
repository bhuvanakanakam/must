import { FunctionComponent, useCallback } from "react";
import FRAMEHOMEPAGE from "../components/FRAMEHOMEPAGE";
import FrameComponent from "../components/FrameComponent";
import WhyMUST from "../components/WhyMUST";
import WhoMUST from "../components/WhoMUST";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const onSpeedTestGoClick = useCallback(() => {
    // Please sync "click_homepage" to the project
  }, []);

  return (
    <div className={styles.homepage}>
      <FRAMEHOMEPAGE />
      <div className={styles.speedTestGoWrapper}>
        <div className={styles.speedTestGo} onClick={onSpeedTestGoClick}>
          <h1 className={styles.go}>GO</h1>
          <div className={styles.wrapperBackground}>
            <img
              className={styles.backgroundIcon}
              loading="lazy"
              alt=""
              src="/background.svg"
            />
          </div>
        </div>
      </div>
      <FrameComponent />
      <section className={styles.whyMustParent}>
        <WhyMUST />
        <WhoMUST />
      </section>
    </div>
  );
};

export default Homepage;
