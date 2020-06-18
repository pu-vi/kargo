import React from "react";

const Home = ({ labels }) => (
  <div className="container">
    <div className="center-box">
      <section></section>
      <button>{labels.HOME.CUSTOMER_CTA}</button>
      <button>{labels.HOME.CLIENT_CTA}</button>
      <section></section>
    </div>
  </div>
);

export default Home;
