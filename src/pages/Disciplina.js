import React, { useRef, useEffect, useState } from 'react';
import {cadastrarDisciplina} from "./disciplina/apiDis"
import {vincularReq} from "./disciplina/apiDis"
import {atualizarDisciplina} from "./disciplina/apiDis"
import {excluirDisciplina} from "./disciplina/apiDis"
import {obterDisciplinas} from "./disciplina/apiDis"
import {obterDisciplinasPorCurso} from "./disciplina/apiDis"
import {obterDisciplinaPorNome} from "./disciplina/apiDis"
import '../App';

const Disciplina = () => {

	const [nome, setNome] = useState('');
	const [vigencia, setVigencia] = useState('');
	const [cargaHorariaDis, setCargaHorariaDis] = useState('');
    const [codigo, setCodigo] = useState('');
    const [periodoLetivo, setPeriodoLetivo] = useState('');
	const [id, setId] = useState('');
    const [dadosAtualizados, setDadosAtualizados] = useState({
	nome: '',
	vigencia: '',
	cargaHorariaDis: '',
	codigo: '',
	periodoLetivo: '',
  });

  
	const handleCadastroDisciplina = async () => {
	  try {
		const data = await cadastrarDisciplina(nome, vigencia, cargaHorariaDis, codigo, periodoLetivo);
		console.log('Diciplina cadastrado com sucesso:', data);
		// Adicione lógica adicional aqui conforme necessário.
	  } catch (error) {
		console.error('Erro durante o cadastro de disciplina:', error);
		// Trate os erros conforme necessário.
	  }
  
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
  
//
  

  const handleAtualizarDisciplina = async () => {
	try {
	  // Use a função para atualizar a disciplina
	  const data = await atualizarDisciplina(id, dadosAtualizados);
	  console.log('Disciplina atualizada com sucesso:', data);
	  // Adicione lógica adicional aqui conforme necessário.
	} catch (error) {
	  console.error('Erro ao atualizar disciplina:', error);
	  // Trate os erros conforme necessário.
	}
  return (
	<div>
	  <h1>Atualizar Disciplina</h1>
	  <form>
		<label>Nome:</label>
		<input type="text" value={dadosAtualizados.nome} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, nome: e.target.value })} />

		<label>Vigência:</label>
		<input type="text" value={dadosAtualizados.vigencia} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, vigencia: e.target.value })} />

		<label>Carga Horária:</label>
		<input type="text" value={dadosAtualizados.cargaHorariaDis} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, cargaHorariaDis: e.target.value })} />

		<label>Código:</label>
		<input type="text" value={dadosAtualizados.codigo} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, codigo: e.target.value })} />

		<label>Período Letivo:</label>
		<input type="text" value={dadosAtualizados.periodoLetivo} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, periodoLetivo: e.target.value })} />

		<button type="button" onClick={handleAtualizarDisciplina}>Atualizar Disciplina</button>
	  </form>
	</div>
  );
  }
//
	const [disciplinaNome, setNomeDis] = useState('');
	const [preReqNome, setNomePreReq] = useState('');
  
	const handleVincularRequisito = async () => {
	  try {
		const data = await vincularReq(disciplinaNome, preReqNome);
		console.log('Disciplina vinculada com sucesso:', data);
		// Adicione lógica adicional aqui conforme necessário.
	  } catch (error) {
		console.error('Erro durante o processo:', error);
		// Trate os erros conforme necessário.
	  }
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
	}

	// const [id, setId] = useState('');
 
  const handleExcluirDisciplina = async () => {
    try {
      // Use a função para excluir o usuário
      const data = await excluirDisciplina(id);
      console.log('Disciplina excluída com sucesso:', data);
      // Adicione lógica adicional aqui conforme necessário.
    } catch (error) {
      console.error('Erro ao excluir Disciplina:', error);
      // Trate os erros conforme necessário.
    }
  return (
    <div>
      <h1>Excluir Disciplina</h1>
      <form>
        <label>ID da disciplina:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <button type="button" onClick={handleExcluirDisciplina}>Excluir Usuário</button>
      </form>
    </div>
  );
  }
  }
  export default Disciplina;