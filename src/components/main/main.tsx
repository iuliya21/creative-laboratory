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
  farforCategory,
  woodCategory,
  flumoCategory,
  teddyCategory,
} from "../../utils/utils";

const Main: React.FC = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { isModalOpen, openModal, closeModal } = useModal();

  const categoryCurrent = useSelector(
    (store: RootState) => store.category.categorySelected
  );

  const toys = useSelector<RootState | undefined>((store) => store?.data?.toys);
  const toysAnother = useSelector<RootState | undefined>((store) => store?.dataAnother?.toys);

  useEffect(() => {
    if (_id) {
      openModal();
    }
  }, [_id]);

  let toysTextile: Toy[] = [];
  let toysNewYear: Toy[] = [];
  let toysFimodoll: Toy[] = [];
  let toysFarfor: Toy[] = [];
  let toysWood: Toy[] = [];
  let toysFlumo: Toy[] = [];
  let toysTeddy: Toy[] = [];

  if (Array.isArray(toys) && Array.isArray(toysAnother)) {
    toysTextile = toys.filter((item) => item.category === "textile");
    toysNewYear = toys.filter((item) => item.category === "newyear");
    toysFimodoll = toys.filter((item) => item.category === "fimodoll");
    toysTeddy = toys.filter((item) => item.category === "teddy");
    toysFarfor = toys.filter((item) => item.category === "farfor");
    toysWood = toys.filter((item) => item.category === "wood").concat(toysAnother.filter((item) => item.category === "wood"));
    toysFlumo = toys.filter((item) => item.category === "flumo");
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
      {(categoryCurrent === allCategory ||
        categoryCurrent === fimoDollCategory) && (
        <Section title="Куклы из полимерной глины fimodoll">
          {toysFimodoll.map((item) => (
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
        categoryCurrent === teddyCategory) && (
        <Section title="Игрушки в технике Teddy">
          {toysTeddy.map((item) => (
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
        categoryCurrent === farforCategory) && (
        <Section title="Будуарные и фарфоровые куклы ChinaDoll">
          {toysFarfor.map((item) => (
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
        categoryCurrent === flumoCategory) && (
        <Section title="Игрушки из пластика flumo">
          {toysFlumo.map((item) => (
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
        categoryCurrent === woodCategory) && (
        <Section title="Деревянные игрушки">
          {toysWood.map((item) => (
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
