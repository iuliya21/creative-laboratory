import styles from "./description.module.css";
import SliderElement from "../slider-element/slider-element";
import Carousel from "../carousel/carousel";
import { elementsSlider } from "../../utils/utils";
import uuid from "react-uuid";

const Description: React.FC = () => {
  return (
    <>
      <div className={styles.description}>
        <p className={styles.author}>Творческая мастерская Марины Мариновой</p>
        <h1 className={styles.title}>Интерьерные игрушки ручной работы</h1>
        <div className={styles.container}>
          <Carousel>
            {elementsSlider.map((item) => (
              <SliderElement
                key={uuid()}
                imageUrl={item.url}
                text={item.text}
              />
            ))}
          </Carousel>
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitle}>
              Приветствую Вас в своей мастерской! Здесь вы найдете широкий выбор
              интерьерных игрушек на любой вкус: от сказочных персонажей до
              будуарных кукол. Каждая игрушка создается с любовью и трепетом,
              именно поэтому они такие уникальные ♥
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
