import {lazy, useEffect, useState, Suspense} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { checkAuth } from "../store/CheckAuthActions";
import { SHOP_ROUTE } from "../utils/consts";
import IsLoading from "./IsLoading/IsLoading";
import { authRoutes, publicRoutes } from "./routes";
import {getAllBrands} from "../store/BrandActions.jsx";
import axios from "axios";
import {setBasket} from "../store/basketSlice.jsx";
import {setBrands} from "../store/brandSlice.jsx";
import {getAllSneakers} from "../store/SneakersActions.jsx";

const Admin = lazy(() => import('../pages/Admin'))
const Shop = lazy(() => import('../pages/Shop'))

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
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
        await getAllSneakers(dispatch)
      } catch (error) {
        console.error("Не удалось проверить авторизацию", error)
      }
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
  if (user !== null || undefined) {
    getBasketUserAndBrands(user)
  }
  }, [user]);

  if (!isAuthChecked) {
    return <IsLoading />;

  }

  const renderProtectedRoutes = () => {
    if (userRole === "ADMIN") {
      return <Route path="/admin" element={<Suspense fallback={<p>Loading...</p>}><Admin /></Suspense>} />;
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
