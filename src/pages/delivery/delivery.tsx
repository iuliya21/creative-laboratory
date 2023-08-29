import styles from "./delivery.module.css";

const Delivery: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p className={styles.title}>Доставка</p>
        <p className={styles.subtitle}>
          Отправляю Почтой России, СДЭКом, Авито-доставкой, Boxberry на выбор
          покупателя. Доставка оплачивается покупателем.
        </p>
        <p className={styles.subtitle}>
          При отправке упакую в подарочную коробку
        </p>
        <p className={styles.title}>Оплата</p>
        <p className={styles.subtitle}>
          Оплата производится платежом на карту Сбербанка самозанятого. После
          оплаты покупателю высылается чек.
        </p>
      </div>
      <img
        src="/images/delivery.jpeg"
        alt="Подарочная коробка"
        className={styles.image}
      />
    </div>
  );
};

export default Delivery;
