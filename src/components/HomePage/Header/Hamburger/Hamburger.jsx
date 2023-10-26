import React, {useState} from 'react';
import styles from './Hamburger.module.css'
import {duration} from "@mui/material";

const Hamburger = ({open, handleClick}) => {
const [checked, setChecked] = useState(false)

   const handleClicke = (e) => {
    handleClick(e)
       setChecked(!checked)
   }

    return (
        <>
        <label className={`${styles.hamburger} ${open === true ? 'translate-x-[200px] transition-transform duration-500 delay-200' : 'duration-500'}`} onClick={(e) => handleClicke(e)}>
            <input type="checkbox" readOnly checked={checked} />
                <svg viewBox="0 0 32 32">
                    <path className={`${styles.line} ${styles.lineTopBottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className={styles.line} d="M7 16 27 16"></path>
                </svg>
        </label>
            </>
    );
};

export default Hamburger;