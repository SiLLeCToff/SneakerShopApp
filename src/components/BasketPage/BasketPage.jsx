import React from 'react';
import Header from "../HomePage/Header/Header.jsx";
import {Footer} from "../HomePage/Footer/Footer.jsx";
import { TrashIcon } from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom";


const BasketPage = () => {
    const navigate = useNavigate()
    const handleRedidectToBuy = () => {
        navigate("/catalog")
    }


    return (
        <div className="flex flex-col justify-center items-center">
            <Header/>
            <div className="flex flex-col w-11/12 ">
                <div className="flex w-full  py-4 border-black border-opacity-20 border-b">
                    <div className="flex w-1/3 items-center justify-start font-light text-xs">BreadCrumbs</div>
                    <h1 className="flex w-1/3 items-center justify-center text-2xl font-medium">КОРЗИНА</h1>
                    <a onClick={handleRedidectToBuy} className="flex w-1/3 items-center justify-end underline underline-offset-4 font-light">Продолжить покупки</a>
                </div>
                <div className="flex w-full pt-10 pb-4 border-black border-opacity-20 border-b">
                    <h2 className="flex w-1/3 items-center justify-start font-light">Товар</h2>
                    <h2 className="flex w-1/3 items-center justify-center font-light">Количество</h2>
                    <h2 className="flex w-1/3 items-center justify-center font-light">Всего</h2>
                </div>
                <div className="flex w-full flex-col gap-5 py-6 border-black border-opacity-20 border-b">
                <div className="flex w-full">
                    <div className="flex w-1/3 items-center justify-start font-light">item</div>
                    <p className="flex w-1/3 items-center justify-center font-light">1 шт</p>
                    <div className="flex w-1/3 items-center justify-center font-light">
                    <p className="flex w-[90%] pl-10 justify-center font-medium">25.000 Руб</p>
                    <TrashIcon className="w-[30px] h-[30px] opacity-50 hover:opacity-90 cursor-pointer"/>
                    </div>
                </div>
                    <div className="flex w-full">
                        <div className="flex w-1/3 items-center justify-start font-light">item</div>
                        <p className="flex w-1/3 items-center justify-center font-light">1 шт</p>
                        <div className="flex justify-items-end w-1/3 items-center justify-center font-light">
                            <p className="flex w-[90%] pl-10 justify-center font-medium">25.000 Руб</p>
                            <TrashIcon className="w-[30px] h-[30px] opacity-50 hover:opacity-90 cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col py-20 border-black items-end border-opacity-20 border-b">
                    <div className="flex flex-col justify-center gap-5 items-center w-1/4">
                    <p className="flex text-2xl">Итог: 25.000 Руб</p>
                    <p className="flex font-light text-sm text-center">Все налоги и таможенные пошлины включены. Стоимость доставки рассчитывается на этапе оформления заказа.</p>
                    <button className="flex w-[55%] justify-center rounded-3xl p-3 border border-black text-white bg-black hover:text-black hover:bg-white">Оформить заказ</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BasketPage;