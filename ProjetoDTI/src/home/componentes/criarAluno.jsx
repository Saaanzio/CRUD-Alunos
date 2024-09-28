import { useNavigate } from 'react-router-dom';
import api from '../axiosConfig';
import axios from 'axios';
import { useState } from 'react';	
function CriarAluno() {
    const navigate = useNavigate();
    const [erro, setErro] = useState('');

    //Função para enviar os dados do formulário para o backend, também com validação de dados
    const onSubmit = async (e) => {

        e.preventDefault();
            const nome = e.target.nome.value;
            const notas = [
                e.target.disciplina1.value,
                e.target.disciplina2.value,
                e.target.disciplina3.value,
                e.target.disciplina4.value,
                e.target.disciplina5.value
            ];
            const frequencia =  e.target.frequencia.value;
            if(notas.some(n => isNaN(n)) || isNaN(frequencia)){
                setErro('As notas e a frequência devem ser números');
                return;
            }
            else if(notas.some(n => n < 0 || n > 10) || frequencia < 0 || frequencia > 100){
                setErro('As notas devem ser entre 0 e 10 e a frequência entre 0 e 100');
                return;
            }
        try {
            const resposta = await api.post('http://localhost:8080/alunos/criar',{
                "nome": nome,
                "notas": notas.map(n => parseFloat(n)),
                "frequencia": frequencia
            })
            navigate('/alunos');
        } catch (error) {
            console.log(error.response.data);
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Nome:</label>
                <input type="text" name="nome" required />
                <label>Nota Disciplina 1:</label>
                <input type="text" name="disciplina1" required />
                <label>Nota Disciplina 2:</label>
                <input type="text" name="disciplina2" required />
                <label>Nota Disciplina 3:</label>
                <input type="text" name="disciplina3" required />
                <label>Nota Disciplina 4:</label>
                <input type="text" name="disciplina4" required />
                <label>Nota Disciplina 5:</label>
                <input type="text" name="disciplina5" required />
                <label>Frequência:</label>
                <input type="text" name="frequencia" required />
                <button type="submit">Salvar</button>
                {erro && <p className="error">{erro}</p>}
            </form>
        </>
    );
}
export default CriarAluno