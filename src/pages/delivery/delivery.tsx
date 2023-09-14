import styles from "./delivery.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";

const Delivery: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Доставка</p>
          <TbTruckDelivery />
        </div>
        <p className={styles.subtitle}>
          Отправляем Почтой России, СДЭКом, Авито-доставкой, Boxberry на выбор
          покупателя. Доставка оплачивается покупателем.
        </p>
        <p className={styles.subtitle}>
          При отправке упакуем в подарочную коробку.
        </p>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Оплата</p>
          <BsCreditCard />
        </div>
        <p className={styles.subtitle}>
          Оплата производится платежом на карту Сбербанка самозанятого. После
          оплаты покупателю высылается чек.
        </p>
        <p className={styles.subtitle}>
          Для заказа Вы можете написать нам в группу Вконтакте либо оставить
          заказ по WhatsApp или Telegram. Ссылки на наши соцсети находятся в левом нижнем
          углу
        </p>
      </div>
      <img
        src="/creative-laboratory/images/delivery.jpeg"
        alt="Подарочная коробка"
        className={styles.image}
      />
    </div>
  );
};

export default Delivery;