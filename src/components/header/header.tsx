import React, { useState } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import Menu from "../menu/menu";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { categories } from "../../utils/utils";

const Header: React.FC = () => {

  const categoryCurrent = useSelector((store: RootState) => store.category.categorySelected);

  return (
    <nav className={styles.header}>
      <Menu header={categoryCurrent} items={categories} />
      <ul className={styles.list}>
        <li>
          <NavLink
            end
            to="/creative-laboratory/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            Коллекции игрушек
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/creative-laboratory/author"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            О мастере
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/creative-laboratory/delivery"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/creative-laboratory/reviews"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
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
          <SlSocialVkontakte color="white" size={23} />
        </a>
        <a
          className={styles.linkSocial}
          href="https://wa.me/79998840821?text=Здравствуйте,%20хочу%20купить%20у%20Вас%20игрушку!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp color="white" />
        </a>
        <a
          href="tg://resolve?domain=iuliya_21"
          className={styles.linkSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
