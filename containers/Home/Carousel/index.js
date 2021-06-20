import Slider from "react-slick";
import {HighImage as HeroImage} from "@/components/HeroImage";
import carouselStyles from "./styles.js";
import styles from "./index.module.scss";

const Carousel = ({ list }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {list.map((item, index) => (
          <a href={item.link} key={`carousel-${index}`} className={styles.item}>
            <HeroImage {...item} />
          </a>
        ))}
      </Slider>
      <style jsx global>
        {carouselStyles}
      </style>
    </div>
  );
};

Carousel.defaultProps = {
  list: [
    {
      title: "Where to Go",
      desktopImage: "/images/fuji-mountain.png",
      mobileImage: "/images/fuji-mountain-mobile.png",
      link: "/category/travel",
      description: "We will tell you where to go all over the world",
    },
    {
      title: "What to Eat",
      desktopImage: "/images/food-and-drink.png",
      mobileImage: "/images/food-and-drink-mobile.png",
      link: "/category/food-and-drink",
      description:
        "What to eat tonight? What to eat while traveling",
    },
    {
      title: "Best Traveling Destinations",
      desktopImage: "/images/angkor-wat.png",
      mobileImage: "/images/angkor-wat-mobile.png",
      link: "/category/travel",
      description: "Have a look at best travel destination, and go!",
    },
    {
      title: "What to drink tonight",
      desktopImage: "/images/wine.png",
      mobileImage: "/images/wine-mobile.png",
      link: "/category/food-and-drink",
      description: "Wanna a drink? come and find it!",
    },
  ],
};

export default Carousel;
