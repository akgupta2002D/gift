import React from "react";
import styles from "../styles/HeartComponent.module.css";

const HeartComponent = ({ onClick }) => {
  return (
    <>
    <div className={`${styles.image} ${styles.grow}`} onClick={onClick}>
      <img src="/rose.png" alt="Heart" className={styles.img} />
    </div>
    <div className={styles.messageContainer}>
      <p>Hey Vedu! 😊</p>
      <p>Thank you for being there in my life. </p>
      <p>You mean a lot to me.</p>
      <p className={styles.note}>
       Happy Rose Day, my love! 🌹❤️
      </p>
    </div>
    </>
  );
};

export default HeartComponent;