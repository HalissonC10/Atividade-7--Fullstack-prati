import React, { useState } from 'react';
import '../styles/GaleriaImagens.css';
import { Link } from 'react-router-dom';
import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';


const imagens = [imagem1, imagem2, imagem3];

const GaleriaImagens = () => {
  const [imagemAtual, setImagemAtual] = useState(null);

  return (
    <div className="galeria-imagens">
      <h2>Galeria de Imagens</h2>
      <div className="galeria">
        {imagens.map((src, index) => (
          <img key={index} src={src} alt={`Imagem ${index}`} onClick={() => setImagemAtual(src)} />
        ))}
      </div>
      {imagemAtual && (
        <div className="modal">
          <img src={imagemAtual} alt="Imagem Ampliada" />
          <button onClick={() => setImagemAtual(null)}>Fechar</button>
        </div>
      )}
      <Link to="/">
        <button className="saida">Sair</button>
      </Link>
    </div>
  );
};

export default GaleriaImagens;
