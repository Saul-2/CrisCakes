import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner-custom animate-fade-in">
        <div className="hero-content-left">
          <h2 className="title-serif-italic text-gold">celebre momentos únicos</h2>
          <h2 className="title-serif-italic text-white">com Cris Cakes</h2>
          <p className="hero-desc">
            OPÇÕES PARA TODOS OS GOSTOS.<br/>
            CELEBRE COM AMOR, CELEBRE COM CRIS CAKES.
          </p>
          <a href="#nossos-bolos" className="hero-btn">QUERO ENCOMENDAR</a>
        </div>
        
        <div className="hero-image-right">
          <div className="image-frame">
            <img 
              src="/criscakes_delight_1776802119_3880418948475354069_60095438454_1.jpg" 
              alt="Bolo Artesanal Cris Cakes" 
              className="enhanced-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
