package com.ifsul.trail.controller;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.curso.CursoRequestDTO;
import com.ifsul.trail.entities.curso.CursoResponseDTO;
import com.ifsul.trail.entities.disciplina.AddPreReqDTO;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.disciplina.DisciplinaDTO;
import com.ifsul.trail.entities.disciplina.DisciplinaResponseDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.service.CursoService;
import com.ifsul.trail.service.DisciplinaService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


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
    public ResponseEntity<Curso> postCurso(@RequestBody @Valid CursoRequestDTO body) {
        Curso savedCurso = cursoService.postCurso(new Curso(body));
        return ResponseEntity.ok(savedCurso);
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
    @GetMapping("/findById/{cursoId}")
    public ResponseEntity getCursoById(@PathVariable Long cursoId) {
        Curso curso = cursoService.getCursoById(cursoId);

        if (curso == null) {
            return ResponseEntity.notFound().build();
        }

        CursoResponseDTO responseDTO = new CursoResponseDTO(curso);
        return ResponseEntity.ok(responseDTO);
    }
    @PutMapping("/update/{cursoId}")
    public ResponseEntity<String> atualizarCurso(@PathVariable Long cursoId, @RequestBody CursoRequestDTO cursoRequestDTO) {

        Curso curso = cursoService.getCursoById(cursoId);
        if (curso == null) {
            return ResponseEntity.notFound().build();
        }
        BeanUtils.copyProperties(cursoRequestDTO, curso, "cursoId");
        cursoService.save(curso);
        return ResponseEntity.ok("Curso atualizado com sucesso");
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
    @GetMapping("/{cursoId}/disciplinas")
    public List<Disciplina> getDisByCurso (@PathVariable Long cursoId) {
        Curso curso = cursoService.getCursoById(cursoId);
        if (curso != null) {
            return curso.getDisciplinas();
        } else {
            return Collections.emptyList();
        }
    }
    @GetMapping("/{cursoId}/getDisIds")
    public List<Long> getIdsDisciplinasIds(@PathVariable Long cursoId) {
        Curso curso = cursoService.getCursoById(cursoId);

        if (curso != null) {
            // Utilize Java Streams para mapear os IDs das disciplinas
            return curso.getDisciplinas().stream()
                    .map(Disciplina::getDisciplinaId)
                    .collect(Collectors.toList());
        } else {
            return Collections.emptyList();
        }
    }
    @GetMapping("/{cursoId}")
    public Long getCursoId(@PathVariable Long cursoId) {
        return cursoId;
    }

}

