import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid #0ff',
        padding: '1rem',
        borderRadius: '10px',
        width: '200px',
        color: 'white',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
        backdropFilter: 'blur(4px)',
      }}
      className="product-card"
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '0.5rem' }}
      />
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{product.name}</h3>
      <p style={{ marginBottom: '0.8rem' }}>${product.price}</p>
      <button
        style={{
          backgroundColor: '#0ff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0cf')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#0ff')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
