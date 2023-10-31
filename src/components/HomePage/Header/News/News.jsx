import React, { useState, useEffect } from "react";
import styles from "./News.module.css";
import leftArrow from "../../../../icons/leftArrow.svg";
import rightArrow from "../../../../icons/rightArrow.svg";

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

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 8000); // каждые 5 секунд

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, []); // Пустой массив зависимостей, чтобы запустить эффект только один раз после монтирования

    return (
        <div className={styles.news}>
            <a onClick={handlePrevSlide}>
                <img src={leftArrow} alt="Left Arrow" />
            </a>
            <span className={`flex w-[280px] text-center justify-center items-center transition-all duration-500`}>
                {newsItems[currentIndex]}
            </span>
            <a onClick={handleNextSlide}>
                <img src={rightArrow} alt="Right Arrow" />
            </a>
        </div>
    );
};