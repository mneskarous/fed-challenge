import React from 'react';

import ProductNav from './components/product-nav/product-nav.component'
import MainNav from './components/main-nav/main-nav.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="product-nav-container">
        <ProductNav />
      </div>
      <div className="main-nav-container">
        <MainNav />
      </div>
    </div>
  );
}

export default App;
