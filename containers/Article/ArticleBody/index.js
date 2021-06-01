import styles from './index.module.scss'

const ArticleBody = ({ content }) =>{
  return (
    <div>
      <div
        className={styles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
export default ArticleBody
