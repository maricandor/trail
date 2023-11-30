import React, { useRef, useEffect, useState } from 'react';
import { atualizarCurso } from './Api.js';
import '../App';

const AtualizarCurso = () => {
    const [id, setId] = useState('');
    const [dadosAtualizados, setDadosAtualizados] = useState({
      nome: '',
      descricao: '',
      cargaHoraria: '',
    });
  //  const [token, setToken] = useState(null);
  
    // ...
    const handleAtualizarCurso = async () => {
      try {
        // Use a função para atualizar a disciplina
        const data = await atualizarCurso(id, dadosAtualizados);
        console.log('Curso atualizada com sucesso:', data);
        // Adicione lógica adicional aqui conforme necessário.
      } catch (error) {
        console.error('Erro ao atualizar curso:', error);
        // Trate os erros conforme necessário.
      }
    };
  
    return (
      <div>
        <h1>Atualizar Curso</h1>
        <form>
          
          <label>Nome:</label>
          <input type="text" value={dadosAtualizados.nome} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, nome: e.target.value })} />
  
          <label>Descrição:</label>
          <input type="text" value={dadosAtualizados.vigencia} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, vigencia: e.target.value })} />
  
          <label>Carga Horária:</label>
          <input type="text" value={dadosAtualizados.cargaHorariaDis} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, cargaHorariaDis: e.target.value })} />
  
          <button type="button" onClick={handleAtualizarCurso}>Atualizar Curso</button>
        </form>
      </div>
    );
  };
  export default AtualizarCurso;