import styles from "./burger-menu.module.css";

type BurgerMenuProps = {
  isOpenBurgerMenu: boolean;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpenBurgerMenu }) => {
  return (
    <div
      className={
        isOpenBurgerMenu
          ? `${styles.burger} ${styles.active}`
          : `${styles.burger}`
      }
    >
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default BurgerMenu;
