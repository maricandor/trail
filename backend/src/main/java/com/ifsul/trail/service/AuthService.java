package com.ifsul.trail.service;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.usuario.Usuario;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.repository.UsuarioRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthService implements UserDetailsService {
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    CursoRepository cursoRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usuarioRepository.findByLogin(username);
    }

    public void vincularUsuario(long cursoId, long usuarioId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new EntityNotFoundException("Usuario não encontrada com o ID: " + usuarioId));

        Curso curso = cursoRepository.findById(cursoId)
                .orElseThrow(() -> new EntityNotFoundException("Curso não encontrado com o ID: " + cursoId));

        curso.adicionarUsuario(usuario);
        cursoRepository.save(curso);
        usuarioRepository.save(usuario);
    }
    public Long authenticateUser(String login, String password) {
        Usuario usuario = usuarioRepository.findByLogin(login);

        if (usuario != null && passwordMatches(usuario.getPassword(), password)) {
            return usuario.getId();
        } else {
            return null;
        }
    }

    private boolean passwordMatches(String hashedPassword, String inputPassword) {
        return BCrypt.checkpw(inputPassword, hashedPassword);
    }
    public Usuario getUserById(Long userId) {
        Optional<Usuario> optionalUser = usuarioRepository.findById(userId);
        return optionalUser.orElse(null);
    }
    public void save (Usuario usuario){
        usuarioRepository.save(usuario);
    }
}
