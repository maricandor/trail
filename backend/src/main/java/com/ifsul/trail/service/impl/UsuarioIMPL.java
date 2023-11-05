package com.ifsul.trail.service.impl;

import com.ifsul.trail.dto.LoginDTO;
import com.ifsul.trail.dto.UsuarioDTO;
import com.ifsul.trail.entities.Usuario;
import com.ifsul.trail.repository.UsuarioRepository;
import com.ifsul.trail.response.LoginResponse;
import com.ifsul.trail.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

public class UsuarioIMPL implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String addUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = new Usuario(
                usuarioDTO.getId(),
                usuarioDTO.getNome(),
                usuarioDTO.getEmail(),
                this.passwordEncoder.encode(usuarioDTO.getPassword())
        );
        usuarioRepository.save(usuario);
        return usuario.getNome();

    }
    @Override
    public LoginResponse loginUsuario(LoginDTO loginDTO) {
        String msg = "";
        Usuario usuario1 = usuarioRepository.findByEmail((loginDTO.getEmail()));
        if (usuario1 != null) {
        String password = loginDTO.getPassword();
        String encodedPwd = usuario1.getPassword();
        Boolean isPwdRight = passwordEncoder.matches(password, encodedPwd);
        if (isPwdRight){
            Optional<Usuario> usuario =usuarioRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPwd);
            if (usuario.isPresent()){
                return new LoginResponse("Sucesso ao fazer login", true);
            } else {
                return new LoginResponse("Login falhou", false);
            }
        } else {
            return new LoginResponse("Password not match", false);
        }
        } else {
            return new LoginResponse("Email não existe", false);
        }
    }
}
