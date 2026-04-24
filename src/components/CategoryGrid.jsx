import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';

const categories = [
  { id: 'docinhos', name: 'docinhos', image: '/criscakes_delight_475448451_17929464885006455_4748208513815392116_n.jpg' },
  { id: 'bolos', name: 'bolos', image: '/criscakes_delight_1776802119_3880418948475354069_60095438454_1.jpg' },
  { id: 'bolos', name: 'bolos personalizados', image: '/criscakes_delight_1776714841_3879687317582107292_60095438454_1.jpg' },
  { id: 'chocolates', name: 'kit festas', image: '/criscakes_delight_469400789_17921486385006455_1591918298856863978_n.jpg' }
];

const CategoryGrid = () => {
  return (
    <section className="category-grid-section">
       <div className="container">
         <div className="section-header text-center">
           <span className="subtitle">DESCUBRA</span>
           <h2 className="title-serif-italic">mundo Cris Cakes</h2>
         </div>
       </div>
       <div className="cat-grid">
         {categories.map((cat, idx) => (
           <Link to={`/categoria/${cat.id}`} key={idx} className="cat-item">
             <img src={cat.image} alt={cat.name} className="enhanced-image" />
             <div className="cat-info">
               <span className="cat-name title-serif-italic">{cat.name}</span>
               <div className="cat-arrow">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
             </div>
           </Link>
         ))}
       </div>
    </section>
  );
};

export default CategoryGrid;
