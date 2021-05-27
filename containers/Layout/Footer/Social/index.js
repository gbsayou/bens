import styles from "./index.module.scss";
import Youtube from "@/assets/youtube";

const Social = ({}) => {
  return (
    <div className={styles.group}>
      <p>Follow Us</p>
      <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link}>
              <Youtube/>
            </a>
          </li>

          <li className={styles.item}>
            <a className={styles.link}>
              <Youtube/>
            </a>
          </li>

          <li className={styles.item}>
            <a className={styles.link}>
              <Youtube/>
            </a>
          </li>
      </ul>
    </div>
  );
};

export default Social;
