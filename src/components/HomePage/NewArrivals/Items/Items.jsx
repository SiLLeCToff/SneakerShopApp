import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSneakers } from "../../../../store/SneakersActions";
import styles from "./Items.module.css";
import IsLoading from "../../../IsLoading/IsLoading.jsx";
import {getAllBrands} from "../../../../store/BrandActions.jsx";
import {useNavigate} from "react-router-dom";

export const Items = () => {
  const items = useSelector((state) => state.sneakers.filteredSneakers);
  const brands = useSelector((state)=> state.brand)
    const navigate = useNavigate()


  const dispatch = useDispatch();

const checkBrands = async () => {
  try {
   const response = await getAllBrands()
  } catch (error) {
    console.error("Не удалось получить бренды:", error)
  }
}

const handleRedirect = (id) => {
    navigate(`/snacker/${id}`)
}


  useEffect(() => {
     checkBrands()
    getAllSneakers(dispatch)

  }, [dispatch]);

  return (
      <>

        {brands && <div className={styles.products}>
          {/* -------------- 1 ITEM ------------- */}

          {items.slice(0, 4).map((item, index) => (
              <div key={index} className={styles.items} onClick={() =>handleRedirect(item.id)}>
                <div className={styles.photo}>
                  <img src={`http://localhost:4500/${item.img}`} alt="photo"/>
                </div>
                <div className={styles.itemsText}>
                  <span
                      className={styles.brandText}>{brands && brands.find((brand)  => brand.id === item.brandId).name}</span>
                  <span className={styles.modelText}>{item.name}</span>
                  <div className="flex gap-3">
                    <span className={styles.priceTextSale}>{item.price} Руб</span>
                    {/* <span className={styles.priceTextSale2}>40.000 Руб</span> */}
                  </div>
                </div>
              </div>
          ))}
        </div>}
      </>
  );
};