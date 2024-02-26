import * as React from "react";
import { RouteObject } from "react-router-dom";
import { PATHS } from "routes/paths";
import RootLayout from "src/components/ui/Layouts/RootLayout";
import SecondaryLayout from "src/components/ui/Layouts/SecondaryLayout";

const HomePage = React.lazy(() => import("src/pages/home"));
const ProductsPage = React.lazy(() => import("src/pages/products"));
const ProductDetailPage = React.lazy(
  () => import("src/pages/products/product-detail")
);
const SettingsPage = React.lazy(() => import("src/pages/settings"));
const CartPage = React.lazy(() => import("src/pages/cart"));

export const ROOT_ROUTES: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: PATHS.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: PATHS.SETTINGS,
        element: <SettingsPage />,
      },
      {
        path: PATHS.CART,
        element: <CartPage />,
      },
    ],
    errorElement: <>Handle Error Page</>,
  },
];

export const SECONDARY_ROUTES: RouteObject[] = [
  {
    element: <SecondaryLayout />,
    children: [
      {
        path: PATHS.PRODUCTS_DETAIL,
        element: <ProductDetailPage />,
      },
    ],
    errorElement: <>Error</>,
  },
];

export const ROUTES = [...ROOT_ROUTES, ...SECONDARY_ROUTES];
