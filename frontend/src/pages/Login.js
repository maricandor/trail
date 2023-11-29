import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import "../styles/forms.css";
import { Link, useNavigate } from 'react-router-dom';
import logobranco from "../images/logos/logobranco.png";

const Home = () => {
    const navigate = useNavigate();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };


    return (
        <>
            <div class="container">
                <div class="contact-box">
                    <form name="dados" action="" method="POST" enctype="multipart/form-data">
                        <h1> Login </h1>
                        <input type="text" name="codigo" size="150" class="field" placeholder="Email:" value="" /> <br /> <br />
                        <input type="text" name="tipo" size="150" class="field" placeholder="Senha:" value="" /> <br /> <br />
                        <input type="submit" class="btn" value="Login" /><br/>
                        <p>Ainda não tem uma conta? <a href='/cadastro'>Cadastre-se</a></p>

                    </form>
                </div>
                    <img src={logobranco} className='left' alt="logobranco" />
            </div>

            <Footer />
        </>
    );
}

export default Home;
