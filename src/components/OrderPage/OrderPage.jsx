
import Header from "../HomePage/Header/Header.jsx";
import {Footer} from "../HomePage/Footer/Footer.jsx";
import {useSelector} from "react-redux";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const imgUrl = import.meta.env.VITE_REACT_APP_IMG_URL;
const OrderPage = () => {
    const isAuth = useSelector((state)=> state.auth.isAuthenticated)
    const itemsFromBasketUser = useSelector((state)=> state.basket)
    const itemsFromBasketGuest = JSON.parse(localStorage.getItem("basket"))
    const itemsFromBasket = isAuth ? itemsFromBasketUser : itemsFromBasketGuest;
    const brands = useSelector((state)=> state.brand)
    const totalAmount = isAuth ? itemsFromBasketUser.reduce((acc, item) => acc + item.price, 0) : itemsFromBasketGuest.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className="flex flex-col justify-center items-center">
            <Header/>
            <div className="flex   w-11/12 h-[700px]">
                <div className="flex bg-[#FAFAFA] w-1/2 items-center justify-start gap-4 flex-col pt-[30px]">
                    {itemsFromBasket.map((item, index) => <div className="flex w-[80%] justify-start items-center gap-4" key={item.id}>
                        <div className="flex justify-center items-center">
                        <img src={`${imgUrl}${encodeURIComponent(item.id)}?alt=media`} alt='photo' className="flex w-[150px] h-[120px] rounded-3xl object-contain border border-black border-opacity-5 "/>
                        </div>
                        <div className="flex justify-center flex-col gap-4 w-full">
                            <p className="flex whitespace-nowrap">{(brands.find(brand => brand.id === item.brandId) ? brands.find(brand => brand.id === item.brandId).name : '').toUpperCase()} {item.name}</p>
                            <div className="flex justify-between items-center 2xl:gap-[300px] xl:gap-[150px]">
                                <p className="flex whitespace-nowrap">45 размер</p>
                                <p className="flex whitespace-nowrap">{item.price.toLocaleString('ru-RU')} Руб</p>
                            </div>
                        </div>
                    </div>)}
                    <div className="flex w-[80%] flex-col gap-4">
                        <h2 className="font-medium text-2xl flex">Промокод</h2>
                        <div className="flex items-center gap-4">
                            <input className="flex w-3/4 py-[5px] px-[15px] rounded-[50px] bg-[#F1F1F1] border-solid border border-[#DEDEDE] text-xl font-medium"/>
                            <button className="flex w-[150px] bg-black text-white rounded-[50px] px-[15px] py-[7px] border border-solid border-black justify-center hover:bg-white hover:text-black transition-colors duration-500">Применить</button>
                        </div>
                        <div className="flex items-center justify-between mt-[100px]">
                            <p className="flex font-medium text-xl">Всего</p>
                            <p className="flex font-medium text-xl">{totalAmount.toLocaleString('ru-RU')} Руб</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 pt-[30px]">
                    <div className="flex flex-col justify-center items-center gap-[20px]">
                        <h2 className="font-medium text-2xl flex">Ваш заказ</h2>
                        <p className="flex">Внимательно заполните форму ниже, чтобы мы могли связаться с вами!</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 my-5">
                        <label htmlFor="name" className="flex">
                            Ваше имя
                        </label>
                        <input type="text" id="name" className="flex border w-1/2 border-solid text-center border-[#DEDEDE] rounded-[50px] text-2xl py-1 px-5" />
                        <label htmlFor="name" className="flex">
                            Телефон
                        </label>
                        <input type="phone" id="name" className="flex border w-1/2 border-solid text-center border-[#DEDEDE] rounded-[50px] text-2xl py-1 px-5" />
                        <label htmlFor="name" className="flex">
                            Логин в Telegram
                        </label>
                        <input type="text" id="name" className="flex border w-1/2 border-solid text-center border-[#DEDEDE] rounded-[50px] text-2xl py-1 px-5" />
                        <button className="flex mt-[30px] w-1/2 justify-center items-center border border-solid border-black text-white bg-black rounded-[50px] text-xl py-2 hover:bg-white hover:text-black transition-colors duration-500">Оформить</button>
                        <p className="flex opacity-50">Нажимая на кнопку, вы соглашаетесь с</p>
                        <p className="flex opacity-50 underline cursor-pointer">Политикой конфиденциальности</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OrderPage;