import axios from "axios";

export const cadastrarCurso = async (nome, descricao, cargaHoraria) => {
    try {
      const response = await axios.post(
        'http://localhost:8081/curso/add',
        {
          nome,
          descricao,
          cargaHoraria,
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
  
export const atualizarCurso = async (cursoId, dadosAtualizados) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/curso/update/${cursoId}`,
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
  
export const excluirCurso = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/curso/drop/${id}`,
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
  
export const vincularDisciplinaAoCurso = async (cursoId, disciplinaId) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/curso/${cursoId}/${disciplinaId}`,
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
  
export const obterCursos = async () => {
    try {
      const response = await axios.get('http://localhost:8081/curso/findAll');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const obterCursoPorNome = async (nome) => {
    try {
      const response = await axios.get('http://localhost:8081/curso/find/${nome}');
      return response.data;
    } catch (error) {
      throw error;
    }
  };  