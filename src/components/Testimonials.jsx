import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    image: '/criscakes_delight_1766934969_3797648234027019288_60095438454_1.jpg',
    productName: 'Docinhos Gourmet - 50 Unidades',
    date: '15/04/2026',
    text: 'Deliciosos! Vieram como pedi e pude presentear com orgulho.',
  },
  {
    id: 2,
    image: '/criscakes_delight_1776802119_3880418948475354069_60095438454_1.jpg',
    productName: 'Bolo Personalizado - Tam 20cm',
    date: '14/04/2026',
    text: 'Bolo lindo e super recheado. Pedi massa de chocolate com doce de leite e estava divino.',
  },
  {
    id: 3,
    image: '/criscakes_delight_469400789_17921486385006455_1591918298856863978_n.jpg',
    productName: 'Kit Festa 1 (Bolo + 30 Doces + 4 Cupcakes)',
    date: '12/04/2026',
    text: 'Facilitou muito minha vida! O kit chegou impecável e o bolo estava maravilhoso.',
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section" id="depoimentos">
      <div className="container">
        <div className="testimonials-header text-center">
          <h2 className="title-serif-italic title-large" style={{marginBottom: '0'}}>Deixe os clientes falarem por nós</h2>
          <div className="reviews-subtitle">
            de 868 avaliações <span className="verified-icon">☑</span>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="test-img-wrapper">
                <img src={t.image} alt={t.productName} className="enhanced-image" />
              </div>
              <div className="test-content">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#a47a46" color="#a47a46" />)}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="test-footer">
                  <span className="test-product">{t.productName}</span>
                  <span className="test-date">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
