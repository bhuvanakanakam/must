import { FunctionComponent } from "react";
import styles from "./WhoMUST.module.css";

const WhoMUST: FunctionComponent = () => {
  return (
    <div className={styles.whoMust}>
      <img className={styles.backgroundIcon} alt="" src="/background-3.svg" />
      <div className={styles.whoIsBehindTheMustParent}>
        <h1 className={styles.whoIsBehind}>Who is behind the muST</h1>
        <div className={styles.se21ucse035BhuvanaContainer}>
          <p className={styles.se21ucse035Bhuvana}>
            sE21UCSE035 - Bhuvana Teja Kanakam
          </p>
          <p className={styles.se21ucse095Karthik}>
            SE21UCSE095 - Karthik Sattiraju
          </p>
          <p className={styles.se21ucse156Pramod}>
            SE21UCSE156 - Pramod Reddy Atmakuri
          </p>
          <p className={styles.se21ucse175Sai}>
            SE21UCSE175 - Sai Vivek Nekkanti
          </p>
        </div>
      </div>
      <div className={styles.whoMustInner}>
        <div className={styles.frameParent}>
          <div className={styles.bichevronRightWrapper}>
            <img
              className={styles.bichevronRightIcon}
              alt=""
              src="/bichevronright-1.svg"
            />
          </div>
          <div className={styles.se21ucse192SanyamContainer}>
            <p className={styles.se21ucse192Sanyam}>
              SE21UCSE192 - Sanyam Agrawal
            </p>
            <p className={styles.se21ucse200Sheikh}>
              SE21UCSE200 - Sheikh Obaid Ullah
            </p>
            <p className={styles.se21ucse202ShreeyaSaaye}>
              SE21UCSE202- Shreeya Saaye Nallaboina
            </p>
            <p className={styles.se21ucse250Vismay}>SE21UCSE250 - Vismay CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoMUST;
