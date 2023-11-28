package com.ifsul.trail.controller;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.disciplina.AddPreReqDTO;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.disciplina.DisciplinaDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.repository.DisciplinaRepository;
import com.ifsul.trail.service.DisciplinaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/disciplina")
public class DisciplinaController {

    @Autowired
    private DisciplinaService disciplinaService;
    @Autowired
    private DisciplinaRepository disciplinaRepository;
    @Autowired
    private CursoRepository cursoRepository;

    @GetMapping("/{cursoId}/disciplinas")
    public ResponseEntity<List<Disciplina>> obterDisciplinasDoCurso(@PathVariable Long cursoId) {
        Curso curso = cursoRepository.findById(cursoId).orElseThrow(() -> new ResourceNotFoundException("Curso não encontrado"));
        return ResponseEntity.ok(curso.getDisciplinas());
    }
    @PostMapping("/add")
    public ResponseEntity<Disciplina> cadastrarDisciplina(@RequestBody DisciplinaDTO disciplinaDTO) {
        Disciplina novaDisciplina = disciplinaService.cadastrarDisciplina(disciplinaDTO);
        return new ResponseEntity<>(novaDisciplina, HttpStatus.CREATED);
    }
    @PostMapping("/vincularReq")
    public ResponseEntity<Void> vincularRequisito(@RequestBody AddPreReqDTO addPreReqDTO) {
        disciplinaService.vincularRequisito(addPreReqDTO.disciplinaId(), addPreReqDTO.disciplinaPreRequisitoId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
