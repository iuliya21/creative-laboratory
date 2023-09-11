import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

type CardProps = {
  image: string;
  title: string;
  price: number;
  openModal: Function;
  id: string;
};

const Card: React.FC<CardProps> = ({ image, title, price, openModal, id }) => {
  const navigate = useNavigate();

  const message = {
    message: `Здравствуйте! Хочу заказать у вас игрушку. Имя: "${title}" id = "${id}" стоимостью ${price} ₽`,
    phone: "79998840821",
  };

  const url = `https://wa.me/${message.phone}?text=${encodeURIComponent(
    message.message
  )}`;

  return (
    <>
      <div className={styles.card}>
        <div>
          <img
            src={image}
            alt={title}
            className={styles.image}
            onClick={() => {
              navigate(`/creative-laboratory/toy/${id}`);
              openModal();
            }}
          />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.price}>{price} &#8381;</p>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => {
              navigate(`/creative-laboratory/toy/${id}`);
              openModal();
            }}
          >
            Подробнее
          </button>
          <a
            className={styles.button}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Купить
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
