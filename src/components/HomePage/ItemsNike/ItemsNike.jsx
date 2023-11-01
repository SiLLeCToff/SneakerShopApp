import Button from "@mui/material/Button";
import React from "react";
import { Items } from "./Items/Items";
import styles from "./ItemsNike.module.css";
import {Pagination} from "../../CatalogPage/RightBlock/Pagination/Pagination.jsx";
import {useNavigate} from "react-router-dom";

export const ItemsNike = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <h2 className="text-4xl max-w-md font-bold whitespace-nowrap">
        NIKE Коллекция
      </h2>
      <Items />
      {/* <div className={styles.pages}>1-9</div> */}
      <div className={styles.button}>
        <Button
            onClick={()=> navigate('/catalog?brand=1')}
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
