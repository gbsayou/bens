import styles from "./index.module.scss";

const FeatureCard = ({ title, desc, list, image, order = "default" }) => {
  return (
    <section className={styles.card}>
      <div
        className={`${styles.promotes} ${order === "default" ? "" : styles.alternative}`}
      >
        <h3 className={styles.header}>{title}</h3>

        <p className={styles.desc}>{desc}</p>

        <ul className={styles.list}>
          {list.map((link) => (
            <li className={styles.item} key={link.name}>
              <a>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.image}>
        <img className={styles.image}
          src={image}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default FeatureCard;
