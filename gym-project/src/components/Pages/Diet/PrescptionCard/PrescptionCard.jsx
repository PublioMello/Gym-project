import React, { useState } from "react";
import "./PrescptionCard.css";
import { MdKeyboardArrowDown } from "react-icons/md";

function PrescptionCard({ icon, title, info }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`cardInfo ${open ? "open" : ""}`}>
      <div className="header-info" onClick={() => setOpen(!open)}>
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <MdKeyboardArrowDown className={`arrow ${open ? "rotate" : ""}`} />
      </div>

      <div className="content">
        <p>{info}</p>
      </div>
    </div>
  );
}

export default PrescptionCard;
