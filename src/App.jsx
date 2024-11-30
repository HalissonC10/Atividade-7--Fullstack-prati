import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../src/styles/App.css'
import ContadorSimples from './components/ContadorSimples';
import AlteracaoCorFundo from './components/AlteracaoCorFundo';
import ListaTarefas from './components/ListaTarefas';
import Temporizador from './components/Temporizador';
import FiltroLista from './components/FiltroLista';
import FormularioRegistro from './components/FormularioRegistro';
import RequisicaoDados from './components/RequisicaoDados';
import GaleriaImagens from './components/GaleriaImagens';
import TimerComAlerta from './components/TimerComAlerta';
import TabsNavegaveis from './components/TabsNavegaveis';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Atividades React</h1>
        <nav>
          <ul>
            <li><Link to="/contador">Contador Simples</Link></li>
            <li><Link to="/alteracao-cor-fundo">Alteração de Cor de Fundo</Link></li>
            <li><Link to="/lista-tarefas">Lista de Tarefas</Link></li>
            <li><Link to="/temporizador">Temporizador</Link></li>
            <li><Link to="/filtro-lista">Filtro de Lista</Link></li>
            <li><Link to="/formulario-registro">Formulário de Registro</Link></li>
            <li><Link to="/requisicao-dados">Requisição de Dados</Link></li>
            <li><Link to="/galeria-imagens">Galeria de Imagens</Link></li>
            <li><Link to="/timer-com-alerta">Timer com Alerta</Link></li>
            <li><Link to="/tabs-navegaveis">Tabs Navegáveis</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/contador" element={<ContadorSimples />} />
            <Route path="/alteracao-cor-fundo" element={<AlteracaoCorFundo />} />
            <Route path="/lista-tarefas" element={<ListaTarefas />} />
            <Route path="/temporizador" element={<Temporizador />} />
            <Route path="/filtro-lista" element={<FiltroLista />} />
            <Route path="/formulario-registro" element={<FormularioRegistro />} />
            <Route path="/requisicao-dados" element={<RequisicaoDados />} />
            <Route path="/galeria-imagens" element={<GaleriaImagens />} />
            <Route path="/timer-com-alerta" element={<TimerComAlerta />} />
            <Route path="/tabs-navegaveis" element={<TabsNavegaveis />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;
