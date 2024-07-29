"use client"; // This is a client component 👈🏽
import * as ReactDOM from "react-dom/client";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Asset from "../routes/asset";
import Root from "../routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "assets/:assetId",
        element: <Asset />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
