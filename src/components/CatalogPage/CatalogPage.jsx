import React, {useEffect} from 'react';
import styles from './CatalogPage.module.css'
import Header from "../HomePage/Header/Header.jsx";
import {Footer} from "../HomePage/Footer/Footer.jsx";
import Catalog from "./Catalog/Catalog.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllBrands} from "../../store/BrandActions.jsx";
import {getAllSneakers} from "../../store/SneakersActions.jsx";

const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getAllBrands()
        getAllSneakers(dispatch)

    }, []);
    return (
        <>
            <div className={styles.mains}>
                <Header />
                <Catalog/>
                <Footer />
            </div>
        </>
    );
};

export default CatalogPage;