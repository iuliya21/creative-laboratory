import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";
import Description from "../description/description";
import Section from "../section/section";
import styles from "./main.module.css";
import uuid from "react-uuid";
import { AppDispatch, RootState } from "../../services/store";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import ToyDetails from "../toy-details/toy-details";
import { deleteDetails, selectedToy } from "../../services/sliceDetailsToy";
import { Toy } from "../../services/types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Main: React.FC = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isModalOpen, openModal, closeModal } = useModal();
  const toys = useSelector<RootState | undefined>((store) => store?.data?.toys);

  useEffect(() => {
    if (_id) {
      openModal();
    }
  }, [_id]);

  let toysTextile: Toy[] = [];

  if (Array.isArray(toys)) {
    toysTextile = toys.filter((item) => item.category === "textile");
  }

  const showModal = (element: Toy) => {
    dispatch(selectedToy(element));
    openModal();
  };

  const hideModal = () => {
    dispatch(deleteDetails());
    navigate("/");
    closeModal();
  };

  return  (
    <main className={styles.main}>
      <Description />
      <Section title="Текстильные интерьерные игрушки">
        {toysTextile.map((item, index) => (
          <Card
            key={uuid()}
            image={item.img}
            title={item.name}
            price={item.price}
            openModal={() => showModal(item)}
            id={item.id}
          />
        ))}
      </Section>

      {isModalOpen && (
        <Modal onClosePopup={hideModal}>
          <ToyDetails />
        </Modal>
      )}
    </main>
  );
};

export default Main;
