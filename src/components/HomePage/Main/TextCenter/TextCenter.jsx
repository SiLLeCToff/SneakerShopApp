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
      <Button onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: "black",
          display: "inline-flex",
          paddingY: "18px",
          paddingX: "36px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          whiteSpace: "nowrap",
          borderRadius: "50px",
          marginTop: "100px",
          fontFamily: "Rubik",
        }}
        endIcon={<Arrow />}
      >
        Смотреть каталог
      </Button>
    </div>
  );
};
