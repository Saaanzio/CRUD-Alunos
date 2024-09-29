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
    }
    // Conditional rendering da tabela de alunos acima da média
    const renderAcimadaMedia = () => {
        return alunosMedia.length === 0 ? <h1>Não existem alunos acima média...</h1> : alunosMedia.map((alunos, index) => (
            <tbody>
                <tr key={alunos.id}>
                    <td>{alunos.id}</td>
                    <td>{alunos.nome}</td>
                </tr>
            </tbody>
        ))
    }
    // Conditional rendering da tabela de alunos com a frequênca abaixo de 75%
    const renderFrequencia = () => {
        return alunosFrequencia.length === 0 ? <h1>Vazio...</h1> : alunosFrequencia.map((alunos) => (
            <tbody>
                <tr key={alunos.id}>
                    <td>{alunos.id}</td>
                    <td>{alunos.nome}</td>
                    <td>{alunos.frequencia}%</td>
                </tr>
            </tbody>
        ))
    }
    // Renderização da tabela principal de média de notas, com o chamado para as outras funções e uma mensagem caso não haja alunos
    return (
        mediaMaterias.length === 0 ? <h1>Você precisa inserir alunos para ver mais dados...</h1> : <><h1>Dados</h1><div className="overflow">

            <table>
                <thead>
                    <tr>
                        <th>Média Matemática</th>
                        <th>Média Geografia</th>
                        <th>Média História</th>
                        <th>Média Português</th>
                        <th>Média Química</th>
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
            <table className="frequencias">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Frequência</th>
                    </tr>
                </thead>
                {renderFrequencia()}
            </table>
            <h1>Alunos acima da média</h1>
            <table className="frequencias">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                {renderAcimadaMedia()}
            </table>

        </>
    );
}
export default Dados;