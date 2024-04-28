import { FunctionComponent } from "react";
import styles from "./WhyMUST.module.css";

const WhyMUST: FunctionComponent = () => {
  return (
    <div className={styles.whyMust}>
      <img className={styles.backgroundIcon} alt="" src="/background-2.svg" />
      <div className={styles.muSTHistory}>
        <div className={styles.bhuvanaTejaKanakam}>
          <h1 className={styles.mustHistory}>MuST History</h1>
        </div>
        <img
          className={styles.bichevronRightIcon}
          loading="lazy"
          alt=""
          src="/bichevronright.svg"
        />
      </div>
      <div
        className={styles.atMahindraUniversity}
      >{`at mahindra university, as third year undergraduates majoring in computer science and engineering, we’ve encountered persistent challenges with campus connectivity. from struggling with poor internet in various areas to facing the stress of looming deadlines when uploading and downloading large files and videos, these issues have been a constant source of frustration. determined to leave a positive impact before we graduate, we’ve united to address these connectivity issues head-on. our goal is to empower future students by providing them with insights into campus connectivity, highlighting areas with strong and weak signal strengths. whether it’s grabbing a meal in the mess, studying in the library, or catching a show, we understand the importance of seamless internet access for everyone on campus, including professors and phD students. our mission is to enhance the overall connectivity experience for the entire mahindra university community `}</div>
    </div>
  );
};

export default WhyMUST;
