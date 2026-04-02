import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import paraguay from "../../assets/images/paraguay.jpeg";
import { FaHome, FaDumbbell, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      {/* FOTO */}
      <img src={paraguay} alt="Minha foto" className="profile-picture" />

      {/* TEXTO + DOCK */}
      <div className="header-content">
        <h3 className="greeting">
          <span>Bom dia, </span>Publio 👋
        </h3>

        <div className="dock">
          <NavLink to="/" className="dock-item">
            <FaHome />
            <span>Início</span>
          </NavLink>

          <NavLink to="/treino" className="dock-item">
            <FaDumbbell />
            <span>Treino</span>
          </NavLink>

          <NavLink to="/dieta" className="dock-item">
            <FaAppleAlt />
            <span>Dieta</span>
          </NavLink>

          <NavLink to="/cardio" className="dock-item">
            <FaHeartbeat />
            <span>Cardio</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
