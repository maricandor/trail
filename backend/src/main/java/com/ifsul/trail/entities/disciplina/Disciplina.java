package com.ifsul.trail.entities.disciplina;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.curso.CursoRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Disciplina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long disciplinaId;
    private String nome;
    private String vigencia;
    private String cargaHorariaDis;
    private String codigo;
    private String periodoLetivo;
    @ManyToOne
    @JoinColumn(name = "curso_id")
    private Curso curso;
    @ManyToMany
    @JoinTable(
            name = "disciplina_prerequisito",
            joinColumns = @JoinColumn(name = "disciplina_id"),
            inverseJoinColumns = @JoinColumn(name = "prerequisito_id")
    )
    @JsonIgnore
    private List<Disciplina> preRequisitos = new ArrayList<>();

    public void adicionarPreRequisito(Disciplina requisito){
        this.preRequisitos.add(requisito);
    }

    public Disciplina(DisciplinaDTO data) {
        this.nome = data.nome();
        this.vigencia = data.vigencia();
        this.cargaHorariaDis = data.cargaHorariaDis();
        this.codigo = data.codigo();
        this.periodoLetivo = data.periodoLetivo();
    }


}
