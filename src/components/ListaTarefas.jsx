import React, { useState } from 'react';
import '../styles/ListaTarefas.css';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  const adicionarTarefa = () => {
    if (texto) {
      setTarefas([...tarefas, { texto, completa: false }]);
      setTexto('');
    }
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const marcarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].completa = !novasTarefas[index].completa;

    setTarefas(novasTarefas);
  };

  return (
    <div className="calculadora"> {/* Aplica a classe CSS 'calculadora' para estilização */}
      <h1>Lista de Tarefas</h1> {/* Título do aplicativo */}
      <div>
        <input
          value={texto} 
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button> {/* Botao para adicionar uma nova tarefa */}
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <span style={{ textDecoration: tarefa.completa ? 'line-through' : 'none' }}> {/* Aplica uma linha de corte se a tarefa estiver completa */}
              {tarefa.texto}
            </span>
            <button className="concluir" onClick={() => marcarConcluida(index)}>Concluir</button> {/* Botao para marcar a tarefa como concluída */}
            <button className="remover" onClick={() => removerTarefa(index)}>Remover</button> {/* Botao para remover a tarefa */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;