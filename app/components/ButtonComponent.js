'use client'
import React, { useState } from "react";
import HeartComponent from "./HeartComponent";
import styles from "../styles/ButtonComponent.module.css";

const ButtonComponent = () => {
  const [showHeart, setShowHeart] = useState(false);

  const handleButtonClick = () => {
    setShowHeart(true);
  };

  const handleHeartClick = () => {
    setShowHeart(false);
  };

  return (
    <div className={styles.container}>
      {!showHeart ? (
        <button
          className={`${styles.button} ${
            showHeart ? styles.shrink : ""
          }`}
          onClick={handleButtonClick}
        >
          Press
        </button>
      ) : (
        <HeartComponent onClick={handleHeartClick} />
      )}
    </div>
  );
};

export default ButtonComponent;