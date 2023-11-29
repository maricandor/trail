
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
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800"
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300">
            Request Code
          </button>
        </div>
      </div>
      <div className="footer-secondary">
        <span>© 2023 Trail Todos os direitos reservados.</span>
        <span>Termos · Politica de Privacidade</span>
      </div>
    </footer>
  );
};

export default Footer;
