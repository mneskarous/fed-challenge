import React from 'react';

import './product-nav.styles.scss'

function ProductNav() {

  return(
    <div className="product-nav-container">
      <div className="product-nav-link-container">
        <button className="product-nav-link">Blog</button>
      </div>
      <div className="product-nav-link-container">
        <button className="product-nav-link">Nourish</button>
      </div>
      <div className="product-nav-link-container">
        <button className="product-nav-link">Shop</button>
      </div>
    </div>
  );

}

export default ProductNav;