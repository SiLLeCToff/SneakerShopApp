import axios from "axios";
import { setSneakers } from "./sneakersSlice";
import {noLoading, setLoading} from "./authSlice.jsx";
import {getAllBrands} from "./BrandActions.jsx";
import {setBrands} from "./brandSlice.jsx";

export const getAllSneakers = async (dispatch) => {
  try {
    dispatch(setLoading());
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:4500/api/snacker", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseBrands = await getAllBrands();
    dispatch(setBrands(responseBrands))
    const sneakers = response.data.rows;
    dispatch(setSneakers(sneakers));
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
  } finally {
    dispatch(noLoading())
  }
};

export  const updateSneaker = (id, name, price, brandId) => async () => {
  try {
    const formData = new FormData(); // selectedFile - это ваш объект File
    formData.append("id", `${id}`);
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("brandId", `${brandId}`);
    const token = localStorage.getItem("token")
    const response = await axios.patch("http://localhost:4500/api/snacker", formData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },

    });

  } catch (error) {
    console.error("Ошибка при обновлении данных товара:", error)
  }
}


export const deleteSneaker = (id) => async () => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.delete(`http://localhost:4500/api/snacker/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

        );
    if(response === 200) {
      console.log("Товар Успешно Удален")
    }

  } catch (error) {
    console.error('Не удалось удалить товар:', error)
  }
}