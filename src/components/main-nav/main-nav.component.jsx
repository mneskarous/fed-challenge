import React from 'react';

import './main-nav.styles.scss';

const MainNav = () => (
  <div className="main-nav-container">
    <div className="main-nav-logo-container">
      <img src="./images/ifit-coach-logo.svg" alt="iFit Coach Logo"/>
    </div>
    <div className="main-nav-links-container">
      <button className="main-nav-link">Exercise</button>
      <button className="main-nav-link">Nutrition</button>
      <button className="main-nav-link">Activity</button>
      <button className="main-nav-link">Sleep</button>
    </div>
    <div className="main-nav-links-btn-container">
    <button className="main-nav-link-btn">Sign Up</button>
    </div>
  </div>
);

export default MainNav