import ArticleCard from "@/components/ArticleCard";
import styles from "./index.module.scss";

const ArticleList = ({ name, list, morePath }) => {
  return (
    <div className={styles.list}>
      <h2>{name}</h2>
      {list.map((article) => (
        <ArticleCard key={article.name} {...article} />
      ))}
      <div className={styles.more}>
        <a href={morePath}>{"Read more >>>"}</a>
      </div>
    </div>
  );
};

export default ArticleList;
