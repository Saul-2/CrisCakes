import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const displayPrice = product?.hasVariants ? product.variants[selectedSize]?.price : product?.price;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product && product.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % product.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [product]);

  if (!product) return <div className="section text-center"><h2>Produto não encontrado</h2></div>;

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % product.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + product.images.length) % product.images.length);

  const handleFlavorChange = (flavor) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter(f => f !== flavor));
    } else {
      if (selectedFlavors.length < product.maxFlavors) {
        setSelectedFlavors([...selectedFlavors, flavor]);
      } else {
        alert(`Você pode escolher até ${product.maxFlavors} sabores para este produto.`);
      }
    }
  };

  const handleFillingChange = (filling) => {
    if (selectedFillings.includes(filling)) {
      setSelectedFillings(selectedFillings.filter(f => f !== filling));
    } else {
      if (selectedFillings.length < (product.maxFillings || 2)) {
        setSelectedFillings([...selectedFillings, filling]);
      } else {
        alert(`Você pode escolher até ${product.maxFillings || 2} recheios para este bolo.`);
      }
    }
  };

  const getWhatsAppLink = () => {
    let text = `Olá! Gostaria de encomendar:\n\n*${quantity}x ${product.name}*\n`;
    if (product.hasVariants) {
      text += `\nTamanho: ${product.variants[selectedSize].name}\n`;
    }
    if (selectedFillings.length > 0) {
      text += `\n*Recheios Escolhidos:*\n- ${selectedFillings.join('\n- ')}\n`;
    }
    if (selectedFlavors.length > 0) {
      text += `\n*Sabores Escolhidos:*\n- ${selectedFlavors.join('\n- ')}\n`;
    }
    text += `\nValor Total: R$ ${(displayPrice * quantity).toFixed(2).replace('.', ',')}`;
    return `https://wa.me/5521996586679?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="product-page container section animate-fade-in">
      <div className="product-layout">
        {/* Gallery */}
        <div className="product-gallery">
          <div className="main-image-container">
            <button className="nav-btn prev" onClick={prevImg}><ChevronLeft size={24} /></button>
            <img src={product.images[currentImg]} alt={product.name} className="main-image enhanced-image" />
            <button className="nav-btn next" onClick={nextImg}><ChevronRight size={24} /></button>
          </div>
          <div className="thumbnail-list">
            {product.images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Miniatura ${i}`} 
                className={`thumbnail enhanced-image ${currentImg === i ? 'active' : ''}`}
                onClick={() => setCurrentImg(i)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <h1 className="title-product">{product.name}</h1>
          <p className="price-product">R$ {displayPrice.toFixed(2).replace('.', ',')}</p>
          
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="var(--color-secondary)" color="var(--color-secondary)" />
            ))}
            <span className="rating-text">{product.rating}</span>
          </div>

          <p className="product-desc">{product.shortDesc}</p>
          <div className="stock-info">
            <span>Baixo estoque</span>
          </div>

          {product.availableFlavors && product.availableFlavors.length > 0 && (
            <div className="flavors-section">
              <h3 className="flavors-title">
                ESCOLHA OS SABORES <span className="flavors-limit">(Até {product.maxFlavors})</span>
              </h3>
              <p className="flavors-subtitle">Selecionados: {selectedFlavors.length} / {product.maxFlavors}</p>
              <div className="flavors-grid">
                {product.availableFlavors.map(flavor => (
                  <label key={flavor} className={`flavor-option ${selectedFlavors.includes(flavor) ? 'selected' : ''}`}>
                    <input 
                      type="checkbox" 
                      checked={selectedFlavors.includes(flavor)}
                      onChange={() => handleFlavorChange(flavor)}
                      disabled={!selectedFlavors.includes(flavor) && selectedFlavors.length >= product.maxFlavors}
                    />
                    {flavor}
                  </label>
                ))}
              </div>
            </div>
          )}

          {product.hasVariants && (
            <div className="flavors-section">
              <h3 className="flavors-title">TAMANHO (FATIAS)</h3>
              <div className="variant-selector">
                <select value={selectedSize} onChange={(e) => setSelectedSize(Number(e.target.value))}>
                  {product.variants.map((variant, index) => (
                    <option key={index} value={index}>
                      {variant.name} - R$ {variant.price.toFixed(2).replace('.', ',')}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {(product.traditionalFillings || product.specialFillings) && (
            <div className="flavors-section">
              <h3 className="flavors-title">
                RECHEIOS <span className="flavors-limit">(Até {product.maxFillings || 2})</span>
              </h3>
              <p className="flavors-subtitle">Selecionados: {selectedFillings.length} / {product.maxFillings || 2}</p>
              
              {product.traditionalFillings && (
                <>
                  <div className="fillings-category">Tradicionais</div>
                  <div className="flavors-grid">
                    {product.traditionalFillings.map(filling => (
                      <label key={filling} className={`flavor-option ${selectedFillings.includes(filling) ? 'selected' : ''}`}>
                        <input 
                          type="checkbox" 
                          checked={selectedFillings.includes(filling)}
                          onChange={() => handleFillingChange(filling)}
                          disabled={!selectedFillings.includes(filling) && selectedFillings.length >= (product.maxFillings || 2)}
                        />
                        {filling}
                      </label>
                    ))}
                  </div>
                </>
              )}

              {product.specialFillings && (
                <>
                  <div className="fillings-category" style={{ marginTop: '1.5rem' }}>
                    Especiais <span className="special-badge">Custo Extra. Consulte-nos!</span>
                  </div>
                  <div className="flavors-grid">
                    {product.specialFillings.map(filling => (
                      <label key={filling} className={`flavor-option ${selectedFillings.includes(filling) ? 'selected' : ''}`}>
                        <input 
                          type="checkbox" 
                          checked={selectedFillings.includes(filling)}
                          onChange={() => handleFillingChange(filling)}
                          disabled={!selectedFillings.includes(filling) && selectedFillings.length >= (product.maxFillings || 2)}
                        />
                        {filling}
                      </label>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          
          <div className="quantity-cart-wrapper">
             <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
             </div>
             <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-primary flex-grow">
               ADICIONAR AO CARRINHO
             </a>
          </div>

          <div className="gift-option">
             <span>🎁 DESEJA ADICIONAR OPÇÕES DE PRESENTE?</span>
             <small>EMBALAGEM E CARTÃO PERSONALIZADO</small>
          </div>

          <div className="product-details">
            <h3 className="details-title">DESCRIÇÃO DO PRODUTO</h3>
            <p>{product.longDesc}</p>
          </div>
        </div>
      </div>

      {/* Combina Com */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <div className="combina-com-section">
          <h3 className="section-subtitle">COMBINA COM</h3>
          <div className="related-grid">
            {product.relatedProducts.map(relatedId => {
              const related = getProductById(relatedId);
              if (!related) return null;
              return (
                <div key={related.id} className="related-card">
                  <img src={related.images[0]} alt={related.name} className="related-img enhanced-image" />
                  <div className="related-info">
                    <h4>{related.name}</h4>
                    <p>R$ {related.price.toFixed(2).replace('.', ',')}</p>
                  </div>
                  <Link to={`/produto/${related.id}`} className="related-cart-btn">
                     <ShoppingCart size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reviews */}
      <div className="reviews-section">
        <h2 className="title-serif-italic text-center">avaliações dos clientes</h2>
        <div className="reviews-list">
          {product.reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="stars">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--color-primary)" color="var(--color-primary)" />)}
              </div>
              <div className="review-header">
                <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                <div>
                  <h4>{review.name} <span className="verified">Verificado</span></h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
