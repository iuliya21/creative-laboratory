import { Toys } from "../../utils/utils";
import Card from "../card/card";
import Description from "../description/description";
import Section from "../section/section";
import styles from "./main.module.css";
import uuid from "react-uuid";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <Description />
      <Section title="Текстильные интерьерные игрушки">
        {Toys.map((item, index) => (
          <Card key={uuid()} image={item.img} title={item.name} price={item.price}/>
        ))}
      </Section>
    </main>
  );
};

export default Main;
