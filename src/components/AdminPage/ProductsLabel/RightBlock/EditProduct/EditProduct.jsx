import React from "react";
import { useSelector } from "react-redux";
import { Description } from "./Description/Description";
import styles from "./EditProduct.module.css";
import { Inventory } from "./Inventory/Inventory";
import { Price } from "./Price/Price";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const imgUrl = import.meta.env.VITE_REACT_APP_IMG_URL;
export const EditProduct = ({id, price, name}) => {
  const radioMenu = useSelector((state) => state.props.radioMenuA);
  const activeItem = useSelector((state) => state.props.activeItemA);
  const itemName = activeItem ? activeItem.name : "";

  return (
    <div className={styles.main}>
      {itemName && (
        <img
        src={`${imgUrl}${encodeURIComponent(itemName.name)}?alt=media`}
          alt="image"
          className="flex w-90% 2xl:h-200px h-150px rounded-2xl mb-4 justify-center items-center bg-cover object-cover"
        />
      )}
      {radioMenu === "radio-1" && <Description id={id} setName={name} />}
      {radioMenu === "radio-2" && <Inventory />}
      {radioMenu === "radio-3" && <Price setPriceProp={price} />}
    </div>
  );
};
