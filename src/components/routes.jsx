import {
  ADMIN_ROUTE,
  BASKET_ROUTE, CATALOG_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  SNACKER_ROUTE,
} from "../utils/consts";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import Shop from "../pages/Shop";
import SnackerPage from "../pages/Sneacker.jsx";
import Catalog from "../pages/Catalog.jsx";

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />,
  },
  {
    path: SHOP_ROUTE,
    Component: <Shop />,
  },
  {
    path: SNACKER_ROUTE + "/:id",
    Component: <SnackerPage />,
  },
  {
    path: CATALOG_ROUTE,
    Component: <Catalog/>,
  }
];
