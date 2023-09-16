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
  const toysAnother = useSelector<RootState | undefined>((store) => store?.dataAnother?.toys);

  useEffect(() => {
    if (Array.isArray(toys) && Array.isArray(toysAnother)) {
      const toysCurrent = toys.concat(toysAnother);
      const toy = toysCurrent.find((toy) => toy.id === _id);
      setCurrentToy(toy);
    }
    // if (toys) {
    //   const toy = toys.find((toy) => toy.id === _id);
    //   setCurrentToy(toy);
    // }
  }, [_id, toys, toysAnother]);

  if (!toys) {
    return <p className={styles.loader}>Загрузка...</p>;
  }

  return (currentToy) ? (
    <div className={styles.container}>
      <h3 className={styles.title}>{currentToy.name}</h3>
      <img src={currentToy.img} alt={currentToy.name} className={styles.image}/>
      <p className={styles.subtitle}>{currentToy.description}</p>
      <p className={styles.price}>{currentToy.price} &#8381;</p>
    </div>
  ) : <div></div>;
};

export default ToyDetails;
