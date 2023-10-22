import React from 'react';
import {ChevronRightIcon} from "@heroicons/react/24/outline/index.js";
import BrandsFilter from "./BrandsFilter/BrandsFilter.jsx";
import PriceFilter from "./PriceFilter/PriceFilter.jsx";
import SizeFilter from "./SizeFilter/SizeFilter.jsx";

const LeftBlock = ({onFilteredSneakersChange}) => {

   const onFilteredSneakersHandle = (items) => {
       onFilteredSneakersChange(items)
   }
    return (
        <div className='flex flex-col w-20% p-2'>
            <BrandsFilter/>
            <PriceFilter onFilteredSneakersChange={onFilteredSneakersHandle}/>
            <SizeFilter/>
        </div>
    );
};

export default LeftBlock;