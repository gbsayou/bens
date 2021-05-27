import Head from "next/head";
import styles from "./index.module.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
