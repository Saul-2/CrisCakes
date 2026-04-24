import React from 'react';
import './ExtraInfo.css';

const ExtraInfo = () => {
  return (
    <section className="extra-info-banner section">
      <div className="extra-info-container">
        <div className="extra-col-left animate-fade-in">
          <span className="subtitle">SOBRE NÓS</span>
          <h2 className="title-serif-italic title-brown">O amor em cada detalhe!</h2>
          <a href="https://wa.me/5521996586679" target="_blank" rel="noopener noreferrer" className="link-brown">
            Entrar em contato
          </a>
        </div>

        <div className="extra-col-center">
          <div className="sobre-nos-image-container animate-fade-in">
            <img 
              src="/criscakes_delight_1753277706_3683082807002331085_60095438454_2.jpg" 
              alt="Sobre a Cris Cakes" 
              className="sobre-nos-img enhanced-image" 
            />
          </div>
        </div>

        <div className="extra-col-right animate-fade-in">
          <p className="extra-text-brown">
            A Cris Cakes nasceu do amor pela confeitaria e do desejo de transformar celebrações em experiências únicas. 
            Selecionamos a dedo os melhores ingredientes para criar produtos com um sabor autêntico e inesquecível.
          </p>
          <hr className="divider-brown" />
          <p className="extra-text-brown">
            Nossa produção é totalmente artesanal, feita sob medida para o seu evento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
