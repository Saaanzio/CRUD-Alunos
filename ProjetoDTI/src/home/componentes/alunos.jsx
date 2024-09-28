import api from '../axiosConfig';
import React, { useEffect, useState } from 'react';

function Alunos() {
    const [alunos, setAlunos] = useState([]);
    useEffect(() => {
        carregarAlunos();
    },[]);

    //Função para chamar o Backend e pegar os alunos
    const carregarAlunos = async () => {
        const resposta = await api.get("/alunos");
        console.log(resposta.data);
        setAlunos(resposta.data);

    }
    //Exibição dos alunos em tabela, caso não exista nenhum aluno, exibe uma mensagem de erro
    return (
        alunos.length === 0 ? <h1 className="styles.error">Lista de alunos vazia...</h1> : <><h1>Alunos</h1>
        <div className="overflow">
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Disciplina 1</th>
                        <th>Disciplina 2</th>
                        <th>Disciplina 3</th>
                        <th>Disciplina 4</th>
                        <th>Disciplina 5</th>
                        <th>Frequencia</th>
                    </tr>
                </thead>
                <tbody> 
                       {alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                {aluno.notas.map((nota, index) => (
                                    <td key={index}>{nota}</td>
                                ))}
                                <td>{aluno.frequencia}%</td>
                            </tr>
                        ))}  
                </tbody>
            </table>
        </div>
        </>
    );
}
export default Alunos;