import styles from "./card.module.css";

type CardProps = {
  image: string;
  title: string;
  price: number;
  openModal: Function
};

const Card: React.FC<CardProps> = ({ image, title, price, openModal }) => {

  return (
    <>
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.image} onClick={() => openModal()}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price} &#8381;</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Подробнее</button>
          <button className={styles.button}>Купить</button>
        </div>
      </div>
    </>
  );
};

export default Card;
