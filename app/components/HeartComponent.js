import React from "react";
import styles from "../styles/HeartComponent.module.css";

const HeartComponent = ({ onClick }) => {
  return (
    <div className={`${styles.image} ${styles.grow}`} onClick={onClick}>
      <img src="/heart.png" alt="Heart" className={styles.img} />
    </div>
  );
};

export default HeartComponent;