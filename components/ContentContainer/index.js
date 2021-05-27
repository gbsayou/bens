import styles from "./index.module.scss";

const ContentContainer = ({children})=>{
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
export default ContentContainer
