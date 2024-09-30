import "./Estilos/style.css"
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import Home from './componentes/home';
import Alunos from './componentes/alunos';
import Dados from './componentes/dados';
import CriarAluno from './componentes/criarAluno';
function App() {
  //Navbar footer e espaço para a renderização dos componentes, além de definir as rotas para cada uma das opções
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <ul className="navbar">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/alunos/criar">Cadastrar Alunos</Link></li>
            <li><Link to="/alunos">Mostrar Alunos</Link></li>
            <li><Link to="/dados">Media e Frequência</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/alunos" element={<Alunos/>}></Route>
            <Route path="/alunos/criar" element={<CriarAluno/>}></Route>
            <Route path="/dados" element={<Dados/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
