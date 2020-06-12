import React from "react";
import { TYPES } from "../../../config/cargo";

const Customer = () => (
  <div className="container">
    <div className="cargo-type">
      <h2>Choose your cargo type</h2>
      <div className="ct-wrapper">
        {TYPES.map(t => (
          <div className="ct-item">
            <div className="ct-img-wrapper">
              <img src={t.image} alt={t.label} />
            </div>
            <label className="ct-label">{t.label}</label>
            <sub className="ct-sub">{t.subtext}</sub>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Customer;
