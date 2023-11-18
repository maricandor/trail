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
import java.util.Optional;


@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
     CursoRepository repository;

    @PostMapping("/add")
    public ResponseEntity postCurso(@RequestBody @Valid CursoRequestDTO body){
        Curso newCurso = new Curso(body);

        this.repository.save(newCurso);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/findAll")
    public ResponseEntity getAllCursos(){
        List<CursoResponseDTO> cursoList = this.repository.findAll().stream().map(CursoResponseDTO::new).toList();

        return ResponseEntity.ok(cursoList);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity getCursoById(@PathVariable Long id) {
        Optional<Curso> cursoOptional = repository.findById(id);

        if (cursoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Curso curso = cursoOptional.get();
        CursoResponseDTO responseDTO = new CursoResponseDTO(curso);

        return ResponseEntity.ok(responseDTO);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity updateCurso(@PathVariable Long id, @RequestBody @Valid CursoRequestDTO body) {
        Optional<Curso> existingCursoOptional = repository.findById(id);

        if (existingCursoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Curso existingCurso = existingCursoOptional.get();
        existingCurso.updateCurso(body);
        repository.save(existingCurso);

        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/drop/{id}")
    public ResponseEntity deleteCurso(@PathVariable Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        repository.deleteById(id);
        return ResponseEntity.ok().build();
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

