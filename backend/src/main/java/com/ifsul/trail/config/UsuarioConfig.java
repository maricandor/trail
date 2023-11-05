package com.ifsul.trail.config;

import com.ifsul.trail.service.UsuarioService;
import com.ifsul.trail.service.impl.UsuarioIMPL;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UsuarioConfig {
    @Bean
    public UsuarioService usuarioService() {
        return new UsuarioIMPL();
    }
}
