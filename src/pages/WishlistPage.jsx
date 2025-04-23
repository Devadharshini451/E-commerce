import React from 'react';
import './WishlistPage.css'; // Import the CSS

function WishlistPage() {
  const wishlist = [
    { id: 1, name: 'Superman T-Shirt' },
    { id: 2, name: 'Wanda T-Shirt' },
    { id: 3, name: 'Marvel T-Shirt' }
  ];

  return (
    <div className="wishlist-page">
      <div className="wishlist-content">
        <h2>My Wishlist 💖</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul>
            {wishlist.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
