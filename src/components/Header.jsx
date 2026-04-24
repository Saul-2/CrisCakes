import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, ChevronDown, X, ArrowUpRight } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const images = {
    docinhos: '/criscakes_delight_1766934969_3797648234027019288_60095438454_1.jpg',
    bolos: '/criscakes_delight_1775684533_3871044130009334061_60095438454_1.jpg',
    chocolates: '/criscakes_delight_1772989702_3848438805750180596_60095438454_1.jpg',
    festas: '/criscakes_delight_670439159_17978494563006455_3557055351669735031_n.jpg',
    casamentos: '/criscakes_delight_1775861624_3872530427290942668_60095438454_1.jpg'
  };

  return (
    <>
      <header className="header">
        {/* Top Bar */}
        <div className="header-top">
          <p>ENTREGA NO MESMO DIA - PARA PEDIDOS EFETUADOS ATÉ AS 17HS</p>
        </div>

        {/* Main Bar */}
        <div className="header-main container">
          <div className="header-search">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="O QUE VOCÊ ESTÁ PROCURANDO?" />
          </div>

          <div className="header-logo">
            <Link to="/" className="logo-text title-serif">CRIS CAKES</Link>
          </div>

          <div className="header-actions">
            <button className="action-link cart-btn" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="header-nav">
          <div className="container">
            <ul className="nav-list">
              <li><Link to="/">OFERTAS DA SEMANA</Link></li>
              <li className="separator">|</li>
              
              {/* Dropdown: Nossos Produtos */}
              <li className="nav-item-dropdown">
                <Link to="#">NOSSOS PRODUTOS <ChevronDown size={14} /></Link>
                <div className="dropdown-menu megamenu">
                  <div className="megamenu-grid">
                    <Link to="/categoria/docinhos" className="mega-item">
                      <img src={images.docinhos} alt="Docinhos" className="enhanced-image" />
                      <span className="title-serif-italic">docinhos</span>
                    </Link>
                    <Link to="/categoria/chocolates" className="mega-item">
                      <img src={images.festas} alt="Kit Festa" className="enhanced-image" />
                      <span className="title-serif-italic">kit festa</span>
                    </Link>
                    <Link to="/categoria/bolos" className="mega-item">
                      <img src={images.bolos} alt="Bolos" className="enhanced-image" />
                      <span className="title-serif-italic">bolos</span>
                    </Link>
                  </div>
                </div>
              </li>
              
              <li className="separator">|</li>
              
              {/* Dropdown: Atelier */}
              <li className="nav-item-dropdown">
                <Link to="#">ATELIER CRIS CAKES <ChevronDown size={14} /></Link>
                <div className="dropdown-menu megamenu">
                  <div className="megamenu-grid">
                    <Link to="/categoria/corporativo" className="mega-item">
                      <img src={images.docinhos} alt="Corporativo" className="enhanced-image" />
                      <span className="title-serif-italic">corporativo</span>
                    </Link>
                    <Link to="/categoria/festas" className="mega-item">
                      <img src={images.festas} alt="Festas" className="enhanced-image" />
                      <span className="title-serif-italic">festas</span>
                    </Link>
                    <Link to="/categoria/casamentos" className="mega-item">
                      <img src={images.casamentos} alt="Casamentos" className="enhanced-image" />
                      <span className="title-serif-italic">casamentos</span>
                    </Link>
                    <Link to="/categoria/ocasioes" className="mega-item">
                      <img src={images.bolos} alt="Ocasiões Especiais" className="enhanced-image" />
                      <span className="title-serif-italic">ocasiões especiais</span>
                    </Link>
                  </div>
                </div>
              </li>
              
              <li className="separator">|</li>
              <li><Link to="/">NOSSA HISTÓRIA</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Cart Drawer */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="title-serif-italic">seu carrinho</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}><X size={24} /></button>
        </div>
        
        <div className="cart-empty">
          <h3 className="title-serif-italic">seu carrinho está vazio</h3>
          <p>Que tal conferir nossos principais produtos?</p>
          
          <div className="cart-suggestions">
            <a href="#novidades" className="suggestion-card" onClick={() => setIsCartOpen(false)}>
              <img src={images.docinhos} alt="Novidades" className="enhanced-image" />
              <span className="suggestion-title">NOVIDADES</span>
              <div className="arrow-icon"><ArrowUpRight size={18} /></div>
            </a>
            
            <a href="#kits" className="suggestion-card" onClick={() => setIsCartOpen(false)}>
              <img src={images.bolos} alt="Bolos e Kits Festa" className="enhanced-image" />
              <span className="suggestion-title">BOLOS E KITS FESTA</span>
              <div className="arrow-icon"><ArrowUpRight size={18} /></div>
            </a>
            
            <a href="#cestas" className="suggestion-card" onClick={() => setIsCartOpen(false)}>
              <img src={images.festas} alt="Cestas para Presente" className="enhanced-image" />
              <span className="suggestion-title">CESTAS PARA PRESENTE</span>
              <div className="arrow-icon"><ArrowUpRight size={18} /></div>
            </a>
            
            <a href="#combos" className="suggestion-card" onClick={() => setIsCartOpen(false)}>
              <img src={images.chocolates} alt="Combos Cris Cakes" className="enhanced-image" />
              <span className="suggestion-title">COMBOS CRIS CAKES</span>
              <div className="arrow-icon"><ArrowUpRight size={18} /></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
