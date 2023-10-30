import React, {useEffect, useState} from 'react';
import styles from "./RightBlock.module.css"
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage, selectItemsPerPage} from "../../../store/paginationSlice.jsx";
import {filterSneakers} from "../../../store/sneakersSlice.jsx";
import {useNavigate} from "react-router-dom";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const RightBlock = () => {
    const navigate = useNavigate()
    const brands = useSelector((state) => state.brand);
    const dispatch = useDispatch();
    const sneakers = useSelector((state) => state.sneakers.filteredSneakers);

    const sortedSneakers = [...sneakers].sort((a, b) => a.id - b.id);
    const currentPage = useSelector(selectCurrentPage)
    const itemsPerPage = useSelector(selectItemsPerPage
    )

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedSneakers = sortedSneakers.slice(startIndex, endIndex);

    const handleOpenItem = (id) => {
        navigate(`/snacker/${id}`)
    }

    useEffect(() => {
    }, []);

    return (
        <div className={styles.container}>
            <div className=' mt-[18px] flex w-[90%]'>
                <p className="font-medium">{sneakers.length} товаров</p>
            </div>
            <div className={styles.items}>
                {displayedSneakers.map((item, index) => (
                    <div key={item.id}>
                        <div
                            key={item.id}
                            className={styles.item}
                            onClick={() => handleOpenItem(item.id)}
                        >
                            <div className="flex 2xl:w-[300px] 2xl:h-[200px] w-200px h-150px">
                            <img src={`${apiUrl}${item.img}`} alt="photo" />
                            </div>
                            <p className="font-medium">
                                {brands.find(brand => brand.id === item.brandId) ? brands.find(brand => brand.id === item.brandId).name : ''} {item.name}
                            </p>
                            <p className="opacity-60">{item.price.toLocaleString('ru-RU')} руб</p>
                            <div className="flex">

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightBlock;