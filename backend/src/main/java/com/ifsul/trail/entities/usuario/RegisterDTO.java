package com.ifsul.trail.entities.usuario;

public record RegisterDTO(
        String login,
        String password,
        UsuarioRole role
) {
}
