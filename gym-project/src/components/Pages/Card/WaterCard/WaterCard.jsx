import React, { useState } from "react";
import "./WaterCard.css";

function WaterCard({ icon }) {
  const goal = 4000; // 4L em ml

  const [current, setCurrent] = useState(0);

  function addWater(amount) {
    setCurrent((prev) => {
      const total = prev + amount;
      return total > goal ? goal : total; // não passa de 4000
    });
  }

  function resetWater() {
    setCurrent(0);
  }

  const percent = (current / goal) * 100;

  return (
    <div className="card--water">
      <div className="card--water-header">
        <div className="header--water">
          <div className="header--icon">
            <div className="icon">{icon}</div>
            <div className="header--water-title">
              <h3>Água</h3>
              <p>Meta: 4L</p>
            </div>
          </div>
        </div>
        <div className="percents">
          <span>{Math.round(percent)}%</span>
        </div>
      </div>

      <div className="card--water-main">
        <p>{(current / 1000).toFixed(2)}L / 4L</p>

        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>
      </div>

      <div className="card--water-buttons">
        <button onClick={() => addWater(100)} className="waterButton">
          100 ml
        </button>
        <button onClick={() => addWater(250)} className="waterButton">
          250 ml
        </button>
        <button onClick={() => addWater(500)} className="waterButton">
          500 ml
        </button>
        <button onClick={() => addWater(1000)} className="waterButton">
          1000 ml
        </button>
        <button onClick={resetWater} className="waterButton">
          Zerar
        </button>
      </div>
    </div>
  );
}

export default WaterCard;
