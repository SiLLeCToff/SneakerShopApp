import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { radioMenuChange } from "../../../../../store/propsSlice";
import styles from "./RadioMenu.module.css";

export const RadioMenu = () => {
  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    const newValue = event.target.value; // Новое значение из радиокнопки
    dispatch(radioMenuChange(newValue)); // Отправляем новое значение в Redux
  };

  return (
    <div className="flex w-90% h-11 justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <div className={styles.container}>
          <div className={styles.tabs}>
            <input
              type="radio"
              id="radio-1"
              name="tabs"
              value="radio-1"
              onChange={handleRadioChange}
            />
            <label className={styles.tab} htmlFor="radio-1">
              Описание
            </label>
            <input
              type="radio"
              id="radio-2"
              name="tabs"
              value="radio-2"
              onChange={handleRadioChange}
            />
            <label className={styles.tab} htmlFor="radio-2">
              Инвентарь
            </label>
            <input
              type="radio"
              id="radio-3"
              value="radio-3"
              name="tabs"
              onChange={handleRadioChange}
            />
            <label className={styles.tab} htmlFor="radio-3">
              Цена
            </label>
            <span className={styles.glider}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
