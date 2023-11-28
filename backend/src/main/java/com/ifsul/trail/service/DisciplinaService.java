package com.ifsul.trail.service;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.disciplina.DisciplinaDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.repository.DisciplinaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisciplinaService {

    @Autowired
    DisciplinaRepository disciplinaRepository;
    @Autowired
    CursoRepository cursoRepository;

    public Disciplina cadastrarDisciplina(DisciplinaDTO disciplinaDTO) {
        Disciplina disciplina = new Disciplina();
        disciplina.setNome(disciplinaDTO.nome());
        disciplina.setCodigo(disciplinaDTO.codigo());
        disciplina.setVigencia(disciplinaDTO.vigencia());
        disciplina.setPeriodoLetivo(disciplinaDTO.periodoLetivo());
        disciplina.setCargaHorariaDis(disciplinaDTO.cargaHorariaDis());

        return disciplinaRepository.save(disciplina);
    }

    public void vincularRequisito(Long disciplinaId, Long idDisciplinaPreRequisito) {
        Disciplina disciplina = disciplinaRepository.findById(disciplinaId)
                .orElseThrow(() -> new EntityNotFoundException("Disciplina não encontrada com o ID: " + disciplinaId));

        Disciplina disciplinaPreReq = disciplinaRepository.findById(idDisciplinaPreRequisito)
                .orElseThrow(() -> new EntityNotFoundException("Disciplina não encontrada com o ID: " + idDisciplinaPreRequisito));

        disciplina.adicionarPreRequisito(disciplinaPreReq);
        disciplinaRepository.save(disciplina);
        disciplinaRepository.save(disciplinaPreReq);
    }
}

