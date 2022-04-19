import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
