import React, { useState, useEffect } from 'react';
import { excluirUsuario } from 'src/pages/Api.js'; 

const ExcluirUsuario = () => {
  const [id, setId] = useState('');
  const [token, setToken] = useState('');


  const handleExcluirUsuario = async () => {
    try {
      // Use a função para excluir o usuário
      const data = await excluirUsuario(id, token);
      console.log('Usuário excluído com sucesso:', data);
      // Adicione lógica adicional aqui conforme necessário.
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      // Trate os erros conforme necessário.
    }
  };

  return (
    <div>
      <h1>Excluir Usuário</h1>
      <form>
        <label>ID do Usuário:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

        <button type="button" onClick={handleExcluirUsuario}>Excluir Usuário</button>
      </form>
    </div>
  );
};

export default ExcluirUsuario;