import styles from "./index.module.scss";
import FeatureCard from '../FeatureList/FeatureCard'

const FeatureList = ({features})=>{
  return (
    <div className={styles.list}>
      <h2 className={styles.header}>
      Expert Life Guide
      </h2>
      {features.map(feature=>(
        <FeatureCard {...feature} key={feature.name} key={feature.title}/>
      ))}
    </div>
  )
}

export default FeatureList
