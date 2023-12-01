package com.ifsul.trail.entities.curso;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CursoRequestDTO(
        Long cursoId,
    @NotBlank
    String nome,
    @NotNull
    String descricao,
    @NotNull
    Long cargaHoraria
        ) {
}
