import styles from "./index.module.scss";
const imgHost = process.env.imgHost

const FeedCard = ({heroImage:{src, alt}, title, slug})=>{
  const imageSrc = src.startsWith('/images')? `${imgHost}${src}`: src
  return (
    <div className={styles.card}>
      <a href={`/a/${slug}`} className={styles.link}>
        <div className={styles.image}>
          <img src={imageSrc} alt={alt}/>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </a>
    </div>
  )
}

export default FeedCard
