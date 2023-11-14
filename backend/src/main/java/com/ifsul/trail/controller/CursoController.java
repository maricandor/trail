package com.ifsul.trail.controller;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.curso.CursoRequestDTO;
import com.ifsul.trail.entities.curso.CursoResponseDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.service.CursoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
     CursoRepository repository;

    @PostMapping
    public ResponseEntity postProduct(@RequestBody @Valid CursoRequestDTO body){
        Curso newProduct = new Curso(body);

        this.repository.save(newProduct);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getAllProducts(){
        List<CursoResponseDTO> productList = this.repository.findAll().stream().map(CursoResponseDTO::new).toList();

        return ResponseEntity.ok(productList);
    }











    /*
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

     */
}

