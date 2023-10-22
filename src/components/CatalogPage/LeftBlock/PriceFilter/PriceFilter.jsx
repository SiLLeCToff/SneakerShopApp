import React, {useEffect, useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline/index.js";
import styles from "../BrandsFilter/BrandFilter.module.css";
import SliderPrice from "./SliderPrice.jsx";

const PriceFilter = ({onFilteredSneakersChange}) => {
    const [open, setOpen] = useState(true)
    const [filteredSneakers, setFilteredSneakers] = useState(null); // Состояние для отфильтрованных товаров

    const handleSliderChange = (filteredSneakers) => {

        setFilteredSneakers(filteredSneakers)
        onFilteredSneakersChange(filteredSneakers);
    };

    const handleClick = () => {
        if(open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    useEffect(() => {
    }, []);


    return (
        <>
            <div onClick={handleClick} className={`flex justify-between items-center w-full h-10 cursor-pointer border-b ${open ? "border-transparent" : null}`}>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between items-center w-full">
                        <a className="flex font-medium">ЦЕНА</a>
                        <ChevronRightIcon className={`flex w-6 h-6 ${open ? styles.rotateDown : styles.notRotate}`}/>
                    </div>
                </div>
            </div>
    {open &&
    <div className="border-b pb-4">
        <SliderPrice onFilteredSneakersChange={handleSliderChange}/>
    </div>
    }
        </>
    );
};

export default PriceFilter;