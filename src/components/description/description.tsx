import styles from "./description.module.css";
import SliderElement from "../slider-element/slider-element";
import Carousel from "../carousel/carousel";
import { elementsSlider } from "../../utils/utils";
import uuid from 'react-uuid';

const Description: React.FC = () => {

  return (
    <>
      <div className={styles.description}>
        <p className={styles.author}>Творческая мастерская Марины Мариновой</p>
        <h1 className={styles.title}>Интерьерные игрушки ручной работы</h1>
        <div className={styles.container}>
          <Carousel>
            {elementsSlider.map((item, index) => (
              <SliderElement key={uuid()} imageUrl={item.url} text={item.text} />
            ))}
          </Carousel>
          <p className={styles.subtitle}>
            Приветствую в своей мастерской! Здесь вы найдете качественные игрушки для украшения интерьера
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;