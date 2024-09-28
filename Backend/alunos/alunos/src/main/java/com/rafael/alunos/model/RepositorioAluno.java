package com.rafael.alunos.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RepositorioAluno extends JpaRepository<Aluno, Integer> {

    Optional<Aluno> findAlunoById(Integer id);

    List<Aluno> findAlunosByFrequenciaLessThan(int frequencia);
}
