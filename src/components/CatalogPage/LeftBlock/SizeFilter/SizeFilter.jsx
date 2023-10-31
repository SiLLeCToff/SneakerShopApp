import React, {useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline/index.js";
import styles from "../BrandsFilter/BrandFilter.module.css";
import SliderPrice from "../PriceFilter/SliderPrice.jsx";

const SizeFilter = () => {
    const [open, setOpen] = useState(true)
    const sizes = [
        { size: 38 },
        { size: 39 },
        { size: 40 },
        { size: 41 },
        { size: 42 },
        { size: 43 },
        { size: 44 },
        { size: 45 },
    ];
    const [activeFilters, setActiveFilters] = useState([]);
    const handleFilterClick = (filter) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter((item) => item !== filter));
        } else {
            setActiveFilters([...activeFilters, filter]);
        }
    };


    const handleClick = () => {
        if(open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    const availableFilters = ['38','39', '40', '41', '42', '43', '44', '45'];

    return (
        <>
            <div onClick={handleClick} className={`flex justify-between items-center w-full h-10 cursor-pointer border-b ${open ? "border-transparent" : null}`}>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between items-center w-full">
                        <a className="font-medium">РАЗМЕР</a>
                        <ChevronRightIcon className={`flex w-6 h-6 ${open ? styles.rotateDown : styles.notRotate}`}/>
                    </div>
                </div>
            </div>
    {open &&
    <div className="flex flex-wrap gap-3 border-b pb-4 justify-center mb-10 ">
        {sizes.map((filter, index) => <div key={index}
            onClick={() => handleFilterClick(filter.size)}
            className={`flex 2xl:w-14 2xl:h-14 md:w-12 md:h-12 h-10 w-10 border border-solid rounded-xl cursor-pointer justify-center items-center ${activeFilters.includes(filter.size) ? 'border-black border-2' : 'border-gray-200'}`}
            //                                           className={`flex 2xl:w-14 2xl:h-14 md:w-12 md:h-12 h-10 w-10  border border-solid rounded-xl cursor-pointer justify-center items-center ${activeFilters.includes(filter) ? 'border-black bg-black text-white' : 'border-gray-200'}`}
        >

            <p>{filter.size}</p>
        </div>)}

    </div>}
        </>
    );
};

export default SizeFilter;