import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import {cadastrarUsuario} from "./usuario/apiUser"
import Footer from '../components/Footer';
import "../styles/forms.css";
import { Link } from 'react-router-dom';
import logobranco from "../images/logos/logobranco.png";

const RegistroFormulario = () => {
  const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
    <div className="container">
      <div className="contact-box">
    <form onSubmit={cadastrarUsuario}>
      <h1> Cadastro </h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="field" placeholder=" Nome:" /> <br /> <br />
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="field" placeholder=" Email:" /> <br /> <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="field" placeholder=" Senha:" /> <br /> <br />
      <input type="submit" className="btn" value="Criar Conta" /><br />
      <p>Já tem uma conta? <a href='/login'>Login</a></p>
    </form>
    </div>
      <img src={logobranco} className='left' alt="logobranco" />
    </div>
        <Footer />
        </>
  );
};

export default RegistroFormulario;