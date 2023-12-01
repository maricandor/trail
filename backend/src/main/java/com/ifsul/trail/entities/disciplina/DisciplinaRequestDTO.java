package com.ifsul.trail.entities.disciplina;

public record DisciplinaRequestDTO(
        Long disciplinaId,
        String nome,
        String vigencia,
        String cargaHorariaDis,
        String codigo,
        String periodoLetivo
) {
    public DisciplinaRequestDTO(Disciplina disciplina) {
        this(disciplina.getDisciplinaId(), disciplina.getNome(), disciplina.getVigencia(),
                disciplina.getCargaHorariaDis(), disciplina.getCodigo(), disciplina.getPeriodoLetivo());
    }
}
