import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Price.module.css";

export const Price = ({setPriceProp}) => {
  const activeItem = useSelector((state) => state.props.activeItemA);
  const [inputPrice, setInputPrice] = useState(Number(
    activeItem ? activeItem.price : 0)
  );
  useEffect(() => {
    // Обновляем test, когда activeItem.name изменяется
    if (activeItem && activeItem.price !== inputPrice) {
      setInputPrice(activeItem.price);
      setPriceProp(Number(activeItem.price))
      console.log(inputPrice)
    }
  }, [activeItem]);
  const handleInputChange = (e) => {
    setInputPrice(e.target.value);
    setPriceProp(Number(e.target.value))
  };
  return (
      <>
        {activeItem ? (<div className={styles.scrollMenu}>
      <p className="flex font-medium">Цена</p>
      <div className="flex flex-col w-full border rounded-2xl py-2 border-stone-200 gap-4">
        <div className="flex w-full flex-col items-center">
          <p className="w-full pl-2 flex text-sm font-light">Цена</p>
          <input
            type="number"
            placeholder="Сумма"
            onChange={handleInputChange}
            value={inputPrice}
            className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <p className="w-full flex pl-2 text-sm font-light">Цена со Скидкой</p>
          <input
            type="number"
            placeholder="Сумма"
            className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"
          />
        </div>
      </div>
      <p className="flex font-medium">Дополнительно</p>
      <div className="flex flex-col w-full border rounded-2xl py-2 gap-2 border-stone-200 mb-20">
        <div className="flex w-full items-center justify-start">
          <input type="checkbox" className={styles.uiCheckbox}></input>
          <p className="pl-2 flex text-sm font-light">Хит Сезона</p>
        </div>
        <div className="flex w-full items-center justify-start">
          <input type="checkbox" className={styles.uiCheckbox}></input>
          <p className="pl-2 flex text-sm font-light">New</p>
        </div>
        <div className="flex w-full items-center justify-start">
          <input type="checkbox" className={styles.uiCheckbox}></input>
          <p className="pl-2 flex text-sm font-light">2023</p>
        </div>
        <div className="flex w-full items-center justify-start">
          <input type="checkbox" className={styles.uiCheckbox}></input>
          <p className="pl-2 flex text-sm font-light">Распродажа</p>
        </div>
      </div>
    </div>) : null}
      </>
  );
};
