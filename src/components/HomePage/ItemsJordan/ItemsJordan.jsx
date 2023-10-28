import Button from "@mui/material/Button";
import React from "react";
import { Items } from "./Items/Items";
import styles from "./ItemsJordan.module.css";
import {Pagination} from "../../CatalogPage/RightBlock/Pagination/Pagination.jsx";

export const ItemsJordan = () => {
  return (
    <div className={styles.main}>
      <h2 className="text-4xl max-w-md font-bold whitespace-nowrap">
        Jordan Коллекция
      </h2>
      <Items />
      {/* <div className={styles.pages}>1-9</div> */}
      <div className={styles.button}>
        <Button
          variant="contained"
          sx={{
            height: "auto",
            width: "auto",

            display: "flex",
            backgroundColor: "black",
            paddingY: "18px",
            paddingX: "36px",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
            borderRadius: "50px",
            fontFamily: "Rubik",
          }}
        >
          Показать все
        </Button>
      </div>
      {/*<Pagination/>*/}
    </div>
  );
};
