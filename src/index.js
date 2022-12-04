/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import LandingPage from "views/Index.js";
import Dashboard from "views/Dashboard.js";
import Donate from "views/Donate.js";
import CreateCause from "views/CreateCause.js";
import Attach from "views/Attach";
// import LandingPage from "views/LandingPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<LandingPage />}></Route>
      <Route path="/donate" element={<Donate />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/createCause" element={<CreateCause />}></Route>
      <Route path="/Attach" element={<Attach />}></Route>
      {/* <Navigate from="/" to="/home" /> */}
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  </BrowserRouter>
);
