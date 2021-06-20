import styles from "./index.module.scss";

const Logo = () => {
  return (
    <a href="/" className={styles.link}>
      <h1 className={styles.text}>Ben's  channel</h1>
    </a>
  );
};

export default Logo;
