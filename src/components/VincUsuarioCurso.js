import React, { useState, useEffect } from 'react';
import { vincularUsuarioAoCurso } from 'src/pages/Api.js'; 

const VincularUsuarioAoCurso = () => {
  const [cursoId, setCursoId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [token, setToken] = useState('');

  const handleVincularUsuarioAoCurso = async () => {
    try {
      const data = await vincularUsuarioAoCurso(cursoId, usuarioId);
      console.log('Usuário vinculado ao curso com sucesso:', data);
    } catch (error) {
      console.error('Erro ao vincular usuário ao curso:', error);
      // Trate os erros conforme necessário.
    }
  };

  return (
    <div>
      <h1>Vincular Usuário ao Curso</h1>
      <form>
        <label>ID do Curso:</label>
        <input type="text" value={cursoId} onChange={(e) => setCursoId(e.target.value)} />

        <label>ID do Usuário:</label>
        <input type="text" value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} />

        <button type="button" onClick={handleVincularUsuarioAoCurso}>Vincular Usuário ao Curso</button>
      </form>
    </div>
  );
};

export default VincularUsuarioAoCurso;