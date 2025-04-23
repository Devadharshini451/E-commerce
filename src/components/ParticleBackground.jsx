import React from 'react';
import Particles from 'react-tsparticles';  // You need to install the 'react-tsparticles' package

const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#000014", // Dark background for cosmic theme
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#00f0ff", // Particle color (light blue)
          },
          links: {
            color: "#00f0ff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Number of particles
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
