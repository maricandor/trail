
import React from "react";
import "../styles/Footer.css";
import logobranco from "../images/logos/logobranco.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <h1>
        <img src={logobranco} alt="logo"/>
        </h1>

      </div>
      <div className="footer-secondary">
        <span>© 2023 Trail Todos os direitos reservados.</span>
        <span>Termos · Politica de Privacidade</span>
      </div>
    </footer>
  );
};

export default Footer;
