import React from 'react';
import styles from './header.module.css';

const Header: React.FC = () => {
    return (
      <nav className={styles.header}>
        <ul className={styles.list}>
          <li><a href='#' className={styles.link}>Коллекции игрушек</a></li>
          <li><a href='#' className={styles.link}>О мастере</a></li>
          <li><a href='#' className={styles.link}>Доставка и оплата</a></li>
        </ul>
      </nav>
    )
};

export default Header;