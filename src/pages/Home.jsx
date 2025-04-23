import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import cosmicBg from '../assets/cosmic-background.jpg';
import './Home.css';

const Home = () => {
  return (
    <AnimatedPage>
      <div className="home-page" style={{ backgroundImage: `url(${cosmicBg})` }}>
        <div className="home-content">
          <h1>🌌 Welcome to Cosmic Shopping</h1>
          <p>Explore the galaxy of superhero gear!</p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
