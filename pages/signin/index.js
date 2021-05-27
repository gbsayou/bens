
import Head from "next/head";
import Layout from "@/containers/Layout";
import LoginContainer from "@/containers/Login";

const Home = ({}) => {
  return (
    <Layout>
    <Head>
      <title>Sign in</title>
    </Head>
      <LoginContainer />
    </Layout>
  );
};
export default Home;
