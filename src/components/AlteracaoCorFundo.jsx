import React, { useState, useEffect } from 'react';
import '../styles/AlteracaoCorFundo.css';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function ColorChanger() {
    const [color, setColor] = useState(getRandomColor());
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        let intervalId;
        
        if (isChanging) {
            intervalId = setInterval(() => {
                setColor(getRandomColor());
            }, 2000);
        }

        return () => clearInterval(intervalId);
    }, [isChanging]);

    return (
        <div className="color-changer-container" style={{ backgroundColor: color }}>
            <h1 className="title">Simulador de Mudança de Cor</h1>
            <button
                className="start-button"
                onClick={() => setIsChanging(true)}
                disabled={isChanging}
            >
                Iniciar Mudança de Cor
            </button>
            <button
                className="stop-button"
                onClick={() => setIsChanging(false)}
                disabled={!isChanging}
            >
                Parar Mudança de Cor
            </button>
        </div>
    );
}

export default ColorChanger;