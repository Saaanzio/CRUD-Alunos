package com.rafael.alunos.Control;

import com.rafael.alunos.model.Aluno;
import com.rafael.alunos.model.AlunosServico;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/alunos")
@CrossOrigin("http://localhost:5174")
public class AlunoController {

    private final AlunosServico alunosServico = new AlunosServico();

    @GetMapping
    public ResponseEntity<List<Aluno>> todosAlunos(){
        return new ResponseEntity<List<Aluno>>(alunosServico.todosAlunos(), HttpStatus.OK);
    }

    @PostMapping("/criar")
    public ResponseEntity<Aluno> salvarAluno(@RequestBody Map<String,Object> payload) {
        Object notasObj = payload.get("notas");
        List<Integer> notas = new ArrayList<>();
        if(notasObj instanceof List){
            for(Object nota : (List<?>) notasObj){
                if(nota instanceof Number){
                    notas.add(((Number) nota).intValue());
                }
            }
        }
        return new ResponseEntity<Aluno>(alunosServico.salvar(payload.get("nome").toString(), notas,  Integer.parseInt(payload.get("frequencia").toString())), HttpStatus.OK);
    }
    //Requisição get para alunos acima da média
    @GetMapping("/mediaAlunos")
    public ResponseEntity<List<Aluno>> alunosAcimaMedia(){
        return new ResponseEntity<List<Aluno>>(alunosServico.alunosAcimadaMedia(), HttpStatus.OK);
    }
    @GetMapping("/media")
    public ResponseEntity<List<Integer>> acimaMedia(){
        return new ResponseEntity<List<Integer>>(alunosServico.mediaMaterias(), HttpStatus.OK);
    }
    //Requisição get para alunos com frequência acima de 75%
    @GetMapping("/frequencia")
    public ResponseEntity<List<Aluno>> frequenciaAcima(){
        return new ResponseEntity<List<Aluno>>(alunosServico.frequenciaAbaixo(), HttpStatus.OK);
    }
}
