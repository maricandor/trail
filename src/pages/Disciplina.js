import React, { useRef, useEffect, useState } from 'react';
import { cadastrarDisciplina } from './Api.js';
import '../App';

const CadastroDisciplina = () => {
	const [nome, setNome] = useState('');
	const [vigencia, setVigencia] = useState('');
	const [cargaHorariaDis, setCargaHorariaDis] = useState('');
    const [codigo, setCodigo] = useState('');
    const [periodoLetivo, setPeriodoLetivo] = useState('');
//	const [token, setToken] = useState(null);
  
	const handleCadastroDisciplina = async () => {
	  try {
		const data = await cadastrarDisciplina(nome, vigencia, cargaHorariaDis, codigo, periodoLetivo);
		console.log('Diciplina cadastrado com sucesso:', data);
		// Adicione lógica adicional aqui conforme necessário.
	  } catch (error) {
		console.error('Erro durante o cadastro de disciplina:', error);
		// Trate os erros conforme necessário.
	  }
	};
  
	return (
	  <div>
		<h1>Cadastro de Disciplina</h1>
		<form>
		<label>Nome:</label>
		<input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
  
		<label>Vigência:</label>
		<input type="text" value={vigencia} onChange={(e) => setVigencia(e.target.value)} />
  
		<label>Carga Horária:</label>
		<input type="text" value={cargaHorariaDis} onChange={(e) => setCargaHorariaDis(e.target.value)} />

        <label>Código:</label>
		<input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

        <label>Período Letivo:</label>
		<input type="text" value={periodoLetivo} onChange={(e) => setPeriodoLetivo(e.target.value)} />
  
		<button type="button" onClick={handleCadastroDisciplina}>Cadastrar Disciplina</button>
		</form>
	  </div>
	);
  };
  
  export default CadastroDisciplina;