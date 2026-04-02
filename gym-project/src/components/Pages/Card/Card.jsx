import React from "react";
import "./Card.css";

function Card({ title, value, unit, change, isPositive, icon }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon">{icon}</div>
        <h4>{title}</h4>
      </div>
      <h2>
        {value} <span>{unit}</span>
      </h2>

      <p style={{ color: isPositive ? "limegreen" : "red" }}>{change}</p>
    </div>
  );
}

export default Card;
