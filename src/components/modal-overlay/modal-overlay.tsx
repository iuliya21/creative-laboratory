import { TModal } from "../../services/types";
import styles from "./modal-overlay.module.css";

const ModalOverlay: React.FC<TModal> = ({ children, onClosePopup }) => {
  return (
    <div className={styles.overlay} onClick={onClosePopup}>
      {children}
    </div>
  )
}

export default ModalOverlay;