package com.ifsul.trail.entities.curso;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CursoRequestDTO(
    @NotBlank
    String nome,
    @NotNull
    String descricao,
    Long cargaHoraria
        ) {
}
