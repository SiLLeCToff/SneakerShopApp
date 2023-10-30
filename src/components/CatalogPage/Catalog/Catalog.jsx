import React, {useState} from 'react';
import LeftBlock from "../LeftBlock/LeftBlock.jsx";
import RightBlock from "../RightBlock/RightBlock.jsx";
import styles from "./Catalog.module.css";
import {Pagination} from "../RightBlock/Pagination/Pagination.jsx";
import {Link} from "react-router-dom";

const Catalog = () => {
    const [filteredSneakers, setFilteredSneakers] = useState(null);

    const onFilteredSneakersChange = (items) => {
        setFilteredSneakers(items);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className="flex w-1/3 font-light text-[12px]"><Link to='/'>Главная</Link><p className="mx-1">-</p><Link to='/catalog'>Каталог</Link></div>
                <h1 className="flex text-2xl w-1/3 justify-center">Кросовки</h1>
            </div>
            <div className={styles.main}>
                <LeftBlock onFilteredSneakersChange={onFilteredSneakersChange}/>
                <RightBlock onFilteredSneakersChange={filteredSneakers}/>
            </div>

            <Pagination/>
        </div>
    );
};

export default Catalog;