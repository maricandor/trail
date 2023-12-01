import React, { useRef, useEffect, useState } from 'react';
import {usuarioLogin} from "./usuario/apiUser"
import {cadastrarUsuario} from "./usuario/apiUser"
import {atualizarUsuario} from "./usuario/apiUser"
import {excluirUsuario} from "./usuario/apiUser"
import {vincularUsuarioAoCurso} from "./usuario/apiUser"
import '../App';
import Footer from '../components/Footer';
import "../styles/Navbar.css";
import "../styles/Inicio.css";
import "../styles/Cursos.css";
import { Link, useNavigate } from 'react-router-dom';
import logocolorido from "../images/logos/logocolorido.png";
import "../styles/forms.css";
import logobranco from "../images/logos/logobranco.png";
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';

const Usuario = () => {

    const navigate = useNavigate();
    const navRef = useRef();
    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const [dadosAtualizados, setDadosAtualizados] = useState({
      login: '',
      password: '',
      nome:'',
    });
  
    const handleRegistroUsuario = async () => {
      try {
        const data = await cadastrarUsuario(nome, login, password)
        console.log('Registro bem-sucedido:', data);
        // Adicione lógica adicional aqui, como redirecionar o usuário ou exibir uma mensagem de sucesso.
      } catch (error) {
        console.error('Erro durante o registro:', error);
        // Trate os erros conforme necessário, como exibir uma mensagem de erro para o usuário.
      }
    
    return (
      <>
    <div className="container">
      <div className="contact-box">
    <form>
      <h1> Cadastro </h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="field" placeholder=" Nome:" /> <br /> <br />
      <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="field" placeholder=" Email:" /> <br /> <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="field" placeholder=" Senha:" /> <br /> <br />
      <button type="button" onClick={handleRegistroUsuario}>Cadastrar Curso</button>      <p>Já tem uma conta? <a href='/login'>Login</a></p>
    </form>
    </div>
      <img src={logobranco} className='left' alt="logobranco" />
    </div>
        <Footer />
        </>
  );
    };

    const handleAtualizarUsuario = async () => {
      try {
        // Use a função para atualizar o usuário
        const data = await atualizarUsuario(id, dadosAtualizados);
        console.log('Usuário atualizado com sucesso:', data);
        // Adicione lógica adicional aqui conforme necessário.
      } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        // Trate os erros conforme necessário.
      }
      return (
        <div>
          <h1>Atualizar Usuário</h1>
          <form>
            <label>ID do Usuário:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
    
            <label>Login:</label>
            <input type="text" value={dadosAtualizados.login} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, login: e.target.value })} />
    
            <label>Password:</label>
            <input type="text" value={dadosAtualizados.password} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, password: e.target.value })} />
    
            <label>Nome:</label>
            <input type="text" value={dadosAtualizados.nome} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, nome: e.target.value })} />
            
            <button type="button" onClick={handleAtualizarUsuario}>Atualizar Usuário</button>
          </form>
        </div>
      );
    };
    const handleLogin = async () => {
      try {
        const userId = await usuarioLogin(login, password);
        setId(userId); // Atualiza o estado do ID após o login bem-sucedido
        console.log('Login bem-sucedido! ID:', userId);
      } catch (error) {
        console.error('Erro durante o login:', error);
      }

        return (
          <>
            <div className="container">
                <div className="contact-box">
            <form onSubmit={handleLogin}>
              <h1> Login </h1>
              <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="field" placeholder="Login:" /> <br /> <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="field" placeholder="Senha:" /> <br /> <br />
              <button type="button" onClick={handleLogin}>Login</button>
              <p>Ainda não tem uma conta? <a href='/cadastro'>Registrar</a></p>
            </form>
      
          </div>
          <img src={logobranco} className='left' alt="logobranco" />
  </div>
  <Footer />
</>
  );
        };

  const [cursoId, setCursoId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');

  const handleVincularUsuarioAoCurso = async () => {
    try {
      const data = await vincularUsuarioAoCurso(cursoId, usuarioId);
      console.log('Usuário vinculado ao curso com sucesso:', data);
    } catch (error) {
      console.error('Erro ao vincular usuário ao curso:', error);
      // Trate os erros conforme necessário.
    }

  return (
    <div>
      <h1>Vincular Usuário ao Curso</h1>
      <form>
        <label>ID do Curso:</label>
        <input type="text" value={cursoId} onChange={(e) => setCursoId(e.target.value)} />

        <label>ID do Usuário:</label>
        <input type="text" value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} />

        <button type="button" onClick={handleVincularUsuarioAoCurso}>Vincular Usuário ao Curso</button>
      </form>
    </div>
  );
  };

  const handleExcluirUsuario = async () => {
    try {
      // Use a função para excluir o usuário
      const data = await excluirUsuario(id);
      console.log('Usuário excluído com sucesso:', data);
      // Adicione lógica adicional aqui conforme necessário.
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      // Trate os erros conforme necessário.
    }

  return (
    <div>
      <h1>Excluir Usuário</h1>
      <form>
        <label>ID do Usuário:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <button type="button" onClick={handleExcluirUsuario}>Excluir Usuário</button>
      </form>
    </div>
  );
  };
}

  export default Usuario;