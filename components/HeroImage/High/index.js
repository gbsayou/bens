import styles from "./index.module.scss";

const HeroImage = ({ title, desktopImage, mobileImage, description, alt }) => {
  return (
    <div className={styles.hero}>
      <div className={styles["text-wrapper"]}>
        <h2>{title}</h2>

        {description && (
          <p className={styles["desktop-description"]}>{description}</p>
        )}
      </div>

      <img className={`${styles.image} ${styles.desktop}`} src={desktopImage} alt={alt} />
      <img className={`${styles.image} ${styles.mobile}`} src={mobileImage} alt={alt} />

      {description && (
        <div className={styles["mobile-description"]}>{description}</div>
      )}
    </div>
  );
};

export default HeroImage;
