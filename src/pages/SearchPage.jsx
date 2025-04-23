import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import './SearchPage.css';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const mockDatabase = ['Superman T-shirt', 'Spidy T-shirt', 'Avenger T-shirt', 'Marvel T-shirt'];

  const handleSearch = (e) => {
    const filtered = mockDatabase.filter(item =>
      item.toLowerCase().includes(e.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <AnimatedPage>
      <div className="search-page">
        <div className="search-container">
          <h2>Search Products 🔍</h2>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
          {results.length > 0 ? (
            <ul className="search-results">
              {results.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : query && <p className="no-results">No results found.</p>}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default SearchPage;
