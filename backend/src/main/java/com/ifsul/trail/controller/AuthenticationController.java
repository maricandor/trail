package com.ifsul.trail.controller;
import com.ifsul.trail.entities.usuario.AuthenticationDTO;
import com.ifsul.trail.entities.usuario.LoginResponseDTO;
import com.ifsul.trail.entities.usuario.RegisterDTO;
import com.ifsul.trail.entities.usuario.Usuario;
import com.ifsul.trail.infra.security.TokenService;
import com.ifsul.trail.repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){
        if(this.repository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Usuario newUser = new Usuario(data.login(), encryptedPassword, data.role());

        this.repository.save(newUser);

        return ResponseEntity.ok().build();
    }
    @GetMapping("/findAll")
    public List<Usuario> listarUsuario() {
        return repository.findAll();
    }
    @GetMapping(path = {"/find/{id}"})
    public ResponseEntity<Usuario> buscarIdUsuario(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElseThrow(() -> new ResourceNotFoundException("Não existe este id de usuario :" + id));
    }
    @PutMapping({"update/{id}"})
    public ResponseEntity<Usuario> atualizarUsuario(Long id, Usuario usuarioDetalhes){
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Não existe este id de usuario :" + id + " Confirme os dados inseridos!!"));

        usuario.setLogin(usuarioDetalhes.getLogin());
        usuario.setPassword(usuarioDetalhes.getPassword());

        Usuario atualizausuario = repository.save(usuario);
        return ResponseEntity.ok(atualizausuario);
    }
    @DeleteMapping(path ={"delete/{id}"})
    public ResponseEntity<Object> deleteUsuarioService(@PathVariable long id) {
        return repository.findById(id).map(record -> {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Não existe este id de usuario :" + id));
    }
    }

