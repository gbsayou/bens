import styles from "./index.module.scss";
import Header from "./Header";
import Meta from "@/components/Meta";
import Footer from "./Footer";

const Layout = ({ children, metadata={} }) => {
  return (
    <>
      <Meta metadata={metadata} />
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
