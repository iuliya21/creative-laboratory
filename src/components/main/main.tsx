import { useSelector } from "react-redux";
import { Toys } from "../../utils/utils";
import Card from "../card/card";
import Description from "../description/description";
import Section from "../section/section";
import styles from "./main.module.css";
import uuid from "react-uuid";
import { RootState } from "../../services/store";

type Toy = {
  category: string;
  img: string;
  name: string;
  price: number;
  description: string;
  id: string;
}

const Main: React.FC = () => {

  const toys = useSelector<RootState | undefined>((store) => store?.data?.toys);
  let toysTextile: Toy[] = [];
  
  if (Array.isArray(toys)) {
   toysTextile = toys.filter((item) => item.category === "textile");
  }

  return (
    <main className={styles.main}>
      <Description />
      <Section title="Текстильные интерьерные игрушки">
        {toysTextile.map((item, index) => (
          <Card key={uuid()} image={item.img} title={item.name} price={item.price}/>
        ))}
      </Section>
    </main>
  );
};

export default Main;
