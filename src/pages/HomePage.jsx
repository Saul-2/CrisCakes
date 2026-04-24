import React from 'react';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import CategoryGrid from '../components/CategoryGrid';
import Testimonials from '../components/Testimonials';
import ExtraInfo from '../components/ExtraInfo';
import { productsData } from '../data/products';

const HomePage = () => {
  // Extract products for sections
  const docinhos = productsData.categories['docinhos'].products;
  const bolos = productsData.categories['bolos'].products;
  const kitFestas = productsData.categories['chocolates'].products;

  // Favoritos: 4 highlighted items
  const favorites = [
    docinhos[0],
    docinhos[1],
    bolos[1],
    kitFestas[0]
  ];

  // Combos: 3 items for highlighting
  const combos = kitFestas.slice(0, 3).map(p => ({ ...p, discount: 10 }));

  return (
    <main className="home-page">
      <Hero />
      
      <ProductSection 
        subtitle="NOSSOS" 
        title="favoritos" 
        products={favorites} 
        id="favoritos"
      />

      <ProductSection 
        subtitle="10% DE DESCONTO" 
        title="Combos Cris Cakes" 
        products={combos} 
        dark={true}
        id="combos"
      />

      <ProductSection 
        subtitle="CONHEÇA NOSSOS" 
        title="kit festas" 
        products={kitFestas} 
        id="kits"
      />

      <CategoryGrid />
      
      <Testimonials />
      
      <ExtraInfo />
    </main>
  );
};

export default HomePage;
