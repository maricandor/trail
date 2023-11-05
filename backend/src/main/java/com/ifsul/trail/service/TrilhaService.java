package com.ifsul.trail.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class TrilhaService {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UsuarioService usuarioService;

    public boolean isProprietario(Long trilhaId, Authentication authentication) {
        // pega o nome de usuário do usuário autenticado
        String username = authentication.getName();

        // pega o ID do proprietário da trilha associado ao trilhaId
        String proprietarioUsername = obterProprietarioTrilha(trilhaId);

        // verifica propriedade
        return username.equals(proprietarioUsername);
    }
    private String obterProprietarioTrilha(Long trilhaId) {

        return "nome_de_usuario_do_proprietario"; // no html da página
    }

}
