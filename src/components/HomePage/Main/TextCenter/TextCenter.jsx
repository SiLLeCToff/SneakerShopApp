import React from "react";
import Button from "@mui/material/Button";
import { Arrow } from "./Arrow";
import styles from "./TextCenter.module.css";
import {useNavigate} from "react-router-dom";

export const TextCenter = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate("/catalog")
    }
  return (
    <div className={styles.main}>
      <button onClick={handleClick}
              className="flex z-10  whitespace-nowrap bg-black text-white items-center justify-center gap-2 py-3 px-4 rounded-3xl border border-black hover:bg-white hover:text-black"
      >
        Смотреть каталог
      <Arrow/></button>
    </div>
  );
};
