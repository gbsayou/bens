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
      list: [
        { 
          title: "Top 10 Popular Coffee Brands in The World",
          link: '/a/top-10-popular-coffee-brands-in-the-world'
         },
        { 
          title: "What Coffee to Buy",
          link: '/a/what-coffee-to-buy'
         },
      ],
    },
    {
      title: "Best travel destination in the world",
      desc: "Find out the most beautiful and fun tourist destinations in the world selected by everyone",
      order: "alternative",
      image: "/images/travel.png",
      list: [
        { 
          title: "Elliðaey, the forgotten island",
          link: '/a/ellidaey-the-forgotten-island'
         },
        { 
          title: "Top 10 travel destinations in the US",
          link: '/a/top-10-travel-destinations-in-the-us'
         },
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
