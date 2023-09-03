import { useState } from "react";
import styles from "./menu.module.css";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../services/store";
import { selectedCategory } from "../../services/sliceCategorySelected";

type TMenu = {
  header: string | null;
  items: string[];
};

const Menu: React.FC<TMenu> = ({ header, items }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleTriangle = () => {
    setIsOpenMenu((prevState) => {
      return !prevState;
    });
  };

  const categoryChoice = (category: string) => {
    dispatch(selectedCategory(category));
  }

  return (
    <div className={styles.menu}>
      <div className={styles.headerContainer} onClick={handleTriangle}>
        <p className={styles.header}>Категория игрушек: {header}</p>
        <div
          className={
            isOpenMenu
              ? `${styles.triangle} ${styles.active}`
              : `${styles.triangle}`
          }
        ></div>
      </div>
      {isOpenMenu ? (
        <ul className={styles.list}>
          {items.map((item) => (
            <li className={styles.listItem} key={uuid()} onClick={() => {
              categoryChoice(item);
              setIsOpenMenu(false);
            }}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Menu;
