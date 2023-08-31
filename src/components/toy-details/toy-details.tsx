import React, { useEffect, useState } from "react";
import styles from "./toy-details.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { Toy } from "../../services/types";
import { useParams } from "react-router-dom";

const ToyDetails: React.FC = () => {

  const { _id } = useParams();
  const [currentToy, setCurrentToy] = useState<Toy | null | undefined>(null);
  const toys = useSelector<RootState, Toy[] | null>((store) => store?.data?.toys);

  useEffect(() => {
    if (toys) {
      const toy = toys.find((toy) => toy.id === _id);
      setCurrentToy(toy);
    }
  }, [_id, toys]);

  if (!toys) {
    return <p className={styles.loader}>Загрузка...</p>;
  }

  return (currentToy) ? (
    <div className={styles.container}>
      <h3 className={styles.title}>{currentToy.name}</h3>
      <img src={currentToy.img} alt={currentToy.name} className={styles.image}/>
      <p className={styles.price}>{currentToy.price} &#8381;</p>
      <p className={styles.subtitle}>{currentToy.description}</p>
    </div>
  ) : <div></div>;
};

export default ToyDetails;
