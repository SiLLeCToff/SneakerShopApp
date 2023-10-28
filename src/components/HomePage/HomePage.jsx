import React, {useEffect} from "react";
import { Footer } from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./HomePage.module.css";
import { Main } from "./Main/Main";
import { NewArrivals } from "./NewArrivals/NewArrivals";
import {getAllBrands} from "../../store/BrandActions.jsx";
import {setBrands} from "../../store/brandSlice.jsx";
import {useDispatch} from "react-redux";
import {ItemsNike} from "./ItemsNike/ItemsNike.jsx";
import {ItemsJordan} from "./ItemsJordan/ItemsJordan.jsx";


export const HomePage = () => {
    const dispatch= useDispatch()
    // const getStateBrands = async () => {
    //     try {
    //         const response = await getAllBrands();
    //         dispatch(setBrands(response));
    //     } catch (error) {
    //         console.error("Ошибка получения брендов:", error);
    //     }
    // };
    useEffect(() => {
        // getStateBrands(dispatch)
    }, []);
  return (
    <div>
      <div className={styles.mains}>
        <Header />
          <Main />
      </div>
      <NewArrivals />
        <ItemsNike/>
        <ItemsJordan/>
      <Footer />
    </div>
  );
};
