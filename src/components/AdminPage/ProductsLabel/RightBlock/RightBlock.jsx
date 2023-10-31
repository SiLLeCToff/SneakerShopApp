import React, {useEffect, useState} from "react";
import { EditProduct } from "./EditProduct/EditProduct";
import { RadioMenu } from "./RadioMenu/RadioMenu";
import styles from "./RightBlock.module.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteSneaker, getAllSneakers, updateSneaker} from "../../../../store/SneakersActions.jsx";
import {noLoading, setLoading} from "../../../../store/authSlice.jsx";
import axios from "axios";

export const RightBlock = () => {
    const activeItem = useSelector((state) => state.props.activeItemA);
    const dispatch = useDispatch()
   /////////////////////////////////////////////////////////////////////

    const id = activeItem ? activeItem.id : "";  /// DONE
    const [name, setName] = useState(activeItem ? activeItem.name : null)
    const [brandId, setBrandId] = useState(null)   /// DONE
    const [price, setPrice] = useState(activeItem ? activeItem.price : 0)

    /////////////////////////////////////////////////////////////////////

//     console.log(id) // id для обновления данных
// console.log(brandId)
    useEffect( () => {
        if (activeItem) {
            setPrice(activeItem.price)
            setName(activeItem.name)
        }

    }, [activeItem, dispatch, getAllSneakers]);
const handleDeleteSneaker = async () => {
    try {
        dispatch(setLoading())
   await  dispatch(deleteSneaker(id))

    }   catch (error) {
        console.error("Не удалось удалить товар:", error)
    } finally {
        getAllSneakers(dispatch)
        dispatch(noLoading())
    }
}


    const handleClick = async (e) => {
        try {
            console.log(id)
            dispatch(setLoading());
            const response = await dispatch(updateSneaker(id, name, price, brandId));
            // Обработка успешного ответа
            getAllSneakers(dispatch)
            // console.log("Данные успешно обновлены:", response);
        } catch (error) {
            console.error("Не удалось обновить данные:", error);
            // Обработка ошибки
        } finally {
            dispatch(noLoading());
        }
    };



    return (
    <div className="relative flex flex-col justify-start gap-1 items-center rounded-3xl bg-white border border-gray-50 w-3/12 h-full pt-5">
      <h1 className=" text-lg justify-center items-center flex w-80% h-50px">
        Редактировать Товар
      </h1>
      <RadioMenu />
      <EditProduct  id={setBrandId} price={setPrice} name={setName}/>
      <div className=" absolute drop-shadow-lg shadow-gray-400 border outline outline-gray-100 outline-1  border-gray-100 rounded-3xl bottom-0 w-full h-10% items-center bg-white">
        <div className="border-t border-b border-r items-center justify-center flex border-gray-200 rounded-3xl h-full">
          <div className="w-90% flex justify-between items-center h-full">
            <button onClick={handleDeleteSneaker} className={styles.button2}>Удалить</button>
            <button onClick={(e) => handleClick(e)} className={styles.button}>Обновить</button>
          </div>
        </div>
      </div>
    </div>
  );
};
