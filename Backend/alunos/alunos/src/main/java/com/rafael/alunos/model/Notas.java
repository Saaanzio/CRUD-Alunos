package com.rafael.alunos.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class Notas {
    public int disciplina;
    public int nota;

    public int getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(int disciplina) {
        this.disciplina = disciplina;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public Notas(int disciplina, int nota) {
        this.disciplina = disciplina;
        this.nota = nota;
    }

    public Notas() {
    }
}
