import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import "../styles/NavBarU.css";
import "../styles/userEdit.css";
import "../styles/ChatUpload.css";

import "../styles/UserDashboard.css";
import { Link, useNavigate } from 'react-router-dom';
import logobranco from "../images/logos/logobranco.png";
import logout_icon from "../images/icons/logout_icon.svg";
import plus from "../images/icons/plus 1.svg";

const Home = () => {
    const navigate = useNavigate();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <>
            <header className='huser'>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
                <div className="logo-container">
                    <img src={logobranco} alt="logob" className='logo' onClick={(e) => { navigate('/inicio'); e.preventDefault() }} />
                </div>
            </header>

            <body>
                <div className='container-left'>

                    <div className='top-collum'>
                        <Link to="/inicio" className="link-white">Página Inicial</Link><br />
                        <br />
                        <Link to="/cursos" className="link-white">Cursos</Link><br />
                        <br />
                        <Link to="/userDashBoard" className="link-white">Minhas Trilhas</Link><br />
                        <br />
                        <Link to="/chatUpload" className="link-white">TrailBot</Link><br />

                        <h3 className="trilha-container">
                            Nova Trilha
                            <button className="btnTrail" onClick={(e) => { navigate('/creationPage'); e.preventDefault() }}>
                                <img src={plus} alt="Ícone da Trilha" className="iconTrail" />
                            </button>
                        </h3>

                        <h3 className="logout">
                            <span>Sair</span>
                            <img src={logout_icon} alt="logot" className='logot' />
                        </h3>
                    </div>
                </div>

                <div className='right-info'>
                    <div className="user-edit">
                        <a href="/src/pages/Login.js" className="user-link">
                            <button className="btnEdit1" onClick={(e) => { navigate('/userPage'); e.preventDefault() }}>US</button>
                            <p className="edit-text">User Usuário</p>
                        </a>
                    </div>

                    <div className='card-config1'>
                        <h2 className='userText'>Nome</h2>
                        <p className='user-info'>User Usuario</p>
                        <button className="btnEdit" onClick={(e) => { navigate('/userPage'); e.preventDefault() }}>Editar</button>
                    </div>

                    <div className='card-config2'>
                        <h2 className='userText'>Email</h2>
                        <p className='user-info'>User Usuario</p>
                        <button className="btnEdit" onClick={(e) => { navigate('/userPage'); e.preventDefault() }}>Editar</button>
                    </div>

                    <div className='card-config3'>
                        <h2 className='userText'>Senha</h2>
                        <p className='user-info'>User Usuario</p>
                        <button className="btnEdit" onClick={(e) => { navigate('/userPage'); e.preventDefault() }}>Editar</button>
                    </div>

                </div>
            </body>
            <Footer />
        </>
    );
}

export default Home;
