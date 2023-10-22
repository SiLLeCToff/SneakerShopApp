import React from "react";
import styles from "./News.module.css";
import leftArrow from "../../../../icons/leftArrow.svg";
import rightArrow from "../../../../icons/rightArrow.svg";
import logo from "../../../../images/logo.jpg";
import search from "../../../../icons/search.svg";
import cart from "../../../../icons/cart.svg";
export const News = () => {
  return (
    <div className={styles.news}>
      <a>
        <img src={leftArrow} alt="Left Arrow" />
      </a>
      <span>Акция -20% ко дню ....</span>
      <a>
        <img src={rightArrow} alt="Left Arrow" />
      </a>
    </div>
  );
};
