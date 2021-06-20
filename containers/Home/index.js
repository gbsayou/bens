import ContentBody from "@/components/ContentBody";
import FeatureList from "./FeatureList";
import Carousel from "./Carousel";
import styles from "./index.module.scss";

const Home = () => {
  const features = [
    {
      title: "Find out delicious food and drink",
      desc: "We are here to recommend delicious foods worth buying, as well as special foods from all over the world",
      image: "/images/coffee.png",
      list: [
        {
          title: "9 Restaurants Worth Visiting In New York City",
          link: "/a/9-restaurants-worth-visiting-in-new-york-city",
        },
        {
          title: "Classic Japanese Food",
          link: "/a/classic-japanese-food",
        },
        {
          title: "What And Where To Eat In Chicago",
          link: "/a/what-and-where-to-eat-in-chicago",
        }
      ],
    },
    {
      title: "Best travel destination in the world",
      desc: "Want to travel? Find out the most beautiful and fun tourist destinations in the world",
      order: "alternative",
      image: "/images/travel.png",
      list: [
        {
          title: "Chicago Is What A Great City",
          link: "/a/chicago-is-what-a-great-city",
        },
        {
          title: "New York, The Most Popular City In The US",
          link: "/a/new-york-the-most-popular-city-in-the-us",
        },
        {
          title: "Elliðaey, The Forgotten Island",
          link: "/a/ellidaey-the-forgotten-island",
        },
        {
          title: "Top 5 Travel Cities In The US",
          link: "/a/top-5-travel-destinations-in-the-us",
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
