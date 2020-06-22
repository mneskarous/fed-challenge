import React from 'react';

import './hero.styles.scss';

function Hero() {

  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <p className="hero-text animate-flicker">The best personal training, <br/>right in your own home</p>
      </div>
      <div className="hero-btn-container">
        <button className="hero-btn">Join iFit Coach</button>
      </div>
    </div>
  );

}

export default Hero;