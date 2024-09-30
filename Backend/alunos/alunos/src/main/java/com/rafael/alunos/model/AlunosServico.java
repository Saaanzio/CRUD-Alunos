package com.rafael.alunos.model;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;


public class AlunosServico {

    private final List<Aluno> alunos = new ArrayList<Aluno>();

    //Método para realizar a persistência de um Aluno e suas notas no banco de dados
    public Aluno salvar(String nome, List<Integer> notas, Integer frequencia) {
        Aluno aluno = new Aluno(nome,notas,frequencia);
        aluno.setNome(nome);
        aluno.setNotas(notas);
        alunos.add(aluno);
        return aluno;
    }

    public List<Aluno> todosAlunos() {
        return alunos;
    }
    
    //Método para calcular a média dos alunos
    private List<Integer> mediaNotas() {
        int[] notas = new int[5];
        for (int i = 0; i < 5; i++) {
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

    //Método que procura na lista de alunos o ID e o remove
    public Aluno deletarAluno(int id) {
        Aluno aluno = alunos.stream().filter(a -> a.getId() == id).findFirst().orElse(null);
        alunos.remove(aluno);
        return aluno;
    }

    //Método que retorna uma lista de alunos com frequência abaixo de 75%
    public List<Aluno> frequenciaAbaixo() {
        return alunos.stream().filter(a -> a.getFrequencia() < 75).collect(Collectors.toList());
    }


}
