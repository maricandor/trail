import React, { useRef , useState} from 'react';
import axios from 'axios';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import "../styles/forms.css";
import { Link, useNavigate } from 'react-router-dom';
import logobranco from "../images/logos/logobranco.png";
const urlback= "http://localhost:8081"

/*
const Home = () => {
    const navigate = useNavigate();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
*/    
const LoginFormulario = () => {
        const [login, setLogin] = useState('');
        const [password, setPassword] = useState('');
        const [token, setToken] = useState(null); // Estado para armazenar o token
      
        const handleLogin = async (event) => {
          event.preventDefault();
      
          try {
            const response = await axios.post(urlback+'/auth/login', {
              login,
              password,
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            // Extrai o token da resposta e o armazena no estado
            const authToken = response.data.token;
            setToken(authToken);
      
            console.log('Login bem-sucedido! Token:', authToken);
      
            // Adicione lógica adicional aqui, como redirecionar o usuário ou exibir uma mensagem de sucesso.
          } catch (error) {
            console.error('Erro durante o login:', error);
            // Trate os erros conforme necessário, como exibir uma mensagem de erro para o usuário.
          }
        };
      
        return (
          <>
            <div className="container">
                <div className="contact-box">
            <form onSubmit={handleLogin}>
              <h1> Login </h1>
              <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="field" placeholder="Login:" /> <br /> <br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="field" placeholder="Senha:" /> <br /> <br />
              <input type="submit" className="btn" value="Entrar" /><br />
              <p>Ainda não tem uma conta? <a href='/cadastro'>Registrar</a></p>
            </form>
      
           </div>
           <img src={logobranco} className='left' alt="logobranco" />
   </div>
   <Footer />
</>
        );
      };
export default LoginFormulario;
    