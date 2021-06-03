import styles from "./index.module.scss";
import Logo from "@/components/Logo";

const Introduction = ()=>{
  return (
    <div className={styles.column}>
      <Logo/>
      <p className={styles.intro}>
        Ben Style is a website shows you how to live a simple but comfortable life. We offer a suite of guides on a wide range of topics, including food, drink, travel, etc.
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
        title: "Top 10 Popular Coffee Brands in The World",
        link: '/a/top-10-popular-coffee-brands-in-the-world'
       },
      { 
        title: "What Coffee to Buy",
        link: '/a/what-coffee-to-buy'
       },
       { 
        title: "Elliðaey, the forgotten island",
        link: '/a/ellidaey-the-forgotten-island'
       },
      { 
        title: "Top 10 travel destinations in the US",
        link: '/a/top-10-travel-destinations-in-the-us'
       },
    ]
  }
  const FoodAndDrink = {
    header:'Food & Drink',
    list: [
      { 
        title: "Top 10 Popular Coffee Brands in The World",
        link: '/a/top-10-popular-coffee-brands-in-the-world'
       },
      { 
        title: "What Coffee to Buy",
        link: '/a/what-coffee-to-buy'
       },
    ]
  }

  const travelDestination = {
    header:'Travel Destination',
    list:[
      { 
        title: "Elliðaey, the forgotten island",
        link: '/a/ellidaey-the-forgotten-island'
       },
      { 
        title: "Top 10 travel destinations in the US",
        link: '/a/top-10-travel-destinations-in-the-us'
       },
    ]
  }

  const aboutUs = {
    header: "About Us",
    list: [
      { title: "Who are we" },
      { title: "Contact us" },
      { title: "Advertise with us" },
      { title: "Privacy Policy" },
      { title: "Terms & Conditions" },
      { title: "Do Not Sell My Info" },
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
