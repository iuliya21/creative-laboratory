import React from "react";
import styles from "./description.module.css";
import SliderElement from "../slider-element/slider-element";

const Description: React.FC = () => {
  const imageBear = '/images/bear.jpeg';
  return (
    <div className={styles.description}>
      <p className={styles.author}>Творческая мастерская Марины Мариновой</p>
      <div className={styles.container}>
        <SliderElement backgroundImageUrl={imageBear} text="Текстильные интерьерные игрушки"/>
        <div className={styles.text}>
          <h1 className={styles.title}>Интерьерные игрушки ручной работы</h1>
          <ul className={styles.list}>
            <li className={styles.element}><a href="#">Игрушки в технике исполнения teddy</a></li>
            <li className={styles.element}><a href="#">Будуарные куклы из английского фарфора</a></li>
            <li className={styles.element}><a href="#">Игрушки, выполненные из дерева</a></li>
            <li className={styles.element}><a href="#">Куклы из пластика fimo</a></li>
            <li className={styles.element}><a href="#">Текстильные интерьерные игрушки</a></li>
            <li className={styles.element}><a href="#">Ватные елочные игрушки</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Description;
