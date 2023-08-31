import styles from "./footer.module.css";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vk.com/creative_laboratory.moscow"
        className={styles.linkSocial}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SlSocialVkontakte color="white" size={23} />
      </a>
      <a
        href="https://wa.me/79998840821?text=Здравствуйте,%20хочу%20купить%20у%20Вас%20игрушку!"
        className={styles.linkSocial}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp color="white" size={21} />
      </a>
      <a
        href="tg://resolve?domain=iuliya_21"
        className={styles.linkSocial}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane color="white" size={21} />
      </a>
    </footer>
  );
};

export default Footer;
