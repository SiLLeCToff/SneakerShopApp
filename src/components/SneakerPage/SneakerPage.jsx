import React, {useEffect, useState} from 'react';
import {Footer} from "../HomePage/Footer/Footer.jsx";
import Header from "../HomePage/Header/Header.jsx";
import Sizes from "./Sizes/Sizes.jsx";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import {noLoading, setLoading} from "../../store/authSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllBrands} from "../../store/BrandActions.jsx";
import {setBrands} from "../../store/brandSlice.jsx";
import styles from './SneakerPage.module.css'
import {getBasket, postItemToBasket} from "../../store/BasketActions.jsx";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const SneakerPage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)
    const [basketGuest, setBasketGuest] = useState(JSON.parse(localStorage.getItem("basket")) || []);
    const basketUser = useSelector((state)=> state.basket);
    const basket = isAuthenticated ? basketUser : basketGuest;
    const userId = useSelector((state)=> state.auth.user)
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
            const response = await axios.get(`${apiUrl}api/snacker/${id}`,
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

    const handleAddToBasket= async ()  => {
        if(isAuthenticated === true) {
        try {
            const snackerId = itemInfo.id;
            const user = userId;
            const token = localStorage.getItem("token")
            const response = await axios.post(`${apiUrl}api/basket`, {snackerId, user},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            )
            if(response.status === 200) {
                console.log(response.data)
                dispatch(getBasket(user))
                return response.data

            }
        } catch (error) {
            console.log("Не удалось отправить товар в корзину:", error)
        }}
        else {
            const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

            const haveItem = storedBasket.some(item => item.id === itemInfo.id)

            if(!haveItem) {
            storedBasket.push(itemInfo);
            localStorage.setItem("basket", JSON.stringify(storedBasket));
            setBasketGuest(storedBasket)
            }
        }

    }



    useEffect(() => {
        getItemInfo(brandLocation)

    }, [dispatch, basketGuest, basket]);


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
            <div className="w-11/12 flex  h-full flex-col mb-2">
                <div className="w-full h-[5%] flex font-light text-[11px] mt-3"><Link to='/'>Главная</Link><p className="mx-1">-</p><Link to='/catalog'>Каталог</Link><p className="mx-1">-</p><Link to={`/snacker/${itemInfo.id}`}>{itemInfo.name}</Link></div>
                <div className="w-full h-[95%] flex max-sm:flex-col max-sm:justify-center gap-4 items-start max-sm:items-center">
                    <div className="flex w-[50%] h-full max-sm:w-full items-center justify-center pt-20 ">
                        <div className="slider-container flex h-full items-center justify-center flex-col">
                            <img src={`${apiUrl}${itemInfo.img}`} className='flex rounded-3xl w-[550px] max-sm:w-auto max-sm:h-auto bg-cover object-contain' alt="test" />
                            {/*<button onClick={handlePrev}>Previous</button>*/}
                            {/*<button onClick={handleNext}>Next</button>*/}
                        </div>
                    </div>
                    <div className="flex w-[50%] h-full flex-col gap-5 items-start justify-start pt-20 max-sm:w-full max-sm:pt-3">
                        <p className="flex text-4xl ">{brandList !== undefined &&
                            brandList.find((brand) => brand.id === itemInfo.brandId) !== undefined &&
                            brandList.find((brand) => brand.id === itemInfo.brandId).name}</p>
                        <h1 className="flex font-medium max-sm:text-3xl">{itemInfo.name}</h1>
                        <p className="flex font-normal text-4xl">{itemInfo.price}Руб</p>
                        <p className="text-left text-xl font-light">Все налоги и таможенные пошлины включены. Стоимость доставки рассчитывается на этапе оформления заказа.</p>
                        <Sizes/>
                        <div className="flex w-full pb-10 max-sm:justify-center items-center">
                        <button onClick={handleAddToBasket} className="flex bg-black text-white border border-black rounded-3xl py-3 px-5 hover:bg-white hover:text-black">Добавить в Корзину</button>
                        </div>
                    </div>
                </div>
            </div>
                 <Footer/>
        </div>}

    </>
    );
};

export default SneakerPage;