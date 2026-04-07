import React, { useState } from "react";
import "./RefCard.css";
import { MdKeyboardArrowDown } from "react-icons/md";

function RefCard({ icon, title, refs, iconRef }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`cardInfo ${open ? "open" : ""}`}>
      <div className="header-info" onClick={() => setOpen(!open)}>
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <MdKeyboardArrowDown className={`arrow ${open ? "rotate" : ""}`} />
      </div>

      <div className="content">
        <ul>
          {refs.map((item, index) => (
            <li key={index}>
              {iconRef} {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RefCard;
