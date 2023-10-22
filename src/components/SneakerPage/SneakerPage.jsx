import React, {useEffect, useState} from 'react';
import {Footer} from "../HomePage/Footer/Footer.jsx";
import Header from "../HomePage/Header/Header.jsx";
import Sizes from "./Sizes/Sizes.jsx";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {noLoading, setLoading} from "../../store/authSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllBrands} from "../../store/BrandActions.jsx";
import {setBrands} from "../../store/brandSlice.jsx";
import styles from './SneakerPage.module.css'


const images = [
    "https://nikitaefremov.ru/upload/resize_cache/iblock/009/hekvyhk4mhy7b51rdy5qzq8r061hee52/1000_525_1/cfafc69d-7e01-11ec-b282-f02f74dffd40_310573dd-4e84-11ed-b2b7-f02f74dffd40.jpg",
    "https://grailshop.ru/cdn/shop/products/ct8527_115_8e_1.png?v=1631181530",
    "https://example.com/image3.jpg",
    // Добавьте ссылки на ваши изображения
];

const SneakerPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const urlParts = location.pathname.split("/"); // Разбиваем URL на части по "/"
    const brandLocation = parseInt(urlParts[urlParts.length - 1]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemInfo, setItemInfo] = useState(null)

    const brandList = useSelector((state)=> state.brand)

    const checkBrands = async () => {
        try {
            dispatch(setLoading())
            const response = await getAllBrands()
            dispatch(setBrands(response))
        } catch (error) {
            console.error("Не удалось получить бренды:", error)
        } finally {
            dispatch(noLoading())
        }
    }
    const getItemInfo = async (id) => {
        try {
            dispatch(setLoading())
            const token = localStorage.getItem("token")
            const response = await axios.get(`http://localhost:4500/api/snacker/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                )
            if(response.status === 200) {
                setItemInfo(response.data)
            }
        } catch (error) {
            console.error("Не удалось получить данные товара:", error)
        } finally {
            dispatch(noLoading())
        }

    }


    useEffect(() => {
        getItemInfo(brandLocation)


    }, [dispatch]);
    console.log(itemInfo)
    console.log("brandList:", brandList);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            {itemInfo && brandList &&<div className="flex w-full flex-col justify-center  items-center">
            <Header/>
            {/*<Page/>*/}
            <div className="w-11/12 flex  h-screen flex-col">
                <div className="w-full h-[5%] flex ">Bread Crumbs</div>
                <div className="w-full h-[95%] flex ">
                    <div className="flex w-[50%] h-full  items-center justify-center ">
                        <div className="slider-container  flex h-full w-full items-center justify-center flex-col">
                            <img src={`http://localhost:4500/${itemInfo.img}`} className={styles.imageItem} alt="test" />
                            <button onClick={handlePrev}>Previous</button>
                            <button onClick={handleNext}>Next</button>
                        </div>
                    </div>
                    <div className="flex w-[50%] h-full flex-col gap-5 items-start justify-start pt-20">
                        <p className="flex text-4xl">{brandList !== undefined &&
                            brandList.find((brand) => brand.id === itemInfo.brandId) !== undefined &&
                            brandList.find((brand) => brand.id === itemInfo.brandId).name}</p>
                        <h1 className="flex font-medium">{itemInfo.name}</h1>
                        <p className="flex font-normal text-4xl">{itemInfo.price}Руб</p>
                        <p className="text-left text-xl font-light">Все налоги и таможенные пошлины включены. Стоимость доставки рассчитывается на этапе оформления заказа.</p>
                        <Sizes/>
                    </div>
                </div>
            </div>
        </div>}
            {itemInfo && brandList &&<Footer/>}
    </>
    );
};

export default SneakerPage;