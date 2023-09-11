import { useSelector } from "react-redux";
import Card from "../card/card";
import Description from "../description/description";
import Section from "../section/section";
import styles from "./main.module.css";
import uuid from "react-uuid";
import { RootState } from "../../services/store";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";
import ToyDetails from "../toy-details/toy-details";
import { Toy } from "../../services/types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  categories,
  allCategory,
  newYearCategory,
  textileCategory,
  fimoDollCategory,
  chinaDollCategory,
  woodCategory,
} from "../../utils/utils";

const Main: React.FC = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();

  const categoryCurrent = useSelector(
    (store: RootState) => store.category.categorySelected
  );

  const toys = useSelector<RootState | undefined>((store) => store?.data?.toys);

  useEffect(() => {
    if (_id) {
      openModal();
    }
  }, [_id]);

  let toysTextile: Toy[] = [];
  let toysNewYear: Toy[] = [];

  if (Array.isArray(toys)) {
    toysTextile = toys.filter((item) => item.category === "textile");
    toysNewYear = toys.filter((item) => item.category === "newyear");
  }

  const showModal = () => {
    openModal();
  };

  const hideModal = () => {
    navigate("/creative-laboratory/");
    closeModal();
  };

  return (
    <main className={styles.main}>
      <Description />
      {(categoryCurrent === allCategory ||
        categoryCurrent === newYearCategory) && (
        <Section title="Игрушки к новому году 2024">
          {toysNewYear.map((item) => (
            <Card
              key={uuid()}
              image={item.img}
              title={item.name}
              price={item.price}
              openModal={() => showModal()}
              id={item.id}
            />
          ))}
        </Section>
      )}
      {(categoryCurrent === allCategory ||
        categoryCurrent === textileCategory) && (
        <Section title="Текстильные интерьерные игрушки">
          {toysTextile.map((item) => (
            <Card
              key={uuid()}
              image={item.img}
              title={item.name}
              price={item.price}
              openModal={() => showModal()}
              id={item.id}
            />
          ))}
        </Section>
      )}

      {isModalOpen && (
        <Modal onClosePopup={hideModal}>
          <ToyDetails />
        </Modal>
      )}
    </main>
  );
};

export default Main;
