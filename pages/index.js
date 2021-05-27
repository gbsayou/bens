
import Head from "next/head";
import Layout from "@/containers/Layout";
import HomeContainer from "@/containers/Home";

const Home = ({}) => {
  return (
    <Layout>
    <Head>
      <title>Ben Style</title>
    </Head>
      <HomeContainer />
    </Layout>
  );
};
export default Home;
