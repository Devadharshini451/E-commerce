import React from 'react';

const Cart = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      {cartItems.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '1rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '1rem',
          borderRadius: '10px'
        }}>
          <img src={item.image} alt={item.name} style={{ width: '80px', borderRadius: '8px' }} />
          <div>
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
