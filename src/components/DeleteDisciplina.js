import React, { useState, useEffect } from 'react';
import { excluirDisciplina } from 'src/pages/Api.js'; 

const ExcluirDisciplina = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');


  const handleExcluirDisciplina = async () => {
    try {
      // Use a função para excluir o usuário
      const data = await excluirDisciplina(id, token);
      console.log('Disciplina excluída com sucesso:', data);
      // Adicione lógica adicional aqui conforme necessário.
    } catch (error) {
      console.error('Erro ao excluir Disciplina:', error);
      // Trate os erros conforme necessário.
    }
  };

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
};

export default ExcluirDisciplina;