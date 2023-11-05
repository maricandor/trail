package com.ifsul.trail.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "usuarios")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo")
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

}
