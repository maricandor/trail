package com.ifsul.trail.repository;

import com.ifsul.trail.entities.curso.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
    Curso findByNome(String nome);
    boolean existsById(Long id);
}
