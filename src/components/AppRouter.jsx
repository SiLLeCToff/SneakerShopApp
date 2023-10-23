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

export const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.isLoading);
  const userRole = useSelector((state) => state.auth.role);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await checkAuth(dispatch);
        setIsAuthChecked(true);
      } catch (error) {
        // Обработка ошибок, если не удалось проверить авторизацию
      }
    };
    checkAuthentication();
  }, [dispatch]);

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
          />
        )}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    </Router>
  );
};
