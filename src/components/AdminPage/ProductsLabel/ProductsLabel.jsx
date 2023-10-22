import React from 'react';
import styles from "./ProductsLabel.module.css";
import {LeftBlock} from "./LeftBlock/LeftBlock.jsx";
import {RightBlock} from "./RightBlock/RightBlock.jsx";

const ProductsLabel = () => {
    return (
        <main className={styles.mainBlock}>
            <LeftBlock />
            <RightBlock />
        </main>
    );
};

export default ProductsLabel;