import React from 'react';

import './footer.styles.scss';

function Footer() {

  return (
    <div className="footer-container">
      <div className="site-links">
        <div className="links-list">
          <p className="link-title" >Company</p>
          <button className="site-link">About</button>
          <button className="site-link">Contact Us</button>
          <button className="site-link">Careers</button>
        </div>
        <div className="links-list">
          <p className="link-title" >Account</p>
          <button className="site-link">Log In</button>
          <button className="site-link">Create Account</button>
        </div>
        <div className="links-list">
          <p className="link-title" >Support</p>
          <button className="site-link">Help Center</button>
          <button className="site-link">Accessibility</button>
        </div>
      </div>
      <div className="social-media-links">
        <a href="https://www.youtube.com/user/iFitLive">
          <img src="./images/social-media-images/youtube.png" alt="iFit-YouTube"/>
        </a>
        <a href="https://www.pinterest.com/ifit/">
          <img src="./images/social-media-images/pinterest.png" alt="iFit-Pinterest"/>
        </a>
        <a href="https://www.facebook.com/ifit/">
          <img src="./images/social-media-images/facebook.png" alt="iFit-Facebook"/>
        </a>
        <a href="https://twitter.com/ifit?lang=en">
          <img src="./images/social-media-images/twitter.png" alt="iFit-Twitter"/>
        </a>
        <a href="https://www.instagram.com/ifit/">
          <img src="./images/social-media-images/instagram.png" alt="iFit-Instagram"/>
        </a>
      </div>
      <select className="language-chooser" name="language">
        <option value="volvo">English</option>
        <option value="spanish">Español</option>
      </select>
      <div className="legal-container">
        <p className="legal">&copy; iFit.com. All rights reserved.</p>
        <button className="site-link">Privacy Policy</button>
        <button className="site-link">Terms of Use</button>
      </div>
    </div>
  );

}

export default Footer;
