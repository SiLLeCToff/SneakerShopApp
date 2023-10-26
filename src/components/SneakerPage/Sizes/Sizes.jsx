import React, {useState} from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline/index.js";
import styles from "./Sizes.module.css"
const Sizes = () => {
    const [open, setOpen] = useState(true)
    const [activeFilters, setActiveFilters] = useState('');

    const handleFilterClick = (filter) => {

            setActiveFilters(filter);
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
            <div onClick={handleClick} className={"flex justify-between items-center w-full h-10 border-b"}>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between items-center w-full">
                        <a className="font-medium">РАЗМЕР</a>

                    </div>
                </div>
            </div>

                <div className="flex flex-wrap w-full gap-3 border-b pb-4 justify-center items-center mb-10 ">
                    {availableFilters.map((filter, index) => <div key={index}
                                                                  onClick={() => handleFilterClick(filter)}
                                                                  // className={`flex 2xl:w-[200px] 2xl:h-[100px] md:w-12 md:h-12 h-10 w-10 border border-solid rounded-xl cursor-pointer justify-center items-center ${activeFilters.includes(filter) ? 'border-black border-2' : 'border-gray-200'}`}
                                                                  className={`flex 2xl:w-[200px] 2xl:h-[100px] md:w-[150px] md:h-[75px] h-10 w-10  border border-solid rounded-xl cursor-pointer justify-center items-center ${activeFilters.includes(filter) ? 'border-black bg-black text-white' : 'border-gray-200'}`}
                    >

                        <p>{filter}</p>
                    </div>)}

                </div>
        </>
    );
};

export default Sizes;