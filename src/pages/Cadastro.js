import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import "../styles/forms.css";
import { Link } from 'react-router-dom';
import logobranco from "../images/logos/logobranco.png";
const urlback= "http://localhost:8081"

const Cadastro = () => {
  const navRef = useRef();

  const formulario = document.querySelector("form");
  const Inome = document.querySelector(".nome");
  const Iemail = document.querySelector(".email");
  const Isenha = document.querySelector(".senha");

  function cadastrar() {

    fetch(urlback + "/auth/register", {
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(),
      nome: Inome.value,
      email: Iemail.value,
      senha: Isenha.value
    })
      .then(function (res) { console.log(res) })
      .then(function (res) { console.log(res) })
  };

  function limpar() {
    nome: Inome.value = "";
      email: Iemail.value = "";
        senha: Isenha.value = "";
  }
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrar();
  },
      console.log(dados)
  );

const showNavbar = () => {
  navRef.current.classList.toggle("responsive_nav");
};

return (
  <>

    <div class="container">
      <div class="contact-box">
        <form name="dados" action="" method="POST" enctype="multipart/form-data">
          <h1> Cadastro </h1>
          <input type="text" className="nome" name="codigo" size="150" class="field" placeholder="Nome:" value="" /> <br /> <br />
          <input type="text" className="email" name="tipo" size="150" class="field" placeholder="Email:" value="" /> <br /> <br />
          <input type="text" className="senha" name="marca" size="150" class="field" placeholder="Senha:" value="" /> <br /> <br />
          <input type="submit" class="btn" value="Criar Conta" /><br />
          <p>Já tem uma conta? <a href='/login'>Login</a></p>
        </form>
      </div>
      <img src={logobranco} className='left' alt="logobranco" />
    </div>


    <Footer />
  </>
);
  }

export default Cadastro;
