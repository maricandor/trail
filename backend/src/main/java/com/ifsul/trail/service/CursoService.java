package com.ifsul.trail.service;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.disciplina.AddPreReqDTO;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.disciplina.DisciplinaDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.repository.DisciplinaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private DisciplinaRepository disciplinaRepository;

    public Curso postCurso(Curso curso) {
        Curso savedCurso = cursoRepository.save(curso);
        return cursoRepository.findById(savedCurso.getCursoId()).orElse(null);
    }
    public List<Curso> getAllCursos(){
        return cursoRepository.findAll();
    }
    public Curso getCursoByNome(String nome){
        return cursoRepository.findByNome(nome);
    }
    public Curso getCursoById(Long cursoId) {
        Optional<Curso> optionalCurso = cursoRepository.findById(cursoId);
        return optionalCurso.orElse(null);
    }
    public String deleteCurso(Long id){
        cursoRepository.deleteById(id);
        return "curso removido: " + id;
    }
    public void save(Curso curso) {
        cursoRepository.save(curso);
    }

    public void vincularDisciplina(long cursoId, long disciplinaId) {
        Disciplina disciplina = disciplinaRepository.findById(disciplinaId)
                .orElseThrow(() -> new EntityNotFoundException("Disciplina não encontrada com o ID: " + disciplinaId));

        Curso curso = cursoRepository.findById(cursoId)
                .orElseThrow(() -> new EntityNotFoundException("Curso não encontrado com o ID: " + cursoId));

        curso.adicionarDisciplina(disciplina);
        cursoRepository.save(curso);
        disciplinaRepository.save(disciplina);
    }
}
