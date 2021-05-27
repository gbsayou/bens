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
            <li className={styles.item} key={item.name}>
              <a className={styles.link}>{item.name}</a>
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
      {name:'What Coffee to Buy'},
      {name:'What Movie to Watch1'},
      {name:'What Movie to Watch2'},
      {name:'What Movie to Watch3'},
      {name:'What Movie to Watch4'},
      {name:'What Movie to Watch5'},
    ]
  }
  const FoodAndDrink = {
    header:'Food & Drink',
    list: [
      {name:'What Coffee to Buy'},
      {name:'What Wine to Buy'}
    ]
  }
  const aboutUs = {
    header: "About Us",
    list: [
      { name: "Who are we" },
      { name: "Contact us" },
      { name: "Advertise with us" },
      { name: "Privacy Policy" },
      { name: "Terms & Conditions" },
      { name: "Do Not Sell My Info" },
    ],
  };
  const travelDestination = {
    header:'Travel Destination',
    list:[
      { name:'Fuji Mountain'},
      { name:'Hawaii'},
    ]
  }
  
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
