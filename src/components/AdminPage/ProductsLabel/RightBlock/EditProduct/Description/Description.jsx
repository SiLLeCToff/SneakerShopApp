import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Description.module.css";
import BrandMenu from "./BrandMenu/BrandMenu.jsx";

export const Description = ({id, setName}) => {
  const activeItem = useSelector((state) => state.props.activeItemA);

  const [brandId, setBrandId] = useState(activeItem ? activeItem.brandId : "");
  const [inputName, setInputName] = useState(activeItem ? activeItem.name : "");

  useEffect(() => {

    if (activeItem && activeItem.name !== inputName) {
      setInputName(activeItem.name);
    }
    if (activeItem && activeItem.brandId !== brandId) {
      setBrandId(activeItem.brandId);
    }
  }, [activeItem]);

  const handleInputChange = (e) => {
    setInputName(e.target.value);
    setName(e.target.value)
  };



  return (
    <div className={styles.scrollMenu}>
      <p className="flex font-medium">Описание</p>
      <div className="flex flex-col w-full border rounded-2xl py-2 border-stone-200">
        <div className="flex w-full flex-col items-center">
          <p className="w-full pl-2 flex text-sm font-light">Название модели</p>
          <input
            onChange={handleInputChange}
            value={inputName}
            placeholder="Название"
            className="py-1 px-2 flex w-90% border rounded-xl border-stone-200 text-sm font-normal box-content"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <p className="w-full flex pl-2 text-sm font-light">Описание</p>
          <textarea
            className="py-1 px-2 w-90% box-content border rounded-xl h-20 border-stone-200 text-sm font-normal resize-none overflow-hidden"
            type="text"
            placeholder="Описание товара"
          />
        </div>
      </div>
      <p className="flex font-medium">Категория</p>
      <div className="flex flex-col w-full border rounded-2xl py-2 border-stone-200 mb-20">
        <div className="flex w-full flex-col items-center">
          <p className="w-full pl-2 flex text-sm font-light">Бренд</p>
          <BrandMenu onSelect={id} />
        </div>
        <div className="flex w-full flex-col items-center">
          <p className="w-full flex pl-2 text-sm font-light">Описание</p>
          <textarea
            className="py-1 px-2 w-90% box-content border rounded-xl h-20 border-stone-200 text-sm font-normal resize-none overflow-hidden"
            type="text"
            placeholder="Описание товара"
          />
        </div>
      </div>
    </div>
  );
};
