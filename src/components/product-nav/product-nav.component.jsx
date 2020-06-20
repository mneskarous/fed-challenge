import React from 'react';

import './product-nav.styles.scss'

const ProductNav = () => (
  <div className="product-nav-links-container">
    <div className="product-nav-link-btn-container">
      <button className="product-nav-link-btn">Blog</button>
    </div>
    <div className="product-nav-link-btn-container">
      <button className="product-nav-link-btn">Nourish</button>
    </div>
    <div className="product-nav-link-btn-container">
      <button className="product-nav-link-btn">Shop</button>
    </div>
  </div>
);

export default ProductNav;