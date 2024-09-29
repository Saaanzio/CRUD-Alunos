package com.rafael.alunos.model;


import java.util.List;


public class Aluno {

    private static int ID_ALUNO = 1;
    private int id;

    private String nome;

    private List<Integer> notas;

    private int frequencia;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

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

    public void setFrequencia(int frequencia) {
        this.frequencia = frequencia;
    }

    public Aluno(String nome, List<Integer> notas, int frequencia) {
        this.id = ID_ALUNO;
        ID_ALUNO++;
        this.nome = nome;
        this.notas = notas;
        this.frequencia = frequencia;
    }
}
