import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Admin from "../pages/Admin";
import Shop from "../pages/Shop";
import {
  setLoading,
  loginSuccess,
  logoutSuccess,
  noLoading,
} from "../store/authSlice";
import { checkAuth } from "../store/CheckAuthActions";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import IsLoading from "./IsLoading/IsLoading";
import { authRoutes, adminRoutes, publicRoutes } from "./routes";
import {getAllBrands} from "../store/BrandActions.jsx";
import {getBasket} from "../store/BasketActions.jsx";
import axios from "axios";
import {setBasket} from "../store/basketSlice.jsx";
import {setBrands} from "../store/brandSlice.jsx";
import {getAllSneakers} from "../store/SneakersActions.jsx";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.isLoading);
  const userRole = useSelector((state) => state.auth.role);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const user = useSelector((state)=> state.auth.user)


  const dispatch = useDispatch();


  const getBasketUserAndBrands = async (user) => {
    try {
      const token = localStorage.getItem("token")
      const responseBrands = await getAllBrands();

      const response = await axios.get(`${apiUrl}api/basket/${user}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
      )
      dispatch(setBrands(responseBrands))
      if(response.status === 200) {
        const items = response.data
        dispatch(setBasket(items))
        return response.data

      }
    } catch (error) {
      console.error("Не удалось получить корзину:", error)
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await checkAuth(dispatch);
        setIsAuthChecked(true);
      } catch (error) {
        console.error("Не удалось проверить авторизацию", error)
      }
    };
    checkAuthentication();
    getAllSneakers(dispatch)
  }, []);

  useEffect(() => {
  if (user !== null || undefined) {
    getBasketUserAndBrands(user)
  }
  }, [dispatch, user]);

  if (!isAuthChecked) {
    return <IsLoading />;

  }

  const renderProtectedRoutes = () => {
    if (userRole === "ADMIN") {
      return <Route path="/admin" element={<Admin />} />;
    } else {
      return <Route path="/" element={<Shop />} />;
    }
  };

  return (
    <Router>
      <Routes>
        {/* {useSelector((state) => state.auth.role) === "ADMIN" ? (
          <Route path="/admin" element={<Navigate to={ADMIN_ROUTE} />} />
        ) : (
          <Route path="/" element={<Navigate to={SHOP_ROUTE} />} />
        )} */}
        {renderProtectedRoutes()}
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact />
          ))}
        {isAuth && (
          <Route
            key={"/login"}
            path="/login"
            element={<Navigate to={SHOP_ROUTE} />}
            exact
          />)}
        {isAuth && (<Route
          key={"/registration"}
        path="/registration"
        element={<Navigate to={SHOP_ROUTE} />}
        exact
      />)}

        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    </Router>
  );
};
