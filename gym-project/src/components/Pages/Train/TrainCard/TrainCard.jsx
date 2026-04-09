import React, { useState } from "react";
import "./TrainCard.css";
import { MdKeyboardArrowDown } from "react-icons/md";

function TrainCard({ icon, title, treino, iconRef }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`cardInfo-train ${open ? "open" : ""}`}>
      <div className="header-info-train" onClick={() => setOpen(!open)}>
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <MdKeyboardArrowDown className={`arrow ${open ? "rotate" : ""}`} />
      </div>

      <div className="content-card">
        <ul className="content-train">
          {treino.map((item, index) => (
            <li key={index} className="row">
              <span>
                {iconRef} {item.name}
              </span>
              <span>{item.reps}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrainCard;
