package com.ifsul.trail.controller;


import com.ifsul.trail.dto.LoginDTO;
import com.ifsul.trail.dto.UsuarioDTO;

import com.ifsul.trail.repository.UsuarioRepository;
import com.ifsul.trail.response.LoginResponse;
import com.ifsul.trail.service.UsuarioService;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @PostMapping(path = "/save")
    public String saveUsuario(@RequestBody UsuarioDTO usuarioDTO){
        String id = usuarioService.addUsuario(usuarioDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUsuario (@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = usuarioService.loginUsuario(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}

