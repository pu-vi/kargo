import React from "react";
import Home from "./pages/home";
import "../static/styles/app.scss";
import Customer from "./pages/customer";
import labels from "../config/labels";

const Container = () => (
  <div>
    <Home labels={labels} />
    {/* <Customer /> */}
  </div>
);

export default Container;
