import { createBrowserRouter, Navigate } from "react-router-dom";

import { ProductContainer } from "pages/product";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={"product"} />,
      },
      {
        path: "product",
        element: <ProductContainer />,
      },
    ],
  },
]);
