import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../App';
import Footer from '../components/Footer';
import "../styles/NavBarU.css";
import "../styles/creation.css";
import logobranco from "../images/logos/logobranco.png";
import plus from "../images/icons/plus 1.svg";

const Home = () => {
    const navRef = useRef();
    const [bannerTitle, setBannerTitle] = useState('');
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleTitleChange = (e) => {
        setBannerTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar ou processar as informações do usuário
        console.log('Banner Title:', bannerTitle);
    };
    const [editableText, setEditableText] = useState('Texto Editável');

    const handleTextChange = (e) => {
        setEditableText(e.target.value);
    };

    return (
        <>
            <header className='huser'>
                <button className="nav-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className="logo-container">
                    <img src={logobranco} alt="logob" className='logo' onClick={(e) => { navigate('/inicio'); e.preventDefault() }} />
                </div>
                <div className="user-container">
                    <Link to="/userPage" className="user-link">
                        <p className="user-text">User Usuário</p>
                        <button className="btnUser">US</button>
                    </Link>
                </div>
            </header>

            <nav ref={navRef} className={`navbar ${isMenuOpen ? 'show-menu' : ''}`}>
                <ul>
                    <Link to="/inicio" className="link-white">Página Inicial</Link><br />
                    <Link to="/cursos" className="link-white">Cursos</Link><br />
                    <Link to="/userDashBoard" className="link-white">Minhas Trilhas</Link><br />
                    <Link to="/chatUpload" className="link-white">TrailBot</Link><br />
                </ul>
            </nav>

            <div className='center-co'>
                <div class="banner">
                    <form className="banner-form" onSubmit={handleSubmit}>
                        <label htmlFor="bannerTitle">Título do Banner:</label>
                        <input
                            type="text"
                            id="bannerTitle"
                            value={bannerTitle}
                            onChange={handleTitleChange}
                            placeholder="Adicione um título para sua Trilha"
                        />

                        <button type="submit" id="saveButton">Salvar</button>
                    </form>

                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="editableText">Texto Editável:</label>
                        <textarea
                            id="editableText"
                            value={editableText}
                            onChange={handleTextChange}
                            placeholder="Edite o texto aqui"
                        ></textarea>

                        <button type="submit" id="saveButton">Salvar</button>
                    </form>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;
