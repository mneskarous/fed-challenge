import React from 'react';

import ProductNav from './components/product-nav/product-nav.component'
import MainNav from './components/main-nav/main-nav.component';
import Hero from './components/hero/hero.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="product-nav-component-container">
        <ProductNav />
      </div>
      <div className="main-nav-component-container">
        <MainNav />
      </div>
      <div className="hero-component-container">
        <Hero />
      </div>
    </div>
  );
}

export default App;
