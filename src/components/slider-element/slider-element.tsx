import styles from "./slider-element.module.css"

type SliderElementProps = {
  imageUrl: string;
  text: string;
}

const SliderElement: React.FC<SliderElementProps> = ({ imageUrl, text }) => {
  return (
    <div className={styles.element}>
      <img src={imageUrl} alt={text} className={styles.image} />
      <p className={styles.elementInfo}>{text}</p>
    </div>
      
  )
}

export default SliderElement;