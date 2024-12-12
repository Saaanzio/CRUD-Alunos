# 👋 Sobre o Projeto:

Problema:

Crie um sistema onde Carlos possa inserir as notas
de cada aluno (0 a 10) nas cinco disciplinas e a
frequência de cada aluno em percentual (0 a 100%). O
sistema deve calcular automaticamente a média das
notas de cada aluno, a média da turma em cada
disciplina e a frequência geral de cada aluno.
Além disso, o sistema deve permitir que Carlos veja
quais alunos têm uma média de notas acima da
média da turma e quais alunos têm uma frequência
abaixo de 75%, pois esses alunos precisam de atenção
especial.

# ⚙️ Instruções para execução:

1 - Clonar o projeto com ```git clone https://github.com/Saaanzio/ProjetoDTI.git```

ou

<img src="https://github.com/user-attachments/assets/b3c91e6c-7a67-4f90-90a1-93d0f7234830" width="300" height="200" alt="Clonar repositório">

2 - Instalar as dependências

Se estiver Utilizando Vscode, será requerido instalar algumas extensões para utilizar Java e Spring Boot:
- Java
- Java Extension Pack
- Spring Boot Extension Pack

É necessário o node instalado no computador para prosseguir com comandos "npm" (https://nodejs.org/pt)

Abra um terminal em sua IDE desejada e insira

```cd ProjetoDTI``` -> Ir até o diretório do frontend

```npm install``` -> Instalar as dependências

3 - Rodar o Aplicativo

```npm run dev``` -> Inicializa o projeto com Vite na porta 5173

Guardar o link gerado: http://localhost:5173

Inicializar a aplicação em Springboot localizada em \Backend\alunos\alunos\src\main\java\com\rafael\alunos\AlunosApplication.java

![image](https://github.com/user-attachments/assets/58a89195-8c33-4c24-b4f8-9c17a2a9c50a)

Abrir http://localhost:5173 no seu navegador de preferência.

# 🚩 Premissas Assumidas

- Objetivo: criar um site de gerenciar notas para o usuário final.

- Funcionalidades: Será possível adicionar alunos com suas notas e frequências, além de filtrar por média geral, acima da média de cada nota e abaixo de 75% de frequência.

- Limitações: Tem um número fixo de 5 disciplinas, em que suas notas vão de 0 a 10 e a frequência entre 0 a 100%.

- Ambiente: Navegador Web de celular ou computador.

- Tecnologias: O sistema deverá envolver técnologias frontend e backend.

# 🧩 Decisões Tomadas

- O frontend do projeto foi realizado em React.js em Vite, Html e CSS

- Foi utilizada a biblioteca Router para redirecionar o usuário e Axios para realizar a integração com o backend e fazer as requisições HTTP.

- Para o backend foi utilizado Java.

- As bibliotecas e frameworks utilizadas no backend foram: Spring Boot e Maven.

- IDEs/Editores de código utilizados: Intellij e Vscode.

- Código comentado para facilitar entendimento de outras pessoas

- Projeto irá seguir o padrão MVC

Estrutura:

Backend:
- Camada de controle responsável por receber as requisições do controle, como GET, POST e DELETE, utilizadas para receber a lista de alunos, notas e criar alunos.
  
- Modelo é onde está a estrutura do projeto, permitindo acesso aos dados à camada de controle, com classes como Aluno e AlunoServico.

Frontend:
- O frontend foi dividido em componentes, que são redirecionados após o usuário escolher a aba desejada na página principal.

- Por ser a camada de visão, é onde é devolvida uma resposta ao usuário após ter sido feito uma requisição.

# 📸 Imagens do projeto
<img src="https://github.com/user-attachments/assets/86734dab-91a8-4381-912b-d5cefa027b6a" width="300" height="200" alt="Imagem">
<img src="https://github.com/user-attachments/assets/36535fd1-f964-47b8-9ae8-61f2d13ed4c6" width="300" height="200" alt="Imagem">

# 🔗 Técnologias Utilizadas

- Java
- Spring Boot
- Maven
- React
- HTML/CSS
- Javascript
- Axios
- Router

# 🎈 Obrigado!

Projeto realizado por: Rafael Sanzio e Silva


