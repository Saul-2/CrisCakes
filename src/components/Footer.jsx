import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="title-serif">Cris Cakes</h2>
          <p>Feito com amor em cada detalhe.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Navegação</h3>
          <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contato</h3>
          <ul>
            <li><Phone size={16} /> (21) 99999-9999</li>
            <li><Mail size={16} /> contato@criscakes.com.br</li>
            <li><MapPin size={16} /> Rio de Janeiro, RJ</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cris Cakes Confeitaria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
