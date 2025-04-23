import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import Cart from '../components/Cart.jsx';
import hero1 from '../assets/superhero1.jpg';
import hero2 from '../assets/superhero2.jpg';
import './CartPage.css';

const CartPage = () => {
  const cartItems = [
    { name: 'Cosmic Cape', image: hero1, price: 99, quantity: 1 },
    { name: 'Galactic Sword', image: hero2, price: 149, quantity: 2 },
  ];

  return (
    <AnimatedPage>
      <div className="cart-page">
        <div className="cart-container">
          <h2>Your Cart 🛒</h2>
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default CartPage;
