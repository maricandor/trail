package com.ifsul.trail.entities.usuario;

public record RegisterDTO(
        String nome,
        String login,
        String password,
        UsuarioRole role
) {
}
