import React from "react";
import styles from "./description.module.css";

const Description: React.FC = () => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Творческая мастерская Марины Мариновой</h1>
      <div className={styles.container}>
        <div className={styles.image}></div>
        <p className={styles.text}>
          Интерьерные игрушки ручной работы: от будуарных кукол до игрушек в
          технике Teddy
        </p>
      </div>
    </div>
  );
};

export default Description;
