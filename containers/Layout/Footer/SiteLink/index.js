import styles from "./index.module.scss";
import Logo from "@/components/Logo";

const Introduction = ()=>{
  return (
    <div className={styles.column}>
      <Logo/>
      <p className={styles.intro}>
        Ben's channel is a website shows you how to live a simple but comfortable life. We offer a suite of guides on a wide range of topics, including food, drink, traveling, etc.
      </p>
    </div>
  )
}

const Column = ({ header, list }) => {
  return (
    <div className={styles.column}>
      <h4 className={styles.header}>{header}</h4>
      <div>
        <ul className={styles.list}>
          {list.map((item) => (
            <li className={styles.item} key={item.title}>
              <a className={styles.link} href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SiteLink = () => {
  const popularArticles = {
    header:'Most Popular',
    list:[
      {
        title: "9 Restaurants Worth Visiting In New York City",
        link: "/a/9-restaurants-worth-visiting-in-new-york-city",
       },
      {
        title: "Classic Japanese Food",
        link: "/a/classic-japanese-food",
       },
       {
        title: "Chicago Is What A Great City",
        link: "/a/chicago-is-what-a-great-city",
       },
      {
        title: "New York, The Most Popular City In The US",
        link: "/a/new-york-the-most-popular-city-in-the-us",
       },
    ]
  }
  const FoodAndDrink = {
    header:'Food & Drink',
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
      },
      {
        title: "Top 10 Popular Coffee Brands In The World",
        link: "/a/top-10-popular-coffee-brands-in-the-world",
      },
      {
        title: "What Coffee To Buy",
        link: "/a/what-coffee-to-buy",
      },
    ]
  }

  const travelDestination = {
    header:'Travel Destination',
    list:[
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
    ]
  }

  const aboutUs = {
    header: "About Us",
    list: [
      { 
        title: "About Us and Contact",
        link: '/about'
       },
    ],
  };
  
  return (
    <nav className={styles.nav}>
      <div className={styles.grid}>
        <Introduction />
        <Column {...popularArticles} />
        <Column {...FoodAndDrink} />
        <Column {...travelDestination} />
        <Column {...aboutUs} />
      </div>
    </nav>
  );
};

export default SiteLink;
