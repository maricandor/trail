package com.ifsul.trail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "usuarios")
@Entity
public class Usuario {
    @Id
    @Column(name = "usuario_id", length =45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true , name = "usuario_email", length =255 )
    private String email;
    @Column(name = "usuario_pwd", length =255)
    private String password;
    @Column(name = "usuario_nome", length =255)
    private String nome;
    @OneToMany(mappedBy = "usuario")
    private List<Curso> cursos;

    public Usuario(Long id, String nome, String email, String encode) {
    }
}
