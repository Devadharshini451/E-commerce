import React from 'react'
import AnimatedPage from '../components/AnimatedPage'
import cosmicBg from '../assets/cosmic-background.jpg' // ✅ imported from src/assets
import './Home.css'

const Home = () => {
  return (
    <AnimatedPage>
      <div
        className="home-page"
        style={{
          backgroundImage: `url(${cosmicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <div className="home-content">
          <h1>🌌 Welcome to Cosmic Shopping</h1>
          <p>Explore the galaxy of superhero gear!</p>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Home;
