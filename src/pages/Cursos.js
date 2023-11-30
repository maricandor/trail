import React, { useRef, useEffect, useState } from 'react';
import { cadastrarCurso } from './Api.js';
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import "../styles/Navbar.css";
import "../styles/Inicio.css";
import "../styles/Cursos.css";
import { Link, useNavigate } from 'react-router-dom';
import logocolorido from "../images/logos/logocolorido.png";
import imgComput from "../images/logos/imgComput.png"
const urlback= "http://localhost:8081"


const CadastroCurso = () => {
	const [nome, setNome] = useState('');
	const [descricao, setDescricao] = useState('');
	const [cargaHoraria, setCargaHoraria] = useState('');
//	const [token, setToken] = useState(null);
  
	// Sua lógica de login aqui para definir o token
  
	const handleCadastroCurso = async () => {
	  try {
		const data = await cadastrarCurso(nome, descricao, cargaHoraria);
		console.log('Curso cadastrado com sucesso:', data);
		// Adicione lógica adicional aqui conforme necessário.
	  } catch (error) {
		console.error('Erro durante o cadastro do curso:', error);
		// Trate os erros conforme necessário.
	  }
	};
  
	return (
	  <div>
		<h1>Cadastro de Curso</h1>
		<form>
		  <label>Nome:</label>
		  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
  
		  <label>Descrição:</label>
		  <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
  
		  <label>Carga Horária:</label>
		  <input type="text" value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} />
  
		  <button type="button" onClick={handleCadastroCurso}>Cadastrar Curso</button>
		</form>
	  </div>
	);
  };
  
  export default CadastroCurso;

//   CRIEI UM FORM SÓ PRA TESTAR
/*
const Home = () => {
	const navigate = useNavigate();
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	return (
		<>
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
					<button className="btnlogin" onClick={(e) => { navigate('/login'); e.preventDefault() }}>Login</button>
				</a>

			</header>


			<div className="main-content1">
				<h1 className='cursos'>Cursos</h1>
				<p>Use os filtros abaixo para explorar as opções de cursos</p>

			{/*Search Bar
			<div className="searchbar">
				<form autoComplete="off">
					<div className="finder">
						<div className="finder__outer">
							<div className="finder__inner">
								<div className="finder__icon" ref={navRef}></div>
								<input className="finder__input" type="text" name="q" />
							</div>
						</div>
					</div>
				</form>
			</div>

			<div className='cursos'>
				<div className='card'>
                        <h2 className='nome-curso'>Técnico em Desenvolvimento de Sistemas</h2>
                        <button className="primary-cta" onClick={(e) => { navigate('/userPage'); e.preventDefault() }}>Saiba Mais</button>
                    </div>
				</div>
				</div>

			<script src="../components/searchbar.js"></script>
			<Footer />
		</>
	);
}
export default Home;
*/