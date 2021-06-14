import styles from "./index.module.scss";
const imgHost = process.env.imgHost;

const FeedCard = ({
  heroImage: { src: desktopSrc, mobileSrc, alt },
  title,
  slug,
}) => {
  const desktopImageSrc = desktopSrc.startsWith("/images") ? `${imgHost}${desktopSrc}` : desktopSrc;
  const mobileImageSrc = mobileSrc ? mobileSrc.startsWith("/images") ? `${imgHost}${mobileSrc}` : mobileSrc: desktopImageSrc;

  return (
    <div className={styles.card}>
      <a href={`/a/${slug}`} className={styles.link}>
        <div className={styles.image}>
          <img src={desktopImageSrc} alt={alt} className={styles.desktop}/>
          <img src={mobileImageSrc} alt={alt} className={styles.mobile}/>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </a>
    </div>
  );
};

export default FeedCard;
