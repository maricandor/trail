package com.ifsul.trail.entities.curso;


public record CursoResponseDTO(
        Long cursoId,
        String nome,
        String descricao,
        Long cargaHoraria
) {
    public CursoResponseDTO(Curso curso){
        this(curso.getCursoId(), curso.getNome(), curso.getDescricao(), curso.getCargaHoraria());
    }
}
