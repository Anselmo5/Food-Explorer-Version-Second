import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Cadastrar from './components/cadastrar'
import Home from "./components/home";
import Adm from "./components/adm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/adm",
    element: <Adm/>,
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
