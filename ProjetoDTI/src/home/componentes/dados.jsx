import api from '../axiosConfig';
import React, { useEffect, useState } from 'react';
function Dados() {
    const [mediaMaterias, setDados] = useState([]);
    const [alunosFrequencia, setAlunos] = useState([]);
    const [alunosMedia, setAlunosMedia] = useState([]);
    useEffect(() => {
        carregarDados();
    }, []);

    //Função para chamar o Backend e carregar os dados
    const carregarDados = async () => {
        let resposta = await api.get("/alunos/media");
        setDados(resposta.data);

        resposta = await api.get("/alunos/frequencia");
        setAlunos(resposta.data);

        resposta = await api.get("/alunos/mediaAlunos");
        setAlunosMedia(resposta.data);
        console.log(resposta.data);
    }
    // Conditional rendering da tabela de alunos acima da média
    const renderAcimadaMedia = () => {
        return alunosMedia.length === 0 ? <h1>Não existem alunos acima média...</h1> : alunosMedia.map((alunos, index) => (
            <table className="frequencias">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={index}>
                        <td>{alunos.id}</td>
                        <td>{alunos.nome}</td>
                    </tr>
                </tbody>
            </table>
        ))
    }
    // Conditional rendering da tabela de alunos com a frequênca abaixo de 75%
    const renderFrequencia = () => {
        return alunosFrequencia.length === 0 ? <h1>Vazio...</h1> : alunosFrequencia.map((alunos, index) => (
            <table className="frequencias">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Frequência</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={index}>
                        <td>{alunos.id}</td>
                        <td>{alunos.nome}</td>
                        <td>{alunos.frequencia}%</td>
                    </tr>
                </tbody>
            </table>
        ))
    }
    // Renderização da tabela principal de média de notas, com o chamado para as outras funções e uma mensagem caso não haja alunos
    return (
        mediaMaterias.length === 0 ? <h1 className="styles.error">Você precisa inserir alunos para ver mais dados...</h1> : <><h1>Dados</h1><div className="overflow">

            <table>
                <thead>
                    <tr>
                        <th>Média Disciplina 1</th>
                        <th>Média Disciplina 2</th>
                        <th>Média Disciplina 3</th>
                        <th>Média Disciplina 4</th>
                        <th>Média Disciplina 5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {mediaMaterias.map((dado, index) => (
                            <td key={index}>{dado}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
            <h1>Frequência abaixo de 75%</h1>
            {renderFrequencia()}
            <h1>Alunos acima da média</h1>
            {renderAcimadaMedia()}
        </>
    );
}
export default Dados;