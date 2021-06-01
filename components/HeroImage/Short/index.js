import styles from "./index.module.scss";

const HeroImage = ({ title, src, alt }) => {
  return (
    <div className={styles.hero}>
      <div className={styles["text-wrapper"]}>
        <h2>{title}</h2>
      </div>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default HeroImage;
