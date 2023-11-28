package com.ifsul.trail.entities.curso;

import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.usuario.Usuario;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "curso")
@Entity(name = "curso")
@EqualsAndHashCode(of = "cursoId")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cursoId;
    private String nome;
    private String descricao;
    private Long cargaHoraria;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    @OneToMany(mappedBy = "curso")
    private List<Disciplina> disciplinas = new ArrayList<>();

    public Curso(CursoRequestDTO data) {
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.cargaHoraria = data.cargaHoraria();
    }

    public void adicionarDisciplina(Disciplina disciplina){
        this.disciplinas.add(disciplina);
        disciplina.setCurso(this);
    }
    /*
    public void adicionarUsuario(Usuario usuario){
        this.usuario.add(usuario);
        usuario.setCursos((List<Curso>) this);
    }
    */
}
