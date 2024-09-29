function Home() {
    // Página inicial
    return (
        <div>
            <h1>Home</h1>
            <p>Seja Bem-Vindo! clique em qualquer uma das opções a cima para continuar: <br />
                <span>
                     Cadastrar Alunos permite que seja criado um aluno no banco de dados com seu nome, frequência e nota em cada disciplina. <br />
                     Mostrar Alunos coloca todos alunos cadastrados em uma tabela. <br />
                     Media e Frequência mostra a média de cada disciplina, o aluno que tem cada nota maior que a média das disciplinas e os alunos com frequência acima de 75%.<br />
                     Clique no ❌ no ID de um aluno para deletá-lo.
                     Mais detalhes localizados no README do projeto.
                </span>
            </p>
        </div>
    )
}
export default Home;