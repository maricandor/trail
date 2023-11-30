import axios from 'axios';

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
    //      'Authorization': `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
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
    //      'Authorization': `Bearer ${token}`,
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
    //      'Authorization': `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const atualizarDisciplina = async (disciplinaId, dadosAtualizados, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8081/disciplina/update/${disciplinaId}`,
      dadosAtualizados,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const atualizarCurso = async (cursoId, dadosAtualizados, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8081/curso/update/${cursoId}`,
      dadosAtualizados,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const atualizarUsuario = async (id, dadosAtualizados, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8081/auth/update/${id}`,
      dadosAtualizados,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const excluirUsuario = async (id, token) => {
  try {
    const response = await axios.delete(
      `http://localhost:8081/auth/delete/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const excluirDisciplina = async (id, token) => {
  try {
    const response = await axios.delete(
      `http://localhost:8081/disciplina/drop/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const excluirCurso = async (id, token) => {
  try {
    const response = await axios.delete(
      `http://localhost:8081/curso/drop/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const vincularUsuarioAoCurso = async (cursoId, usuarioId, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8081/auth/${cursoId}/${usuarioId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const vincularDisciplinaAoCurso = async (cursoId, disciplinaId, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8081/curso/${cursoId}/${disciplinaId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
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

export const obterDisciplinas = async () => {
  try {
    const response = await axios.get('http://localhost:8081/disciplina/findAll');
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

export const obterDisciplinaPorNome = async () => {
  try {
    const response = await axios.get('http://localhost:8081/disciplina/find/${nome}');
    return response.data;
  } catch (error) {
    throw error;
  }
};