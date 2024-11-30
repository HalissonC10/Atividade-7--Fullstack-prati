import React, { useState } from 'react';
import '../styles/FormularioRegistro.css';

const FormularioRegistro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && senha) {
      setMensagem(`Bem-vindo, ${nome}!`);
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default FormularioRegistro;
