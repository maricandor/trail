import React, { useState, useEffect } from 'react';
import { excluirCurso } from 'src/pages/Api.js'; 

const ExcluirCurso = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');

  const handleExcluirCurso = async () => {
    try {
      const data = await excluirCurso(id, token);
      console.log('Curso excluído com sucesso:', data);
    } catch (error) {
      console.error('Erro ao excluir curso:', error);
    }
    }; 

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

export default ExcluirCurso;