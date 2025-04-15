import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import App from "./App";
import ContactUs from "./routes/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
