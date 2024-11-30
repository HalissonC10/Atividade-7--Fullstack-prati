import React, { useState } from 'react'; 
import '../styles/TabsNavegaveis.css';

const TabsNavegaveis = () => {
  const [tabAtiva, setTabAtiva] = useState('sobre');

  const renderConteudoTab = () => {
    switch (tabAtiva) {
      case 'sobre':
        return <p>Conteúdo da aba Sobre.</p>;
      case 'contato':
        return <p>Conteúdo da aba Contato.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <div className="nav-tabs">
        <button 
          className={tabAtiva === 'sobre' ? 'active' : ''} 
          onClick={() => setTabAtiva('sobre')}
        >
          Sobre
        </button>
        <button 
          className={tabAtiva === 'contato' ? 'active' : ''} 
          onClick={() => setTabAtiva('contato')}
        >
          Contato
        </button>
      </div>
      <div className="tab-content">
        {renderConteudoTab()}
      </div>
    </div>
  );
};

export default TabsNavegaveis;
