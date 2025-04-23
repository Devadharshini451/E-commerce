import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🪐 Cosmic Shop</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/search">Search</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
