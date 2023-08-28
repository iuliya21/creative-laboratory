import { useEffect } from "react";
import { TModal } from "../../services/types";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { IoMdClose } from "react-icons/io";
import { write } from "fs";

const modalRoot: HTMLElement | null = document.getElementById("react-modals");

const Modal: React.FC<TModal> = ({ children, onClosePopup }) => {
  useEffect(() => {
    const closeByEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClosePopup();
      }
    };
    document.addEventListener("keydown", closeByEsc);

    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <ModalOverlay onClosePopup={onClosePopup}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <IoMdClose
          size={50}
          color="grey"
          className={styles.closeButton}
          onClick={onClosePopup}
        />
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;