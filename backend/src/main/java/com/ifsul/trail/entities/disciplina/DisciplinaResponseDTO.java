package com.ifsul.trail.entities.disciplina;

import com.ifsul.trail.entities.curso.Curso;

public record DisciplinaResponseDTO(
  //  Long disciplinaId,
    String nome,
    String vigencia,
    String cargaHorariaDis,
    String codigo,
    String periodoLetivo
    ) {
        public DisciplinaResponseDTO(Disciplina disciplina){
            this( disciplina.getNome(), disciplina.getVigencia(),
                    disciplina.getCargaHorariaDis(),disciplina.getCodigo(),disciplina.getPeriodoLetivo());
        }
    }

