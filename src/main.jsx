import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>
);
