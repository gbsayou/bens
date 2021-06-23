import Layout from "@/containers/Layout";
import HomeContainer from "@/containers/Home";

const Home = ({}) => {
  const metadata = {
    title: "Bens | Food, Drink and Travel Destinations",
    description: "Get to know food and drink all over the world, get expert guides on traveling including destinations, tips, and what's more,  precautions during the COVID-19 pandemic. Find what you are interested in at BenS!",
  };
  return (
    <Layout metadata={metadata}>
      <HomeContainer />
    </Layout>
  );
};
export default Home;
