package com.ifsul.trail.controller;
import com.ifsul.trail.entities.usuario.AuthenticationDTO;
import com.ifsul.trail.entities.usuario.LoginResponseDTO;
import com.ifsul.trail.entities.usuario.RegisterDTO;
import com.ifsul.trail.entities.usuario.Usuario;
import com.ifsul.trail.infra.security.TokenService;
import com.ifsul.trail.repository.UsuarioRepository;
import com.ifsul.trail.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private AuthService authService;
/*
    @CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }
    */
    @PostMapping("/login")
    public ResponseEntity<Long> login(@RequestBody AuthenticationDTO loginRequest) {
        Long userId = authService.authenticateUser(loginRequest.login(), loginRequest.password());
        if (userId != null) {
            return new ResponseEntity<>(userId, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){

        if(this.repository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        Usuario newUser = new Usuario(data.login(), encryptedPassword, data.nome());
        // data.role()

        this.repository.save(newUser);

        return ResponseEntity.ok().build();
    }
    @GetMapping("/findById/{userId}")
    public ResponseEntity getUserById(@PathVariable Long userId) {
        Usuario usuario =authService.getUserById(userId);

        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }
        LoginResponseDTO responseDTO = new LoginResponseDTO(usuario);
        return ResponseEntity.ok(responseDTO);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> atualizarUsuario(@PathVariable Long id, @RequestBody LoginResponseDTO loginResponseDTO) {

        Usuario usuario = authService.getUserById(id);
        if (usuario == null) {
            return ResponseEntity.notFound().build();
        }
        BeanUtils.copyProperties(loginResponseDTO, usuario, "id");
        authService.save(usuario);
        return ResponseEntity.ok("Usuário atualizada com sucesso");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteUsuarioService(@PathVariable long id) {
        return repository.findById(id).map(record -> {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Não existe este id de usuario :" + id));
    }
    @PutMapping("/{cursoId}/{usuarioId}")
    public void vincularUsuarioAoCurso(@PathVariable long cursoId, @PathVariable long usuarioId){
        authService.vincularUsuario(cursoId, usuarioId);
    }
    @GetMapping("/{userId}")
    public Long getUserId(@PathVariable Long userId) {
        return userId;
    }
    }

