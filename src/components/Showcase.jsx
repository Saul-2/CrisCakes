import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Showcase.css';

const images = [
  'criscakes_delight_1766934969_3797648234027019288_60095438454_1.jpg',
  'criscakes_delight_1766935318_3797651164109066302_60095438454_1.jpg',
  'criscakes_delight_1767819551_3805068646935496752_60095438454_1.jpg',
  'criscakes_delight_1768159884_3807923568228027669_60095438454_1.jpg',
  'criscakes_delight_1770573472_3828170192078331455_60095438454_1.jpg',
  'criscakes_delight_1771525280_3836153989973503811_60095438454_1.jpg',
  'criscakes_delight_1772284720_3842524776175321334_60095438454_1.jpg',
  'criscakes_delight_1772989702_3848438805750180596_60095438454_1.jpg',
  'criscakes_delight_1773430833_3852139234958896005_60095438454_1.jpg',
  'criscakes_delight_1774809528_3863704305887441985_60095438454_1.jpg',
  'criscakes_delight_1774809528_3863704308739555190_60095438454_2.jpg',
  'criscakes_delight_1775684533_3871044130009334061_60095438454_1.jpg',
  'criscakes_delight_1775861624_3872530427290942668_60095438454_1.jpg',
  'criscakes_delight_1775861624_3872530429589409852_60095438454_2.jpg',
  'criscakes_delight_1776013402_3873803493480435703_60095438454_1.jpg'
];

const Showcase = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (img) => {
    setSelectedImg(img);
    document.body.style.overflow = 'hidden'; // Evita que o site role por trás da foto
  };
  
  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto'; // Volta ao normal
  };

  return (
    <section className="showcase section container" id="vitrine">
      <div className="showcase-header text-center">
        <span className="subtitle">NOSSAS CRIAÇÕES</span>
        <h2 className="title-serif">Vitrine de Encomendas</h2>
        <p className="showcase-desc">
          Um pouco do nosso trabalho. Cada detalhe é pensado para proporcionar uma experiência única.
        </p>
      </div>

      <div className="masonry-grid">
        {images.map((img, index) => (
          <div key={index} className="masonry-item" onClick={() => openLightbox(img)}>
            <img 
              src={`/${img}`} 
              alt={`Produto Cris Cakes ${index + 1}`} 
              className="enhanced-image"
              loading="lazy"
            />
            <div className="masonry-overlay">
               <span>Ampliar</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Tela Cheia */}
      {selectedImg && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fechar">
            <X size={36} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={`/${selectedImg}`} alt="Produto em Destaque" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Showcase;
