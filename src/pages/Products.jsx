import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import ProductCard from '../components/ProductCard.jsx';

import hero1 from '../assets/superhero1.jpg';
import hero2 from '../assets/superhero2.jpg';
import hero3 from '../assets/superhero3.jpg';
import hero4 from '../assets/superhero4.jpg';
import hero5 from '../assets/superhero5.jpg';
import hero6 from '../assets/superhero6.jpg';
import hero7 from '../assets/superhero7.jpg';
import hero8 from '../assets/superhero8.jpg';
import hero9 from '../assets/superhero9.jpg';
import hero10 from '../assets/superhero10.jpg';

import './Products.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Spidy T-shirt', price: 99, image: hero1 },
    { id: 2, name: 'Captain T-shirt', price: 149, image: hero2 },
    { id: 3, name: 'Heroes', price: 129, image: hero3 },
    { id: 4, name: 'Avenger T-shirt Kids', price: 89, image: hero4 },
    { id: 5, name: 'Superhero', price: 199, image: hero5 },
    { id: 6, name: 'Wanda T-shirt', price: 175, image: hero6 },
    { id: 7, name: 'Marvel T-shirt', price: 220, image: hero7 },
    { id: 8, name: 'Superman', price: 299, image: hero8 },
    { id: 9, name: 'Captain America T-shirt', price: 259, image: hero9 },
    { id: 10, name: 'Batman T-shirt', price: 180, image: hero10 },
  ];

  return (
    <AnimatedPage>
      <div className="products-page">
        <h2>🦸 Superhero T-shirts</h2>
        <div className="products-grid">
          {products.map((p, index) => (
            <div
              className="animated-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              key={p.id}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Products;
