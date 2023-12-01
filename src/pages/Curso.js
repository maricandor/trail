import React, { useRef, useEffect, useState } from 'react';
import * as apiCursos from './cursos/apiCursos';
import {cadastrarCurso} from "./cursos/apiCursos"
import {atualizarCurso} from "./cursos/apiCursos"
import {excluirCurso} from "./cursos/apiCursos"
import {vincularDisciplinaAoCurso} from "./cursos/apiCursos"
import {obterCursos} from "./cursos/apiCursos"
import {obterCursoPorNome} from "./cursos/apiCursos"
import { FaBars, FaTimes } from 'react-icons/fa'; // Certifique-se de importar o ícone necessário
import '../App';
import Footer from '../components/Footer';
import "../styles/Navbar.css";
import "../styles/Inicio.css";
import "../styles/Cursos.css";
import { Link, useNavigate } from 'react-router-dom';
import logocolorido from "../images/logos/logocolorido.png";
import imgComput from "../images/logos/imgComput.png"

const Curso = () => {
	const navigate = useNavigate();
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const [nome, setNome] = useState('');
	const [descricao, setDescricao] = useState('');
	const [cargaHoraria, setCargaHoraria] = useState('');
	const [cursoId, setCursoId] = useState('');
	const [disciplinaId, setDisciplinaId] = useState('');
	const [id, setId]=useState('');


	const handleCadastroCurso = async () => {
	try {
		const data = await cadastrarCurso(nome, descricao, cargaHoraria);
		console.log('Curso cadastrado com sucesso:', data);
		// Adicione lógica adicional aqui conforme necessário.
	} catch (error) {
		console.error('Erro durante o cadastro do curso:', error);
		// Trate os erros conforme necessário.
	}
	
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
	<Footer />

	</>
	);
};

    const [dadosAtualizados, setDadosAtualizados] = useState({
      nome: '',
      descricao: '',
      cargaHoraria: '',
    });
  
    const handleAtualizarCurso = async () => {
      try {
        const data = await atualizarCurso(nome, dadosAtualizados);
        setId(id);
        console.log('Curso atualizada com sucesso:', id);
      } catch (error) {
        console.error('Erro ao atualizar curso:', error);
      }
    
    return (
      <div>
        <h1>Atualizar Curso</h1>
        <form>
          
          <label>Nome:</label>
          <input type="text" value={dadosAtualizados.nome} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, nome: e.target.value })} />
  
          <label>Descrição:</label>
          <input type="text" value={dadosAtualizados.descricao} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, vigencia: e.target.value })} />
  
          <label>Carga Horária:</label>
          <input type="text" value={dadosAtualizados.cargaHorarias} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, cargaHorariaDis: e.target.value })} />
  
          <button type="button" onClick={handleAtualizarCurso}>Atualizar Curso</button>
        </form>
      </div>
    );
	}

const handleVincularDisciplinaAoCurso = async () => {
  try {
	const data = await vincularDisciplinaAoCurso(cursoId, disciplinaId);
	console.log('Disciplina vinculada ao curso com sucesso:', data);
  } catch (error) {
	console.error('Erro ao vincular disciplina ao curso:', error);
	// Trate os erros conforme necessário.
  }


return (
  <div>
	<h1>Vincular Disciplina ao Curso</h1>
	<form>
	  <label>ID do Curso:</label>
	  <input type="text" value={cursoId} onChange={(e) => setCursoId(e.target.value)} />

	  <label>ID da Diciplina:</label>
	  <input type="text" value={disciplinaId} onChange={(e) => setDisciplinaId(e.target.value)} />

	  <button type="button" onClick={handleVincularDisciplinaAoCurso}>Vincular Disciplina ao Curso</button>
	</form>
  </div>
);
}

  const handleExcluirCurso = async () => {
    try {
      const data = await excluirCurso(id);
      console.log('Curso excluído com sucesso:', data);
    } catch (error) {
      console.error('Erro ao excluir curso:', error);
    }
 

  return (
    <div>
      <h1>Excluir Curso</h1>
      <form>
        <label>ID do Curso:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <button type="button" onClick={handleExcluirCurso}>Excluir Usuário</button>
      </form>
    </div>
  );
};
}

export default Curso;
