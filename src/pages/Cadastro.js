import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import axios from 'axios';
import Footer from '../components/Footer';
import "../styles/forms.css";
import { Link } from 'react-router-dom';
import logobranco from "../images/logos/logobranco.png";
const urlback= "http://localhost:8081"

const RegistroFormulario = () => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const role = 'ADMIN';

  const registrarUsuario = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post(urlback+'/auth/register', {
        nome,
        login,
        password,
        role,
      }, {
        headers: {
          'Content-Type': 'application/json',
          // Adicione o token de autorização aqui, se necessário
          // 'Authorization': `Bearer ${seuTokenJWT}`,
        },
      });

      console.log('Registro bem-sucedido:', response.data);
      // Adicione lógica adicional aqui, como redirecionar o usuário ou exibir uma mensagem de sucesso.
    } catch (error) {
      console.error('Erro durante o registro:', error);
      // Trate os erros conforme necessário, como exibir uma mensagem de erro para o usuário.
    }
  };

  return (
    <>
    <div className="container">
      <div className="contact-box">
    <form onSubmit={registrarUsuario}>
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
