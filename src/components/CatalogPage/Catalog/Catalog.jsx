import React, {useState} from 'react';
import LeftBlock from "../LeftBlock/LeftBlock.jsx";
import RightBlock from "../RightBlock/RightBlock.jsx";
import styles from "./Catalog.module.css";
import {Pagination} from "../RightBlock/Pagination/Pagination.jsx";

const Catalog = () => {
    const [filteredSneakers, setFilteredSneakers] = useState(null);

    const onFilteredSneakersChange = (items) => {
        setFilteredSneakers(items);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div> Bread Crumbs</div>
                <h1 className="flex-1 text-2xl">Кросовки</h1>
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