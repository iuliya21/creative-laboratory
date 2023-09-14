import styles from "./not-found.module.css";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img
        src="/creative-laboratory/images/404.jpeg"
        alt=""
        className={styles.image}
      />
      <p className={styles.text}>404 error</p>
      <p className={styles.text}>PAGE NOT FOUND</p>
    </div>
  );
};

export default ErrorPage;
