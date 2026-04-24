import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import './CategoryPage.css';

const CategoryPage = () => {
  const { id } = useParams();
  const category = productsData.categories[id];

  if (!category) return <div className="section text-center"><h2>Categoria não encontrada</h2></div>;

  return (
    <div className="category-page section container animate-fade-in">
      <div className="category-header text-center">
        <h1 className="title-serif-italic">{category.name}</h1>
        <p>{category.description}</p>
        <p className="product-count">{category.products.length} produtos</p>
      </div>

      <div className="category-grid">
        {category.products.map(product => (
          <Link to={`/produto/${product.id}`} key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.images[0]} alt={product.name} className="product-image enhanced-image" />
            </div>
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
