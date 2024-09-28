package com.rafael.alunos.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AlunoDAO {
    @Autowired
    private RepositorioAluno repositorioAluno;

    //Método para realizar a persistência de um Aluno e suas notas no banco de dados
    public Aluno salvar(String nome, List<Integer> notas, String frequencia) {
        Aluno aluno = new Aluno();

        aluno.setNome(nome);
        aluno.setNotas(notas);
        aluno.setFrequencia(Integer.parseInt(frequencia));

        repositorioAluno.save(aluno);
        return aluno;
    }

    public List<Aluno> todosAlunos() {
        return repositorioAluno.findAll();
    }
    //Método para calcular a média dos alunos
    private List<Integer> mediaNotas() {
        List<Aluno> alunos = todosAlunos();
        int[] notas = new int[5];
        for (int i = 0; i < 5; i++) {
            int soma = 0;
            for (Aluno aluno : alunos) {
                notas[i] += aluno.getNotas().get(i);
            }
        }
        return Arrays.stream(notas).map(n -> n = n / alunos.size()).boxed().toList();
    }
    //Método que retorna a média das matérias
    public List<Integer> mediaMaterias(){
        return !todosAlunos().isEmpty() ? mediaNotas() : null;
    }
    //Método que devolve uma lista de alunos acima da média. Complexidade: O(alunos * disciplinas)
    public List<Aluno> alunosAcimadaMedia() {
        List<Aluno> alunos = todosAlunos();
        if (!alunos.isEmpty()) {
            List<Integer> notas = mediaNotas();
            return alunos.stream().filter(a -> {
                for (int i = 0; i < 5; i++) {
                    if (a.getNotas().get(i) < notas.get(i)) {
                        return false;
                    }
                }
                return true;
            }).toList();
        }
        return null;
    }

    public List<Aluno> frequenciaAbaixo() {
        return repositorioAluno.findAlunosByFrequenciaLessThan(75);
    }
}
