import React, { useRef, useEffect, useState } from 'react';
import { vincularReq } from './Api.js';
import '../App';

const VincularRequisito = () => {
	const [disciplinaNome, setNomeDis] = useState('');
	const [preReqNome, setNomePreReq] = useState('');
//	const [token, setToken] = useState(null);
  
	// Sua lógica de login aqui para definir o token
  
	const handleVincularRequisito = async () => {
	  try {
		const data = await vincularReq(disciplinaNome, preReqNome);
		console.log('Disciplina vinculada com sucesso:', data);
		// Adicione lógica adicional aqui conforme necessário.
	  } catch (error) {
		console.error('Erro durante o processo:', error);
		// Trate os erros conforme necessário.
	  }
	};
  
	return (
	  <div>
		<h1>Cadastro de Dependência</h1>
		<form>
		  <label>Nome da disciplina:</label>
		  <input type="text" value={disciplinaNome} onChange={(e) => setNomeDis(e.target.value)} />
  
		  <label>Nome da dependência:</label>
		  <input type="text" value={preReqNome} onChange={(e) => setNomePreReq(e.target.value)} />
  
		  <button type="button" onClick={handleVincularRequisito}>Vincular Disciplina</button>
		</form>
	  </div>
	);
  };
  
  export default VincularRequisito;