import React, { useRef, useEffect, useState } from 'react';
import { atualizarDisciplina } from './Api.js';
import '../App';

const AtualizarDisciplina = () => {
    const [id, setId] = useState('');
    const [dadosAtualizados, setDadosAtualizados] = useState({
      nome: '',
      vigencia: '',
      cargaHorariaDis: '',
      codigo: '',
      periodoLetivo: '',
    });
  //  const [token, setToken] = useState(null);
  
    // ...
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
    };
  
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
  };
  export default AtualizarDisciplina;