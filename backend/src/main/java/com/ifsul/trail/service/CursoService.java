package com.ifsul.trail.service;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    public Curso saveCurso(Curso curso){
        return cursoRepository.save(curso);
    }
    public List<Curso> saveCursos(List<Curso> cursos){
        return cursoRepository.saveAll(cursos);
    }
    public List<Curso> getCursos(){
        return cursoRepository.findAll();
    }
    public Curso getCursoById(long id){
        return cursoRepository.findById(id).orElse(null);
    }
    public Curso getCursoByNome(String nome){
        return cursoRepository.findByNome(nome);
    }
    public String deleteCurso(long id){
        cursoRepository.deleteById(id);
        return "curso removido: " + id;
    }
    public Curso updateCurso(Curso curso) {
        Curso existingCurso = cursoRepository.findById(curso.getId()).orElse(null);
        existingCurso.setNome(curso.getNome());
        existingCurso.setDescricao(curso.getDescricao());
        existingCurso.setCargaHoraria(curso.getCargaHoraria());
        return cursoRepository.save(existingCurso);

    }
}
