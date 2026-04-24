import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSection.css';

const ProductSection = ({ subtitle, title, products, dark = false, id }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className={`product-section ${dark ? 'dark' : ''}`} id={id}>
      <div className="container">
        <div className="section-header">
          {subtitle && <span className="subtitle">{subtitle}</span>}
          <h2 className="title-serif-italic">{title}</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <Link to={`/produto/${product.id}`} key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.images[0]} alt={product.name} className="enhanced-image" />
                {product.discount && <span className="discount-tag">-{product.discount}%</span>}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-footer">
          <Link to={`/categoria/${products[0].categoryId || 'todos'}`} className="view-more-link">VER MAIS PRODUTOS</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
