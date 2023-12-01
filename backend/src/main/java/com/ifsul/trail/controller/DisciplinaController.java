package com.ifsul.trail.controller;

import com.ifsul.trail.entities.disciplina.*;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.repository.DisciplinaRepository;
import com.ifsul.trail.service.DisciplinaService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/disciplina")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DisciplinaController {

    @Autowired
    private DisciplinaService disciplinaService;
    @Autowired
    private DisciplinaRepository disciplinaRepository;
    @Autowired
    private CursoRepository cursoRepository;

    @PostMapping("/add")
    public ResponseEntity<Optional<Disciplina>> cadastrarDisciplina(@RequestBody DisciplinaDTO disciplinaDTO) {
        Optional<Disciplina> novaDisciplina = disciplinaService.cadastrarDisciplina(disciplinaDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaDisciplina);
    }
    @PostMapping("/vincularReq")
    public ResponseEntity<Void> vincularRequisito(@RequestBody AddPreReqDTO addPreReqDTO) {
        disciplinaService.vincularRequisito(addPreReqDTO.disciplinaNome(), addPreReqDTO.preReqNome());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/drop/{disciplinaId}")
    public ResponseEntity deleteDis(@PathVariable Long disciplinaId) {
        disciplinaService.deleteDis(disciplinaId);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/findAll")
    public ResponseEntity getAllDis() {
        List<DisciplinaResponseDTO> disciplinaList = disciplinaService.getAllDis().stream()
                .map(DisciplinaResponseDTO::new)
                .toList();
        return ResponseEntity.ok(disciplinaList);
    }
    @GetMapping("/find/{nome}")
    public ResponseEntity getDisByNome(@PathVariable String nome) {
        Disciplina disciplina = disciplinaService.getDisByNome(nome);

        if (disciplina == null) {
            return ResponseEntity.notFound().build();
        }
        DisciplinaResponseDTO responseDTO = new DisciplinaResponseDTO(disciplina);
        return ResponseEntity.ok(responseDTO);
    }
    @GetMapping("/findById/{id}")
    public ResponseEntity getDisById(@PathVariable Long id) {
        Disciplina disciplina = disciplinaService.getDisById(id);

        if (disciplina == null) {
            return ResponseEntity.notFound().build();
        }

        DisciplinaResponseDTO responseDTO = new DisciplinaResponseDTO(disciplina);
        return ResponseEntity.ok(responseDTO);
    }

    @PutMapping("/update/{disciplinaId}")
    public ResponseEntity<String> atualizarDisciplina(@PathVariable Long disciplinaId, @RequestBody DisciplinaRequestDTO disciplinaRequestDTO) {

        Disciplina disciplina = disciplinaService.getDisById(disciplinaId);
        if (disciplina == null) {
            return ResponseEntity.notFound().build();
        }
        BeanUtils.copyProperties(disciplinaRequestDTO, disciplina, "disciplinaId");
        disciplinaService.save(disciplina);
        return ResponseEntity.ok("Disciplina atualizada com sucesso");
    }

    @GetMapping("/{disciplinaId}")
    public Long getDisId(@PathVariable Long disciplinaId) {
        return disciplinaId;
    }

    @GetMapping("/{disciplinaId}/preRequisitos")
    public List<Disciplina> getPreRequisitos(@PathVariable Long disciplinaId) {
        Disciplina disciplina = disciplinaService.getDisById(disciplinaId);

        if (disciplina != null) {
            return disciplina.getPreRequisitos();
        } else {
            return Collections.emptyList();
        }
    }
}
