import React from "react";
import styles from "../styles/HeartComponent.module.css";

const HeartComponent = ({ onClick }) => {
  return (
    <>
      <div className={`${styles.image} ${styles.grow}`} onClick={onClick}>
        <img src="/march30_date.avif" alt="Heart" className={styles.img} />
      </div>
      <div className={styles.messageContainer}>
        <p>Hey Vedu! 😊</p>
        <p>Here’s our little date night plan 🌙✨</p>
        <ul className={styles.itinerary}>
          <li><strong>7:20 PM –</strong> We spend some time together 💖</li>
          <li><strong>7:50 PM –</strong> Dinner prep begins 🍝👩‍🍳</li>
          <li><strong>8:30 PM –</strong> Surprise awaits! 🎁✨</li>
          <li><strong>9:00 PM –</strong> Chill + hangout (as long as you want) 🛋️💬</li>
        </ul>
        <p className={styles.note}>
          Can’t wait to enjoy this evening with you. 💕
        </p>
      </div>
    </>
  );
};

export default HeartComponent;