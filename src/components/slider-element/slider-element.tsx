import { text } from "stream/consumers";
import styles from "./slider-element.module.css"

type SliderElementProps = {
  backgroundImageUrl: string;
  text: string;
}

const SliderElement: React.FC<SliderElementProps> = ({ backgroundImageUrl, text }) => {
  const image = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };
  
  return (
    <div className={styles.container} style={image}>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default SliderElement;

