package com.rafael.alunos.model;


import java.util.List;


public class Aluno {

    private static int ID_ALUNO = 1;
    private final int id;

    private String nome;

    private List<Integer> notas;

    private int frequencia;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Integer> getNotas() {
        return notas;
    }

    public void setNotas(List<Integer> notas) {
        this.notas = notas;
    }

    public int getFrequencia() {
        return frequencia;
    }

    public int getId() {
        return id;
    }

    public void setFrequencia(int frequencia) {
        this.frequencia = frequencia;
    }

    public String getNome() {
        return nome;
    }

    public Aluno(String nome, List<Integer> notas, int frequencia) {
        this.id = ID_ALUNO;
        ID_ALUNO++;
        this.nome = nome;
        this.notas = notas;
        this.frequencia = frequencia;
    }
}
