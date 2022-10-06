import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tippy.js/dist/tippy.css";
import App from "./App";
// import Preloader from "./components/Preloader";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>

    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
