import React, { useState, useEffect } from 'react';
import '../styles/TimerComAlerta.css';

const TimerComAlerta = () => {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let interval = null;

    if (ativo && segundos > 0) {
      interval = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos - 1);
      }, 1000);
    } else if (segundos === 0 && ativo) {
      alert("O tempo acabou!");
      setAtivo(false);
    }

    return () => clearInterval(interval);
  }, [ativo, segundos]);

  const iniciarTimer = () => {
    if (segundos > 0) {
      setAtivo(true);
    } else {
      alert("Defina um valor maior que zero para iniciar o timer.");
    }
  };

  const resetar = () => {
    setSegundos(0);
    setAtivo(false);
  };

  return (
    <div className="timer-com-alerta">
      <h2>Timer: {segundos}s</h2>
      <input 
        type="number" 
        placeholder="Segundos" 
        value={segundos}
        onChange={(e) => setSegundos(Number(e.target.value))}
      />
      <button onClick={iniciarTimer}>Iniciar</button>
      <button onClick={() => setAtivo(false)}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

export default TimerComAlerta;
