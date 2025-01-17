import React from 'react';

import ProductNav from './components/product-nav/product-nav.component'
import MainNav from './components/main-nav/main-nav.component';
import Hero from './components/hero/hero.component';
import MediaSlider from './components/media-slider/media-slider.component';
import DesktopLibrary from './components/desktop-library/desktop-library.component';
import EquipmentSelection from './components/equipment-selection/equipment-selection.component';
import Footer from './components/footer/footer.component';

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
      <div className="media-slider-component-container">
        <MediaSlider />
      </div>
      <div className="desktop-library-component-container">
        <DesktopLibrary />
      </div>
      <div className="equipment-selection-component-container">
        <EquipmentSelection />
      </div>
      <div className="footer-component-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
