package com.ifsul.trail.entities.disciplina;

import com.ifsul.trail.entities.curso.Curso;


public record DisciplinaDTO (
    String nome,
    String vigencia,
    String cargaHorariaDis,
    String codigo,
    String periodoLetivo
//    Curso curso
){

}

