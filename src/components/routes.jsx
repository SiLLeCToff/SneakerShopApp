import {
  ADMIN_ROUTE,
  BASKET_ROUTE, CATALOG_ROUTE,
  LOGIN_ROUTE, ORDER_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  SNACKER_ROUTE,
} from "../utils/consts";


import {lazy, Suspense} from "react";

const Admin = lazy(() => import("../pages/Admin"))
const Shop = lazy(() => import("../pages/Shop"))
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
    Component: <Suspense><Admin /></Suspense>,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Suspense><Auth /></Suspense>,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Suspense><Auth /></Suspense>,
  },
  {
    path: SHOP_ROUTE,
    Component: <Suspense><Shop /></Suspense>,
  },
  {
      path: SNACKER_ROUTE + "/:id",
          Component: <Suspense><SnackerPage /></Suspense>,
  },
  {
    path: CATALOG_ROUTE,
    Component: <Suspense><Catalog/></Suspense>,
  },
  {
    path: ORDER_ROUTE,
    Component: <Suspense><Order /></Suspense>,
  },
  {
    path: BASKET_ROUTE,
    Component: <Suspense><Basket /></Suspense>,
  },
];
