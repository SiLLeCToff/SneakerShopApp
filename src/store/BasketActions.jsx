import axios from "axios";
import {setBasket} from "./basketSlice.jsx";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const postItemToBasket = (snackerId, user) => async () => {
    try {
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
            return response.data

        }
    } catch (error) {
        console.log("Не удалось отправить товар в корзину:", error)
    }
}

export const getBasket = (user) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${apiUrl}api/basket/${user}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
        if(response.status === 200) {
            dispatch(setBasket(response.data))
            return response.data

        }
    } catch (error) {
        console.error("Не удалось получить корзину:", error)
    }
}

export const deleteFromBasket = (itemId, user) => async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.patch(`${apiUrl}api/basket/`, {itemId, user},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )
        if(response.status === 200) {
            return response.data;

        }
    } catch (error) {
        console.error("Не удалось получить корзину:", error)
    }
}