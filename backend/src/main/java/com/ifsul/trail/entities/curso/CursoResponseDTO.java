package com.ifsul.trail.entities.curso;


public record CursoResponseDTO(
        Long id,
        String nome,
        String descricao,
        Long cargaHoraria
) {
    public CursoResponseDTO(Curso curso){
        this(curso.getId(), curso.getNome(), curso.getDescricao(), curso.getCargaHoraria());
    }
}
