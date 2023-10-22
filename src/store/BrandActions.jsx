import axios from "axios";

export const getAllBrands = async () => {
  try {

    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:4500/api/brand", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Не удалось получить данные:", error);
  }
};
