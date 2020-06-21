import React from 'react';

import './media-slider.styles.scss';

const MediaSlider = () => (
  <div className="media-card-container">
    <div className="media-card">
      <img src="./images/gear-junkie-logo.svg" alt="Gear Junkie logo"/>
      <p className="media-card-text">"You focus on putting in the work, and the technology handles the rest."</p>
    </div>
    <div className="media-card">
      {/* eslint-disable-next-line */}
      <img src="./images/wired-logo.svg" alt="Gear Junkie logo" alt="Wired logo"/>
      <p className="media-card-text">"Literally transports you from home to wherever you choose to run."</p>
    </div>
    <div className="media-card">
      {/* eslint-disable-next-line */}
      <img src="./images/mashable-logo.svg" alt="Gear Junkie logo" alt="Mashable logo"/>
      <p className="media-card-text">"Breathes new life into a tired, old running routine."</p>
    </div>
    <div className="media-slider-controller">
      <div className="left arrow-container">
        <img src="./images/chevron-left.png" alt="Left arrow"/>
      </div>
      <div className="right arrow-container">
        <img src="./images/chevron-right.png" alt="Right arrow"/>
      </div>
    </div>
  </div>
);

export default MediaSlider;