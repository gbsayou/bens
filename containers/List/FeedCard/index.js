import styles from "./index.module.scss";

const FeedCard = ({image, title, link})=>{
  return (
    <div className={styles.card}>
      <a href={link} className={styles.link}>
        <div className={styles.image}>
          <img src={image}/>
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      </a>
    </div>
  )
}

export default FeedCard
