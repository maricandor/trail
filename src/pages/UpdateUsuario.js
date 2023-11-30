import React, { useRef, useEffect, useState } from 'react';
import { atualizarUsuario } from './Api.js';
import '../App';

const AtualizarUsuario = () => {
    const [id, setId] = useState('');
    const [dadosAtualizados, setDadosAtualizados] = useState({
      login: '',
      password: '',
      nome:'',
    });

    const handleAtualizarUsuario = async () => {
      try {
        // Use a função para atualizar o usuário
        const data = await atualizarUsuario(id, dadosAtualizados);
        console.log('Usuário atualizado com sucesso:', data);
        // Adicione lógica adicional aqui conforme necessário.
      } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        // Trate os erros conforme necessário.
      }
    };
  
    return (
      <div>
        <h1>Atualizar Usuário</h1>
        <form>
          <label>ID do Usuário:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
  
          <label>Login:</label>
          <input type="text" value={dadosAtualizados.login} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, login: e.target.value })} />
  
          <label>Password:</label>
          <input type="text" value={dadosAtualizados.password} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, password: e.target.value })} />
  
          <label>Nome:</label>
          <input type="text" value={dadosAtualizados.nome} onChange={(e) => setDadosAtualizados({ ...dadosAtualizados, nome: e.target.value })} />
          
          <button type="button" onClick={handleAtualizarUsuario}>Atualizar Usuário</button>
        </form>
      </div>
    );
  };
  
  export default AtualizarUsuario;