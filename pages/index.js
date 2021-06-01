import Layout from "@/containers/Layout";
import HomeContainer from "@/containers/Home";

const Home = ({}) => {
  const metadata = {
    title: "BenS",
    description: "visit BenS for guides",
  };
  return (
    <Layout metadata={metadata}>
      <HomeContainer />
    </Layout>
  );
};
export default Home;
