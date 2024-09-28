package com.rafael.alunos.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Alunos")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nome;

    @ElementCollection
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


    public Aluno() {
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
        this.nome = nome;
        this.notas = notas;
        this.frequencia = frequencia;
    }
}
