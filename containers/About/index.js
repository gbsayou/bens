import ContentBody from "@/components/ContentBody";
import styles from "./index.module.scss";

const AboutContainer = () => {
  return (
    <div className={styles.home}>
      <ContentBody showRightRail={false}>
        <div className={styles.container}>
          <div className={styles.header}><h1>About Us</h1></div>

          <div className={styles.content}>
            <h2>Ben's channel</h2>
            <p>
              Ben's channel is a website shows you how to live a simple but
              comfortable life. We offer a suite of guides on a wide range of
              topics, including food, drink, traveling, etc.
            </p>
            <p>
              We collect all kinds of information, combined with our own
              personal experience, and provide you with reference when you want
              to buy goods or want to travel.
            </p>
          </div>

          <div className={styles.content}>
            <h2>To contact us</h2>
            <p>
              For any questions, you can contact us with email: <a href="mailto:gbsayou@gmail.com">gbsayou@gmail.com</a>
            </p>
          </div>
        </div>
      </ContentBody>
    </div>
  );
};

export default AboutContainer;
