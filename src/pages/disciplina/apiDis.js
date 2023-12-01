import axios from "axios";
export const cadastrarDisciplina = async (nome, vigencia, cargaHorariaDis, codigo, periodoLetivo) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/disciplina/add',
        {
          nome,
          vigencia,
          cargaHorariaDis,
          codigo,
          periodoLetivo
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const vincularReq = async (disciplinaNome, preReqNome) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/disciplina/vincularReq',
        {
          disciplinaNome,
          preReqNome
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const atualizarDisciplina = async (disciplinaId, dadosAtualizados) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/disciplina/update/${disciplinaId}`,
        dadosAtualizados,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const excluirDisciplina = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/disciplina/drop/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const obterDisciplinas = async () => {
    try {
      const response = await axios.get('http://localhost:8081/disciplina/findAll');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const obterDisciplinasPorCurso = async (cursoId) => {
    try {
      const response = await axios.get('http://localhost:8081/disciplina/${cursoId}/getAll');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
export const obterDisciplinaPorNome = async () => {
    try {
      const response = await axios.get('http://localhost:8081/disciplina/find/${nome}');
      return response.data;
    } catch (error) {
      throw error;
    }
  };  