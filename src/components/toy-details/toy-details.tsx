import React from "react";
import styles from "./toy-details.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { Toy } from "../../services/types";

const ToyDetails: React.FC = () => {

  const details = useSelector<RootState, Toy | null>((store) => store?.details?.details);

  if (!details) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{details.name}</h3>
      <img src={details.img} alt={details.name} className={styles.image}/>
      <p className={styles.price}>{details.price} &#8381;</p>
      <p className={styles.subtitle}>{details.description}</p>
    </div>
  );
};

export default ToyDetails;
