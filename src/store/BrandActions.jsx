import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const getAllBrands = async () => {
  try {

    const token = localStorage.getItem("token");
    const response = await axios.get(`${apiUrl}api/brand`, {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Не удалось получить данные:", error);
  }
};
