import { useState } from "react";
import Menu from "./Menu";
import Logo from "@/components/Logo";
import Hamburger from "./Hamburger";
import styles from "./index.module.scss";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div onClick={() => { setShowMobileMenu(true) }} className={styles.hamburger}>
          <Hamburger />
        </div>

        <Logo />
        <div />

        <div className={styles.menu}>
          <Menu />
        </div>

      </header>

      <div className={`${styles["mobile-menu"]} ${showMobileMenu?styles['mobile-menu-show']:''}`}>
            <Logo />
            <Menu />
          </div>

      {showMobileMenu && (
          <div
            className={styles.backdrop}
            onClick={() => { setShowMobileMenu(false); }}
          />
      )}
    </>
  );
};

export default Header;
