import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.backgroundParent}>
        <img className={styles.backgroundIcon} alt="" src="/background-1.svg" />
        <div className={styles.whatMustFrame}>
          <div className={styles.whatMustFrameInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.mustParent}>
                  <h1 className={styles.must}>{`MuST     `}</h1>
                  <img
                    className={styles.chvronIcon}
                    loading="lazy"
                    alt=""
                    src="/chvron.svg"
                  />
                </div>
                <div className={styles.mahindraUniversitySpeedTestWrapper}>
                  <div
                    className={styles.mahindraUniversitySpeed}
                  >{`mahindra University Speed Test `}</div>
                </div>
              </div>
              <div className={styles.knowMoreAboutYourInternetWrapper}>
                <div className={styles.knowMoreAbout}>
                  know more about your internet details at mahindra university
                  with these simple steps
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.speedSymbolWrapper}>
                <img
                  className={styles.speedSymbolIcon}
                  loading="lazy"
                  alt=""
                  src="/speed-symbol.svg"
                />
              </div>
              <div className={styles.speedTest}>Speed Test</div>
            </div>
            <div className={styles.clickTheGoButtonToGetInWrapper}>
              <div className={styles.clickTheGo}>
                click the go button, to get instant speed of your college MU
                wifi, Ping, Jitter, Packet Loss, Upload speed, Download Speed.
              </div>
            </div>
          </div>
          <div className={styles.whatMustFrameChild}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.worldSymbolWrapper}>
                  <img
                    className={styles.worldSymbolIcon}
                    loading="lazy"
                    alt=""
                    src="/world-symbol.svg"
                  />
                </div>
                <div className={styles.navigateYourWayAcrossTheCParent}>
                  <div className={styles.navigateYourWay}>
                    Navigate your way across the campus
                  </div>
                  <div className={styles.discoverTheHotspots}>
                    Discover the hotspots and dead zones of campus connectivity
                    to ensure you're always in the fast lane to academic
                    victory.
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent3}>
                  <div className={styles.rocketWrapper}>
                    <img
                      className={styles.rocketIcon}
                      loading="lazy"
                      alt=""
                      src="/rocket.svg"
                    />
                  </div>
                  <div className={styles.unravelPeakHoursForSeamlesParent}>
                    <div className={styles.unravelPeakHours}>
                      Unravel Peak Hours for Seamless Downloads
                    </div>
                    <div className={styles.letOurMl}>
                      Let our ML model guide you to the optimal hours for
                      downloading, based on historical data and real-time
                      trends, ensuring smooth sailing for your binge-watching
                      and gaming sessions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
