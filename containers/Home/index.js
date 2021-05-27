import ContentBody from "@/components/ContentBody";
import FeatureList from "./FeatureList";
import Carousel from "./Carousel";
import styles from "./index.module.scss";

const Home = () => {
  const features = [
    {
      title: "Find out delicious food and drink",
      desc: "Here we introduce a lot of food and drink for you, have a look!",
      image: "/images/coffee.png",
      list: [{ name: "What Coffee to Buy1" }],
    },
    {
      title: "Best travel destination in the world",
      desc: "Find out the most beautiful and fun tourist destinations in the world selected by everyone",
      order: "alternative",
      image: "/images/coffee.png",
      list: [
        { name: "What Coffee to Buy2" },
        { name: "What Coffee to Buy3" },
        { name: "What Coffee to Buy4" },
      ],
    },
  ];

  return (
    <div className={styles.home}>
      <Carousel />
      
      <ContentBody showRightRail={false}>
        <FeatureList features={features} />
      </ContentBody>
    </div>
  );
};
export default Home;
