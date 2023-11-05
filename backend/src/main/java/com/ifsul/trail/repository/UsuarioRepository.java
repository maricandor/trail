package com.ifsul.trail.repository;

import com.ifsul.trail.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long > {
    Optional<Usuario> findOneByEmailAndPassword(String email, String password);
    Usuario findByEmail(String email);
}
