package com.ifsul.trail.entities.curso;

import com.ifsul.trail.entities.usuario.Usuario;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "curso")
@Entity(name = "curso")
@EqualsAndHashCode(of = "id")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private Long cargaHoraria;
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Curso(CursoRequestDTO data){
        this.nome = data.nome();
        this.descricao = data.descricao();
        this.cargaHoraria = data.cargaHoraria();
    }
}
