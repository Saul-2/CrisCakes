import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner-premium animate-fade-in">
        <div className="hero-content-v2">
          <div className="hero-text-block">
            <span className="subtitle-gold">CONFEITARIA ARTESANAL PREMIUM</span>
            <h1 className="main-title title-serif-italic">
              <span className="italic-highlight">celebre momentos únicos</span>
              <span className="sub-title">com Cris Cakes</span>
            </h1>
            <p className="tagline">
              PRODUTOS FEITOS À MÃO COM OS MELHORES INGREDIENTES PARA TORNAR SEU EVENTO INESQUECÍVEL.
            </p>
            <div className="hero-btns">
              <a href="#favoritos" className="btn-primary-elegant">CONHEÇA NOSSOS FAVORITOS</a>
              <a href="#kits" className="btn-outline-elegant">KIT FESTAS</a>
            </div>
          </div>
        </div>
        <div className="hero-image-v2">
           <img src="/criscakes_delight_1776802119_3880418948475354069_60095438454_1.jpg" alt="Bolo Cris Cakes" className="enhanced-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
