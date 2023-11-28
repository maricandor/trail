package com.ifsul.trail.controller;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.curso.CursoRequestDTO;
import com.ifsul.trail.entities.curso.CursoResponseDTO;
import com.ifsul.trail.entities.disciplina.AddPreReqDTO;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.disciplina.DisciplinaDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.service.CursoService;
import com.ifsul.trail.service.DisciplinaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private CursoRepository repository;
    @Autowired
    private CursoService cursoService;
    @Autowired
    private DisciplinaService disciplinaService;

    @PostMapping("/add")
    public ResponseEntity postCurso(@RequestBody @Valid CursoRequestDTO body) {
        cursoService.postCurso(new Curso(body));
        return ResponseEntity.ok().build();
    }
    @GetMapping("/findAll")
    public ResponseEntity getAllCursos() {
        List<CursoResponseDTO> cursoList = cursoService.getAllCursos().stream()
                .map(CursoResponseDTO::new)
                .toList();
        return ResponseEntity.ok(cursoList);
    }
    @GetMapping("/find/{nome}")
    public ResponseEntity getCursoByNome(@PathVariable String nome) {
        Curso curso = cursoService.getCursoByNome(nome);

        if (curso == null) {
            return ResponseEntity.notFound().build();
        }

        CursoResponseDTO responseDTO = new CursoResponseDTO(curso);
        return ResponseEntity.ok(responseDTO);
    }
    @PutMapping("/update/{cursoId}")
    public ResponseEntity updateCurso(@PathVariable Long cursoId, @RequestBody @Valid CursoRequestDTO body) {
        cursoService.updateCurso(cursoId, new Curso(body));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/drop/{cursoId}")
    public ResponseEntity deleteCurso(@PathVariable Long cursoId) {
        cursoService.deleteCurso(cursoId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{cursoId}/{disciplinaId}")
    public void relacionarDisciplinaAoCurso(@PathVariable long cursoId, @PathVariable long disciplinaId){
        cursoService.vincularDisciplina(cursoId, disciplinaId);

    }

}

