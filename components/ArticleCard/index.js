import styles from "./index.module.scss";
const cmsHost = process.env.cmsHost

const ArticleCard = ({ slug, title, coverImage }) => {
  const coverImageSrc = coverImage?.formats?.small.url || ''
  const imageSrc = coverImageSrc.startsWith('/uploads')? `${cmsHost}${coverImageSrc}`: coverImageSrc
  return (
    <div className={styles.card}>
      <a href={`/a/${slug}`} className={styles.link}>
      <div className={styles["text-wrapper"]}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.cover}>
          <img src={imageSrc}></img>
      </div>
        </a>
    </div>
  );
};

export default ArticleCard;
