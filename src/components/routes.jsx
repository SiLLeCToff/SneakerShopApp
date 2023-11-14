import {
  ADMIN_ROUTE,
  BASKET_ROUTE, CATALOG_ROUTE,
  LOGIN_ROUTE, ORDER_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  SNACKER_ROUTE,
} from "../utils/consts";

import Shop from "../pages/Shop.jsx";
import {lazy, Suspense} from "react";
import IsLoading from "./IsLoading/IsLoading.jsx";

const Admin = lazy(() => import("../pages/Admin"))
// const Shop = lazy(() => import("../pages/Shop"))
const SnackerPage = lazy(() => import("../pages/Sneacker"))
const Catalog = lazy(() => import("../pages/Catalog.jsx"))
const Order = lazy(() => import("../pages/Order.jsx"))
const Auth = lazy(() => import("../pages/Auth"))
const Basket = lazy(() => import("../pages/Basket.jsx"))

export const authRoutes = [

];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Suspense fallback={<IsLoading/>}><Admin /></Suspense>,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Suspense fallback={<IsLoading/>><Auth /></Suspense>,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Suspense fallback={<IsLoading/>><Auth /></Suspense>,
  },
  {
    path: SHOP_ROUTE,
    Component: <Shop />,
  },
  {
      path: SNACKER_ROUTE + "/:id",
          Component: <Suspense fallback={<IsLoading/>><SnackerPage /></Suspense>,
  },
  {
    path: CATALOG_ROUTE,
    Component: <Suspense fallback={<IsLoading/>><Catalog/></Suspense>,
  },
  {
    path: ORDER_ROUTE,
    Component: <Suspense fallback={<IsLoading/>><Order /></Suspense>,
  },
  {
    path: BASKET_ROUTE,
    Component: <Suspense fallback={<IsLoading/>><Basket /></Suspense>,
  },
];
