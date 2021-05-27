
import Head from "next/head";
import Layout from "@/containers/Layout";
import LoginContainer from "@/containers/Login";

const Home = ({}) => {
  return (
    <Layout>
    <Head>
      <title>Sign up</title>
    </Head>
      <LoginContainer isSignup/>
    </Layout>
  );
};
export default Home;
