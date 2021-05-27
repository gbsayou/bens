import styles from "./index.module.scss";

const Description = ({ description }) => {
  return <div className={styles.description}>{description}</div>;
};

export default Description;
