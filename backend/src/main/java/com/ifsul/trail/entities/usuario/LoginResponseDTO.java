package com.ifsul.trail.entities.usuario;

import com.ifsul.trail.entities.disciplina.Disciplina;

public record LoginResponseDTO(
        Long id,
        String login,
        String nome,
        String password
) {
    public LoginResponseDTO(Usuario usuario){
        this(usuario.getId(), usuario.getLogin(),usuario.getNome(), usuario.getPassword());
    }
}
