import HamburgerSVG from "@/assets/hamburger";
import styles from "./index.module.scss";

const Hamburger = () => {
  return (
    <div className={styles.hamburger}>
      <HamburgerSVG />
    </div>
  );
};
export default Hamburger;
