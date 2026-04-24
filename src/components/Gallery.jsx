import React, { useState } from 'react';
import './Gallery.css';

const docesFlavors = [
  'Brigadeiro ao leite', 'Brigadeiro com kitkat', 'Brigadeiro com Nutella',
  'Chocolate branco', 'Chocolate branco c/ doce de leite', 'Chocolate Branco c/ kitkat branco',
  'M&M', 'Ferrero rocher', 'Beijinho', 'Coco queimado c/ doce de leite',
  'Coco queimado', 'Churros', 'Morango c/ Nutella', 'Morango',
  'Romeu e Julieta', 'Casadinho', 'Ninho c/ nutella', 'Ninho c/ Oreo',
  'Ninho c/ doce de leite', 'Oreo', 'Prestígio'
];

const recheiosTradicionais = [
  'Chocolate', 'Ninho', 'Coco cremoso', 'Doce de leite com coco',
  'Doce de leite', 'Coco queimado', 'Chocolate com crocante de amendoim', 'Paçoca'
];

const recheiosEspeciais = [
  'Abacaxi com coco', 'Doce de leite com ameixa', 'Oreo', 'Ninho com Nutella',
  'Kinder bueno', 'Ninho com morangos', 'Chocolate com ovomaltine', 'Nozes',
  'Ninho com uvas', 'Mousse de maracujá'
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('doces');
  const whatsappLink = "https://wa.me/5521996586679?text=";

  return (
    <section className="menu-section section container" id="produtos">
      <div className="menu-header text-center">
        <span className="subtitle">NOSSO CARDÁPIO</span>
        <h2 className="title-serif">Opções para todos os gostos</h2>
        <p className="menu-note">Pedidos só serão confirmados após o sinal de 50% do valor!</p>
      </div>
      
      <div className="menu-tabs">
        <button className={`tab-btn ${activeTab === 'doces' ? 'active' : ''}`} onClick={() => setActiveTab('doces')}>Doces Gourmet</button>
        <button className={`tab-btn ${activeTab === 'kits' ? 'active' : ''}`} onClick={() => setActiveTab('kits')}>Kits Festa</button>
        <button className={`tab-btn ${activeTab === 'bolos' ? 'active' : ''}`} onClick={() => setActiveTab('bolos')}>Cardápio de Bolos</button>
      </div>

      <div className="menu-content">
        {/* DOCES GOURMET */}
        {activeTab === 'doces' && (
          <div className="menu-pane animate-fade-in">
            <div className="doces-header">
              <div className="price-box">
                <h4>50 unidades</h4>
                <span>(Até 3 sabores)</span>
                <p className="price">R$ 90,00</p>
                <a href={`${whatsappLink}Olá! Gostaria de encomendar 50 doces gourmet.`} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">Pedir</a>
              </div>
              <div className="price-box">
                <h4>100 unidades</h4>
                <span>(Até 6 sabores)</span>
                <p className="price">R$ 170,00</p>
                <a href={`${whatsappLink}Olá! Gostaria de encomendar 100 doces gourmet.`} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">Pedir</a>
              </div>
            </div>
            <h3 className="section-title">Nossos Sabores</h3>
            <ul className="flavor-list">
              {docesFlavors.map((flavor, index) => (
                <li key={index}>{flavor}</li>
              ))}
            </ul>
          </div>
        )}

        {/* KITS FESTA */}
        {activeTab === 'kits' && (
          <div className="menu-pane animate-fade-in">
            <div className="kits-grid">
              <div className="kit-card">
                <h3 className="title-script">Kit festa 1</h3>
                <ul>
                  <li>Bolo 15 fatias</li>
                  <li>1 topo 3D</li>
                  <li>30 Doces</li>
                  <li>4 cupcakes</li>
                </ul>
                <p className="price">R$ 180,00</p>
                <a href={`${whatsappLink}Olá! Gostaria de encomendar o Kit Festa 1.`} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero esse</a>
              </div>
              <div className="kit-card">
                <h3 className="title-script">Kit festa 2</h3>
                <ul>
                  <li>Bolo 25 fatias</li>
                  <li>1 Topo 3D</li>
                  <li>50 Doces</li>
                  <li>6 cupcakes</li>
                </ul>
                <p className="price">R$ 240,00</p>
                <a href={`${whatsappLink}Olá! Gostaria de encomendar o Kit Festa 2.`} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero esse</a>
              </div>
              <div className="kit-card">
                <h3 className="title-script">Kit festa 3</h3>
                <ul>
                  <li>Bolo 40 fatias</li>
                  <li>1 Topo 3D</li>
                  <li>80 Doces</li>
                  <li>10 cupcakes</li>
                </ul>
                <p className="price">R$ 350,00</p>
                <a href={`${whatsappLink}Olá! Gostaria de encomendar o Kit Festa 3.`} target="_blank" rel="noopener noreferrer" className="btn-primary">Quero esse</a>
              </div>
            </div>
          </div>
        )}

        {/* CARDÁPIO DE BOLOS */}
        {activeTab === 'bolos' && (
          <div className="menu-pane animate-fade-in">
            <div className="bolos-tables">
              <div className="table-wrapper">
                <h3>Bolos Decorados</h3>
                <table className="price-table">
                  <tbody>
                    <tr><td>Tam 15cm - 15 fatias</td><td>R$ 110,00</td></tr>
                    <tr><td>Tam 20cm - 25 fatias</td><td>R$ 145,00</td></tr>
                    <tr><td>Tam 22cm - 35 fatias</td><td>R$ 205,00</td></tr>
                    <tr><td>Tam 25cm - 45 fatias</td><td>R$ 240,00</td></tr>
                    <tr><td>Tam 27cm - 55 fatias</td><td>R$ 275,00</td></tr>
                    <tr><td>Tam 30cm - 70 Fatias</td><td>R$ 315,00</td></tr>
                  </tbody>
                </table>
                <p className="small-note">* Papelaria personalizada e flores naturais cobrados à parte.</p>
              </div>
              
              <div className="table-wrapper">
                <h3>Naked Cake / Simples</h3>
                <table className="price-table">
                  <tbody>
                    <tr><td>Tam 15cm - 15 fatias</td><td>R$ 85,00</td></tr>
                    <tr><td>Tam 20cm - 25 fatias</td><td>R$ 110,00</td></tr>
                    <tr><td>Tam 22cm - 35 fatias</td><td>R$ 145,00</td></tr>
                    <tr><td>Tam 25cm - 45 fatias</td><td>R$ 170,00</td></tr>
                    <tr><td>Tam 27cm - 55 fatias</td><td>R$ 215,00</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="recheios-section">
              <div className="recheio-list">
                <h3>Recheios Tradicionais</h3>
                <ul>
                  {recheiosTradicionais.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
              <div className="recheio-list">
                <h3>Recheios Especiais <span className="highlight">(Custo extra)</span></h3>
                <ul>
                  {recheiosEspeciais.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            </div>
            
            <div className="text-center" style={{ marginTop: '3rem' }}>
              <a href={`${whatsappLink}Olá! Gostaria de encomendar um bolo personalizado.`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Fazer encomenda de Bolo
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
