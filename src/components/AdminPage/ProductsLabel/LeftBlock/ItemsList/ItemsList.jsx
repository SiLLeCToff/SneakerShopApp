import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeItemChange } from "../../../../../store/propsSlice";
import { setSneakers } from "../../../../../store/sneakersSlice";
import styles from "./ItemsList.module.css";
import {noLoading, setLoading} from "../../../../../store/authSlice.jsx";
import {getAllBrands} from "../../../../../store/BrandActions.jsx";
import {setBrands} from "../../../../../store/brandSlice.jsx";
import {selectCurrentPage, selectItemsPerPage, setCurrentPage} from "../../../../../store/paginationSlice.jsx";


const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const imgUrl = import.meta.env.VITE_REACT_APP_IMG_URL;
export const ItemsList = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage)
  const itemsPerPage = useSelector(selectItemsPerPage
  )
  const brands = useSelector((state) => state.brand);
  const sneakers = useSelector((state) => state.sneakers.filteredSneakers);
  const sortedSneakers = [...sneakers].sort((a, b) => a.id - b.id);
  const brandName = async (id) => {
    const foundBrand = await brands.find((brand) => brand.id === id);
    console.log(foundBrand)
    // const foundBrand = await brands.find((brand) => brand.id === Id);
    // console.log(foundBrand)
    // return foundBrand ? foundBrand.name : null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedSneakers = sortedSneakers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }


  const [activeId, setActiveId] = useState(null);
  const [activeItemInfo, setActiveItemInfo] = useState(null);

  const handleItemClick = (item) => {
    setActiveItemInfo(item);
    setActiveId(item.id);
    dispatch(activeItemChange(item));
  };

  const getAllSneakers = async () => {
    try {
      dispatch(setLoading())
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}api/snacker`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response2 = await getAllBrands();
      const brands = response2;
      const sneakers = response.data.rows;
      // console.log(brands.find(brand => brand.id === sneakers.find(item) => item.brandId))
      dispatch(setBrands(brands))
      dispatch(setSneakers(sneakers));
    } catch (error) {
      console.error("Ошибка при получении товаров:", error);
    } finally {
      dispatch(noLoading())
    }
  };

  useEffect(() => {
    getAllSneakers();
  }, [dispatch]);

  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault(); // Предотвратить стандартное контекстное меню браузера
    if (e.button === 2) { // Проверяем, что это правая кнопка мыши (код 2)
      setShowContextMenu(true);
      setContextMenuPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleDeleteClick = () => {
    // Логика удаления элемента
    setShowContextMenu(false); // Скрыть контекстное меню после удаления
  };

  return (
    <div className={styles.items}>
      {displayedSneakers.map((item, index) => (
          <div key={item.id} onContextMenu={handleContextMenu}>
        <div
          key={item.id}
          className={`${styles.item} ${
            activeId === item.id ? "border-stone-500 shadow-inner" : ""
          }`}
          onClick={() => handleItemClick(item)}
        >
          <img src={`${imgUrl}${encodeURIComponent(item.name)}?alt=media`} alt="photo" />
          <p className="font-medium">
            {brands.find(brand => brand.id === item.brandId) ? brands.find(brand => brand.id === item.brandId).name : ''} {item.name}
          </p>
          <p className="opacity-60">{item.price.toLocaleString('ru-RU')} руб</p>
          <div className="flex">
            <p className="opacity-60 text-xs">Склад&nbsp;</p>
            <p className="text-xs">{item.stock}</p> &nbsp;
            <p className="opacity-60 text-xs">Продано&nbsp;</p>
            <p className="text-xs">{item.sold}</p>
          </div>
        </div>
      {showContextMenu && (
        <div
        style={{
        position: "fixed",
        top: contextMenuPosition.y,
        left: contextMenuPosition.x,
        background: "#fff",
        border: "1px solid #ccc",
        padding: "10px",
        zIndex: 999,
      }}
    >
      <button onClick={handleDeleteClick}>Удалить</button>
    </div>
  )}
</div>
      ))}
    </div>
  );
};
