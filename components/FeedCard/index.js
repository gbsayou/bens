import styles from "./index.module.scss";
const cmsHost = process.env.cmsHost

const FeedCard = ({coverImage, title, slug})=>{
  const coverImageSrc = coverImage?.formats?.small.url || ''
  const imageSrc = coverImageSrc.startsWith('/uploads')? `${cmsHost}${coverImageSrc}`: coverImageSrc
  return (
    <div className={styles.card}>
      <a href={`/a/${slug}`} className={styles.link}>
        <div className={styles.image}>
          <img src={imageSrc}/>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </a>
    </div>
  )
}

export default FeedCard
