import styles from "./index.module.scss";

const Menu = ({ navs }) => {
  return (
    <nav className={styles.menu}>
      <ul>
        {navs.map((nav) => (
          <li key={nav.name}>
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.defaultProps = {
  navs: [
    { name: "Home", link:'/' },
    { name: "Foods & Drink", link:'/food-and-drink' },
    { name: "Travel", link:'/travel'},
    { name: "Shop" },
    { name: "My Favorites" },
  ],
};

export default Menu;
