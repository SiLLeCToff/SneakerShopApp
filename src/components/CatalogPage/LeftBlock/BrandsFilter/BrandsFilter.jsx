import React, {useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline/index.js";
import BrandsCheckBoxes from "./BrandsCheckBoxes.jsx";
import {useSelector} from "react-redux";
import styles from "./BrandFilter.module.css"
import {Search} from "./Search/Search.jsx";

const BrandsFilter = () => {
    const [open, setOpen] = useState(true)
    const brands = useSelector((state)=> state.brand)

    const handleClick = () => {
        if(open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (
        <>
        <div onClick={handleClick} className={`flex justify-between items-center w-full h-10 cursor-pointer  border-b ${open ? "border-transparent" : null}`}>
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-center w-full">
                    <a className="flex font-medium">БРЕНД</a>
                    <ChevronRightIcon className={`flex w-6 h-6 ${open ? styles.rotateDown : styles.notRotate}`}/>
                </div>
            </div>
        </div>
    {open &&
        <div className="flex flex-col gap-4 border-b pb-4">
        <Search/>
    <BrandsCheckBoxes/>
        </div>
    }
        </>
    );
};

export default BrandsFilter;