package com.ifsul.trail.controller;

import com.ifsul.trail.entities.Curso;
import com.ifsul.trail.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @PostMapping("/addCurso")
    public Curso addCurso(@RequestBody Curso curso){
        return cursoService.saveCurso(curso);
    }
    @PostMapping("/addCursos")
    public List<Curso> addCursos(@RequestBody List<Curso> cursos){
        return cursoService.saveCursos(cursos);
    }
    @GetMapping("find")
    public List<Curso> findAllCursos(){
        return cursoService.getCursos();
    }
    @GetMapping("find/{id}")
    public Curso findCursoById(@PathVariable long id){
        return cursoService.getCursoById(id);
    }
    @GetMapping("find/{nome}")
    public Curso findCursoByNome(@PathVariable String nome){
        return cursoService.getCursoByNome(nome);
    }
    @PutMapping("/update")
    public Curso updateCurso(@RequestBody Curso curso){
        return cursoService.updateCurso(curso);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteCurso(@PathVariable long id){
        return cursoService.deleteCurso(id);
    }

}

