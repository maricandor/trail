import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import ChatbotComponent from '../components/Chatbot';
import "../styles/Navbar.css";
import "../styles/Inicio.css";
import { Link, useNavigate } from 'react-router-dom';
import logocolorido from "../images/logos/logocolorido.png";
import imgComput from "../images/logos/imgComput.png";


const Home = () => {
    const navigate = useNavigate();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <>
<ChatbotComponent/>
            <header>

                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>

                <nav ref={navRef}>
                    <Link to="/inicio">Inicio</Link>
                    <Link to="/cursos">Cursos</Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>

                <img src={logocolorido} alt="logo" class='logo' />

                <a href="/src/pages/Login.js">
                    <button className="btnlogin" onClick={(e) => {navigate('/login'); e.preventDefault()}}>Login</button>
                </a>

            </header>

            <div className="banner">
                <h1 className='titulo-p'>Bem-vindo ao Trail !</h1>
                <p> Expanda os Horizontes da Educação em sua Instituição</p>
                <div class="cta-btns">
                    <a href="./Login.js" class="secondary-cta">
                        <span> Começar</span>
                        <svg viewBox="0 0 19 8" fill="none">
                            <path
                                d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5H18V3.5H0V4.5Z"
                                fill="black" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="main">
                <div className="text">
                    <h2>Trilhas Educacionais Personalizadas:</h2>
                    <p class="subhead">
                        Liberdade de criar trilhas educacionais <br />
                        personalizadas de acordo com os<br />
                        objetivos e necessidades específicas da <br />
                        sua instituição.<br/>
                    <a href="./Login.js" class="primary-cta">SAIBA MAIS</a>
                    </p>
                </div>
                <img src={imgComput} alt="Comput" class='imgComput' />
            </div>
            
            <Footer />
        </>
    );
}

export default Home;
