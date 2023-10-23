import axios from "axios";


export const postItemToBasket = (snackerId, user) => async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post("http://localhost:4500/api/basket", {snackerId, user},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            )
        console.log(response)
        return response.data
    } catch (error) {
        console.log("Не удалось отправить товар в корзину:", error)
    }
}