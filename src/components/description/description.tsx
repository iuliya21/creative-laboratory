import styles from "./description.module.css";
import SliderElement from "../slider-element/slider-element";
import Carousel from "../carousel/carousel";
import { elementsSlider } from "../../utils/utils";

const Description: React.FC = () => {

  return (
    <>
      <div className={styles.description}>
        <p className={styles.author}>Творческая мастерская Марины Мариновой</p>
        <div className={styles.container}>
          <Carousel>
            <img src="/images/bear.jpeg" alt="1" />
            <img src="/images/bearJack.jpeg" alt="2" />
            <img src="/images/frog.jpeg" alt="3" />
          </Carousel>
          <div className={styles.text}>
            <h1 className={styles.title}>Интерьерные игрушки ручной работы</h1>
            <ul className={styles.list}>
              {/* <li className={styles.element}><a href="#">Игрушки в технике исполнения teddy</a></li>
              <li className={styles.element}><a href="#">Будуарные куклы из английского фарфора</a></li>
              <li className={styles.element}><a href="#">Игрушки, выполненные из дерева</a></li>
              <li className={styles.element}><a href="#">Куклы из пластика fimo</a></li>
              <li className={styles.element}><a href="#">Текстильные интерьерные игрушки</a></li>
              <li className={styles.element}><a href="#">Ватные елочные игрушки</a></li> */}
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Description;
