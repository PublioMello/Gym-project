import React from "react";
import "./Header.css";
import paraguay from "../../../../assets/images/paraguay.jpeg";
function Header() {
  return (
    <header className="header">
      {/* ESQUERDA */}
      <div className="header-left">
        <img src={paraguay} alt="Minha foto" className="profile-picture" />

        <h3>Publio</h3>
        <span>Bom dia 👋</span>
      </div>

      {/* CENTRO */}
      <ul className="header-menu">
        <li>Início</li>
        <li>Treino</li>
        <li>Dieta</li>
        <li>Cardio</li>
      </ul>
    </header>
  );
}

export default Header;
