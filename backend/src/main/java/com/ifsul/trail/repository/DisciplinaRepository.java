package com.ifsul.trail.repository;

import com.ifsul.trail.entities.disciplina.Disciplina;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
    Disciplina findByNome(String disciplinaNome);
}
