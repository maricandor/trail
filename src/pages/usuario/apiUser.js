import axios from 'axios';

export const usuarioLogin = async (login, password) => {
  try {
    const response = await axios.post(
      'http://localhost:8081/auth/login',
      {
        login,
        password,
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

export const cadastrarUsuario = async (nome, login, password) => {
  try {
    const response = await axios.post(
      'http://localhost:8081/auth/register',
      {
        nome,
        login,
        password},
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

export const atualizarUsuario = async (id, dadosAtualizados) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/auth/update/${id}`,
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
  
export const excluirUsuario = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/auth/delete/${id}`,
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
  

  export const vincularUsuarioAoCurso = async (cursoId, usuarioId) => {
    try {
      const response = await axios.put(
        `http://localhost:8081/auth/${cursoId}/${usuarioId}`,
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
    