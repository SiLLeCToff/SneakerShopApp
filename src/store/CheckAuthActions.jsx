import axios from "axios";
import {
  setLoading,
  loginSuccess,
  logoutSuccess,
  noLoading,
} from "./authSlice";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const checkAuth = async (dispatch) => {
  try {
    dispatch(setLoading());
    const storageToken = localStorage.getItem("token");
    if (storageToken) {
      const response = await axios.post(
        `${apiUrl}api/user/auth`,
        { storageToken },
        {
          headers: {
            Authorization: `Bearer ${storageToken}`,
          },
        }
      );
      if (response.status === 200) {
      }
      dispatch(
        loginSuccess({
          accessToken: storageToken,
          user: response.data.user.id,
          userEmail: response.data.user.email,
          role: response.data.user.role,
        })
      );
    }
  } catch (error) {
    dispatch(logoutSuccess());
  } finally {
    dispatch(noLoading());
  }
};
