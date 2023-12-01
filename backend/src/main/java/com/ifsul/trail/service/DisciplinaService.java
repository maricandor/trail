package com.ifsul.trail.service;

import com.ifsul.trail.entities.curso.Curso;
import com.ifsul.trail.entities.disciplina.Disciplina;
import com.ifsul.trail.entities.disciplina.DisciplinaDTO;
import com.ifsul.trail.repository.CursoRepository;
import com.ifsul.trail.repository.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DisciplinaService {

    @Autowired
    DisciplinaRepository disciplinaRepository;
    @Autowired
    CursoRepository cursoRepository;

    public Optional<Disciplina> cadastrarDisciplina(DisciplinaDTO disciplinaDTO) {
        Disciplina disciplina = new Disciplina();
        disciplina.setNome(disciplinaDTO.nome());
        disciplina.setCodigo(disciplinaDTO.codigo());
        disciplina.setVigencia(disciplinaDTO.vigencia());
        disciplina.setPeriodoLetivo(disciplinaDTO.periodoLetivo());
        disciplina.setCargaHorariaDis(disciplinaDTO.cargaHorariaDis());

        Disciplina novaDisciplina = disciplinaRepository.save(disciplina);
        return disciplinaRepository.findById(novaDisciplina.getDisciplinaId());
    }

    public void vincularRequisito(String disciplinaNome, String preReqNome) {
        Disciplina disciplina = disciplinaRepository.findByNome(disciplinaNome);
      //          .orElseThrow(() -> new EntityNotFoundException("Disciplina não encontrada com o ID: " + disciplinaNome));

        Disciplina disciplinaPreReq = disciplinaRepository.findByNome(preReqNome);
      //          .orElseThrow(() -> new EntityNotFoundException("Disciplina não encontrada com o ID: " + idDisciplinaPreRequisito));

        disciplina.adicionarPreRequisito(disciplinaPreReq);
        disciplinaRepository.save(disciplina);
        disciplinaRepository.save(disciplinaPreReq);
    }
    public List<Disciplina> getAllDis(){
        return disciplinaRepository.findAll();
    }
    public Disciplina getDisByNome(String nome){
        return disciplinaRepository.findByNome(nome);
    }
    public Disciplina getDisById(Long id) {
        Optional<Disciplina> optionalDisciplina = disciplinaRepository.findById(id);
        return optionalDisciplina.orElse(null);
    }
    public String deleteDis(Long id){
        disciplinaRepository.deleteById(id);
        return "curso removido: " + id;
    }

    public Disciplina updateDis(Long disciplinaId, Disciplina disciplina) {
        Disciplina existingDis = disciplinaRepository.findById(disciplina.getDisciplinaId()).orElse(null);
        existingDis.setNome(disciplina.getNome());
        existingDis.setVigencia(disciplina.getVigencia());
        existingDis.setCargaHorariaDis(disciplina.getCargaHorariaDis());
        existingDis.setCodigo(disciplina.getCodigo());
        existingDis.setPeriodoLetivo(disciplina.getPeriodoLetivo());
        return disciplinaRepository.save(existingDis);
    }
    public void save(Disciplina disciplina) {
        disciplinaRepository.save(disciplina);
    }
}

