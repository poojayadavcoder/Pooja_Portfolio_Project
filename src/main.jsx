import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
const Contact = React.lazy(() => import("./components/Contact.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
 
);
