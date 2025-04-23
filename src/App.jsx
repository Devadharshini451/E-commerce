import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground'; // starry particles

import './App.css';

// Wrapper for animated route transitions
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      {/* Optional animated stars background */}
      <ParticleBackground />

      <div className="cosmic-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
