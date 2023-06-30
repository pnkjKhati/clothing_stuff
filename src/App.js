import React, { useEffect } from "react";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.container";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Navigation,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: 'shop/*',
        Component: Shop,
      },
      {
        path: "auth",
        Component: Authentication,
      },
      {
        path: "chekcout",
        Component: CheckOut,
      }
    ]
  }
])

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return <RouterProvider router={router} />
};



export default App;
