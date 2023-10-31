import React, {useEffect, useState} from 'react';
import Header from "../HomePage/Header/Header.jsx";
import {Footer} from "../HomePage/Footer/Footer.jsx";
import { TrashIcon } from "@heroicons/react/24/outline";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteFromBasket, getBasket} from "../../store/BasketActions.jsx";
import {setBrands} from "../../store/brandSlice.jsx";
import {setBasket} from "../../store/basketSlice.jsx";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const BasketPage = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state)=> state.auth.isAuthenticated)
    const [basketGuest, setBasketGuest] = useState(JSON.parse(localStorage.getItem("basket")) || []);
    const basketUser = useSelector((state)=> state.basket);
    const basket = isAuth ? basketUser : basketGuest;
    const brands = useSelector((state)=> state.brand)
    const userId = useSelector((state)=> state.auth.user)
    const totalAmount = basket.reduce((acc, item) => acc + item.price, 0);
    const navigate = useNavigate()


    const imgUrl = import.meta.env.VITE_REACT_APP_IMG_URL;
    const handleRedidectToBuy = () => {
        navigate("/catalog")
    }

    const handleDelete = async (itemId) => {
        if(isAuth === true) {
        try {
            const user = userId;
            const token = localStorage.getItem("token")
            const response = await axios.patch(`${apiUrl}api/basket/`, {itemId, user},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            )
            if(response.status === 200) {
                dispatch(getBasket(user)); // Обновляйте корзину сразу после успешного удаления
                return response;

            }
        } catch (error) {
            console.error("Не удалось удалить")
        }
            } else {
            // Если пользователь не авторизован, обработайте удаление из localStorage
            const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];

            // Найдите индекс элемента с нужным itemId в массиве
            const itemIndex = storedBasket.findIndex((item) => item.id === itemId);

            // Если найден элемент с таким id, удалите его из массива
            if (itemIndex !== -1) {
                storedBasket.splice(itemIndex, 1);

                // Сохраните обновленный массив в localStorage
                localStorage.setItem("basket", JSON.stringify(storedBasket));
                setBasketGuest(storedBasket)

                // После удаления элемента из localStorage, обновите представление на вашей странице
                // например, вызовите функцию для перерисовки компонента корзины
                // updateBasketComponent(storedBasket);
            } else {
                console.error("Элемент не найден в корзине");
            }
        }
    }

    useEffect(() => {

    }, [basketGuest,basket]);


    return (
        <div className="flex flex-col justify-center items-center">
            <Header/>
            <div className="flex flex-col w-11/12 h-full ">
                <div className="flex w-full max-sm:flex-col py-4 max-sm:py-3 max-sm:gap-2 border-black border-opacity-20 border-b">


                    <div className="flex w-1/3 items-center max-sm: max-sm: justify-start font-light text-[11px]"><Link to='/'>Главная</Link><p className="mx-1">-</p><Link to='/catalog'>Каталог</Link><p className="mx-1">-</p><Link to='/basket'>Корзина</Link></div>
                    <div className="flex w-2/3  max-sm:w-full max-sm:justify-between">
                    <h1 className="flex w-1/2 items-center max-sm:justify-start justify-center text-2xl font-medium whitespace-nowrap">КОРЗИНА</h1>
                        <a onClick={handleRedidectToBuy} className="flex w-1/2 items-center justify-end underline underline-offset-4 font-light whitespace-nowrap">Продолжить покупки</a>
                    </div>
                </div>
                <div className="flex w-full pt-10 pb-4 border-black border-opacity-20 border-b">
                    <h2 className="flex w-1/3 items-center justify-start font-light">Товар</h2>
                    <h2 className="flex w-1/3 items-center justify-center font-light">Количество</h2>
                    <h2 className="flex w-1/3 items-center justify-center font-light">Всего</h2>
                </div>
                <div className="flex w-full flex-col gap-5 py-6 border-black border-opacity-20 border-b">

                    { basket && basket.map((item) => <div key={item.id} className="flex w-full">
                        <div className="flex w-1/3 items-center justify-start gap-7 font-light">
                                <img src={`${imgUrl}${encodeURIComponent(item.id)}?alt=media`} alt="photo" className="flex 2xl:w-[150px] 2xl:h-[150px] sm:w-[110px] sm:h-[110px] max-sm:w-[100px] max-sm:h-[100px] bg-gray-50 rounded-3xl bg-cover object-contain"/>
                        <div className="flex flex-col justify-start items-start">
                            <p className="flex font-normal 2xl:text-[30px] xl:text-[20px] 2xl:mb-[5px] whitespace-nowrap">{item.name}</p>
                            <p className="flex 2xl:mb-[8px] whitespace-nowrap">{(brands.find(brand => brand.id === item.brandId) ? brands.find(brand => brand.id === item.brandId).name : '').toUpperCase()}</p>
                            <p className="flex font-normal text-[14px] 2xl:mb-[8px] whitespace-nowrap">{item.price} Руб</p>
                            <p className="flex text-[14px] opacity-50">Размер: 45</p>
                        </div>
                        </div>
                        <p className="flex w-1/3 items-center justify-center font-light">1 шт</p>
                        <div className="flex w-1/3 items-center justify-center font-light">
                            <p className="flex w-[90%] pl-10 justify-center font-medium whitespace-nowrap">{item.price.toLocaleString('ru-RU')} Руб</p>
                            <TrashIcon onClick={() => handleDelete(item.id)} className="w-[30px] h-[30px] opacity-50 hover:opacity-90 cursor-pointer"/>
                        </div>
                    </div>)}

                </div>
                <div className="flex w-full flex-col py-20 border-black xl:items-end md:items-end sm:items-center border-opacity-20 border-b">
                    <div className="flex flex-col justify-center gap-5 items-center md:w-1/4 sm:w-1/2 md:mr-10">
                    <p className="flex text-2xl whitespace-nowrap">Итог: {totalAmount.toLocaleString('ru-RU')} Руб</p>
                    <p className="flex font-light text-sm text-center">Все налоги и таможенные пошлины включены. Стоимость доставки рассчитывается на этапе оформления заказа.</p>
                    <button onClick={() =>navigate('/order')} className="flex xl:w-[55%] md:w-auto sm:w-full max-sm:w-full justify-center rounded-3xl p-3 border border-black text-white bg-black hover:text-black hover:bg-white whitespace-nowrap">Оформить заказ</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BasketPage;