import React from 'react';

const Footer = () => (
  <footer style={{
    background: '#000',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',  // Sticks to the bottom
    bottom: 0,          // Keeps it at the bottom of the viewport
    width: '100%',
  }}>
    <p>© 2025 Cosmic Superhero Shop 🌌</p>
  </footer>
);

export default Footer;
