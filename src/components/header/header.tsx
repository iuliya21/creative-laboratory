import React, { useState } from "react";
import styles from "./header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Menu from "../menu/menu";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { categories } from "../../utils/utils";
import BurgerMenu from "../burger-menu/burger-menu";

const Header: React.FC = () => {
  const categoryCurrent = useSelector(
    (store: RootState) => store.category.categorySelected
  );

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav
      className={
        isMainPage ? `${styles.header}` : `${styles.header} ${styles.hidden}`
      }
    >
      {isMainPage ? <Menu header={categoryCurrent} items={categories} /> : ""}
      <ul
        className={
          openMenu ? `${styles.list} ${styles.active}` : `${styles.list}`
        }
      >
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            onClick={() => handleMenu()}
          >
            Коллекции игрушек
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/author"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            onClick={() => handleMenu()}
          >
            О мастере
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/delivery"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            onClick={() => handleMenu()}
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
            onClick={() => handleMenu()}
          >
            Отзывы
          </NavLink>
        </li>
      </ul>
      <div className={styles.social}>
        <a
          href="https://vk.com/creative_laboratory.moscow"
          className={styles.linkSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialVkontakte color="white" size={21} />
        </a>
        <a
          className={styles.linkSocial}
          href="https://wa.me/79998840821?text=Здравствуйте,%20хочу%20купить%20у%20Вас%20игрушку!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp color="white" size={21} />
        </a>
        <a
          href="tg://resolve?domain=iuliya_21"
          className={styles.linkSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane color="white" size={21} />
        </a>
      </div>
      <div className={styles.burgerMenu} onClick={() => handleMenu()}>
        <BurgerMenu isOpenBurgerMenu={openMenu} />
      </div>
    </nav>
  );
};

export default Header;
