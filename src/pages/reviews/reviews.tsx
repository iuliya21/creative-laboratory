import styles from "./reviews.module.css";

const Reviews: React.FC = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.review}>
        <img
          src="/creative-laboratory/images/reviews/review1.jpeg"
          alt="Игрушка"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <p className={styles.title}>Буратино ростом 37 см</p>
          <p className={styles.text}>
            "Игрушка абсолютный восторг. Особенно хорошо смотрится в сидячем
            положении. Изысканная вещь для украшения интерьера детской. Большое
            спасибо художнику и продавцу! Упаковка тоже великолепная! В общем,
            горячо рекомендую!"
          </p>
        </div>
      </div>
      <div className={styles.review}>
        <img
          src="/creative-laboratory/images/reviews/review2.jpeg"
          alt="Игрушка"
          className={styles.image}
        />
        <div className={styles.textContainer}>
        <p className={styles.title}>Кукла из пластика fimo doll</p>
          <p className={styles.text}>
            "Кукол папа дарил много, и разных. Но куклы, которая бы походила на
            меня в детстве, не было. Вот я и задумалась:"А как бы выглядела
            кукла, которой можно дать имя - Лисичка?" Мне помог один мастер -
            кукольник. Вот такую замечательную девочку- Лисичку она изготовила
            для меня. Жду с нетерпением ее прибытия."
          </p>
          <p className={styles.signature}>Данная игрушка выполнена на заказ</p>
        </div>
      </div>
      <div className={styles.review}>
        <img
          src="/creative-laboratory/images/reviews/review3.jpeg"
          alt="Игрушка"
          className={styles.image}
        />
        <div className={styles.textContainer}>
        <p className={styles.title}>Будуарная фарфоровая кукла ростом 16 см</p>
        <p className={styles.text}>
          "Красивая кукла, очень кропотливая работа! Отзывчивый продавец!
          Спасибо большое и вдохновения в творчестве!"
        </p>
        </div>

      </div>
    </div>
  );
};

export default Reviews;
