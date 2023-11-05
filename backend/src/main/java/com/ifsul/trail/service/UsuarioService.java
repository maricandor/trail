package com.ifsul.trail.service;

import com.ifsul.trail.dto.LoginDTO;
import com.ifsul.trail.dto.UsuarioDTO;
import com.ifsul.trail.response.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface UsuarioService {

    String addUsuario(UsuarioDTO usuarioDTO);

    LoginResponse loginUsuario(LoginDTO loginDTO);
}
