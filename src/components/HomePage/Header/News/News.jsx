import React, {useState} from "react";
import styles from "./News.module.css";
import leftArrow from "../../../../icons/leftArrow.svg";
import rightArrow from "../../../../icons/rightArrow.svg";
import logo from "../../../../images/logo.jpg";
import search from "../../../../icons/search.svg";
import cart from "../../../../icons/cart.svg";
export const News = () => {
    const newsItems = [
        "-20% на новую коллекцию Jordan",
        "Только оригинальная продукция",
        "Бесплатная доставка"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    };
  return (
    <div className={styles.news}>
      <a onClick={handlePrevSlide}>
        <img src={leftArrow} alt="Left Arrow" />
      </a>
        <span className="flex w-[280px] text-center justify-center items-center">{newsItems[currentIndex]}</span>
      <a onClick={handleNextSlide}>
        <img src={rightArrow} alt="Right Arrow" />
      </a>
    </div>
  );
};
