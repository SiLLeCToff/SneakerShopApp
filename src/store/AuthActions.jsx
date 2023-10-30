import axios from "axios";
import { setLoading, loginSuccess, noLoading } from "./authSlice";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.post(`${apiUrl}api/user/login`, {
      email,
      password,
    });
    console.log(response);
    if (response.status === 200) {
      const accessToken = response.data.token;
      console.log(response);
      localStorage.setItem("token", accessToken);
      const user = response.data.user;

      dispatch(
        loginSuccess({
          accessToken: accessToken,
          user: user.id,
          userEmail: user.email,
          role: user.role,
        })
      );
    }
  } catch (error) {
    console.error(
      "Authentication error:",
      error.response?.data?.error || "Unknown error"
    );
    throw error;
  } finally {
    dispatch(noLoading());
  }
};

export const registrationUser = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.post(`${apiUrl}api/user/registration`, {
      email,
      password,
    });
    console.log(response);
    if (response.status === 200) {
      const accessToken = response.data.token;
      console.log(response);
      localStorage.setItem("token", accessToken);
      const user = response.data.user;

      dispatch(
          loginSuccess({
            accessToken: accessToken,
            user: user.id,
            userEmail: user.email,
            role: user.role,
          })
      );
    }
  } catch (error) {
    console.error(
        "Authentication error:",
        error.response?.data?.error || "Unknown error"
    );
    throw error;
  } finally {
    dispatch(noLoading());
  }
};
