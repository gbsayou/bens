import styles from "./index.module.scss";

const ArticleCard = ({ link, name, cover }) => {
  return (
    <div className={styles.card}>
      <div className={styles["text-wrapper"]}>
        <a className={styles.title} href={link}>
          {name}
        </a>
      </div>

      <div className={styles.cover}>
        <a href={link}>
          <img src={cover}></img>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
