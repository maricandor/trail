import React, { useState, useEffect } from 'react';
import { vincularDisciplinaAoCurso } from 'src/pages/Api.js'; 

const VincularDisciplinaAoCurso = () => {
  const [cursoId, setCursoId] = useState('');
  const [disciplinaId, setDisciplinaId] = useState('');
  const [token, setToken] = useState('');

  const handleVincularDisciplinaAoCurso = async () => {
    try {
      const data = await vincularDisciplinaAoCurso(cursoId, disciplinaId);
      console.log('Disciplina vinculada ao curso com sucesso:', data);
    } catch (error) {
      console.error('Erro ao vincular disciplina ao curso:', error);
      // Trate os erros conforme necessário.
    }
  };

  return (
    <div>
      <h1>Vincular Disciplina ao Curso</h1>
      <form>
        <label>ID do Curso:</label>
        <input type="text" value={cursoId} onChange={(e) => setCursoId(e.target.value)} />

        <label>ID da Diciplina:</label>
        <input type="text" value={usuarioId} onChange={(e) => setDisciplinaId(e.target.value)} />

        <button type="button" onClick={handleVincularDisciplinaAoCurso}>Vincular Disciplina ao Curso</button>
      </form>
    </div>
  );
};

export default VincularDisciplinaAoCurso;