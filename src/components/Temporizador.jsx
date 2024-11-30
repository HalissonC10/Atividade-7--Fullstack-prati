import React, { useState, useEffect } from 'react';
import '../styles/Temporizador.css';

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let interval = null;
    if (ativo) {
      interval = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    } else if (!ativo && segundos !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [ativo, segundos]);

  const resetar = () => {
    setSegundos(0);
    setAtivo(false);
  };

  return (
    <div>
      <h2>Temporizador: {segundos}s</h2>
      <button onClick={() => setAtivo(true)}>Iniciar</button>
      <button onClick={() => setAtivo(false)}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

export default Temporizador;
