import React from 'react';
import './ExtraInfo.css';

const ExtraInfo = () => {
  return (
    <section className="essencia-section" id="historia">
      <div className="essencia-container">
        <div className="essencia-text-side">
          <div className="essencia-inner">
            <span className="subtitle">NOSSA ESSÊNCIA</span>
            <h2 className="title-serif-italic">sabor & tradição em cada detalhe</h2>
            <div className="essencia-description">
              <p>
                Desde a nossa fundação, a Cris Cakes transforma ingredientes selecionados em verdadeiras obras de arte gastronômicas. 
              </p>
              <p>
                Cada doce, bolo ou kit festa carrega a dedicação de uma equipe apaixonada pelo que faz, unindo tradição e inovação para oferecer experiências únicas. Seja para celebrar momentos especiais ou tornar o dia mais doce, a Cris Cakes é sinônimo de qualidade e sofisticação.
              </p>
              <p className="extra-tagline">Descubra mais sobre nossa história e o que nos inspira a criar delícias incomparáveis.</p>
            </div>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-saiba-mais">Saiba mais</a>
          </div>
        </div>
        <div className="essencia-image-side">
          <img src="/criscakes_delight_1753277706_3683082807002331085_60095438454_2.jpg" alt="Ateliê Cris Cakes" className="enhanced-image" />
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
