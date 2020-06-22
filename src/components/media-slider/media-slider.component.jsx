import React from 'react';
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2370 },
    items: 5
  },
  largeDesktop: {
    breakpoint: { max: 2369, min: 1860 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1859, min: 1370 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1369, min: 920 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 919, min: 0 },
    items: 1
  }
};

const MediaSlider = () => (
  <div className="media-card-container">
    <Carousel 
      responsive={responsive}
      swipeable={true}
    >
      <div className="media-card">
        <img src="./images/gear-junkie-logo.svg" alt="Gear Junkie logo"/>
        <p className="media-card-text">"You focus on putting in the work, and the technology handles the rest."</p>
      </div>
      <div className="media-card">
        {/* eslint-disable-next-line */}
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
      <div className="media-card">
        {/* eslint-disable-next-line */}
        <img src="./images/mashable-logo.svg" alt="Gear Junkie logo" alt="Mashable logo"/>
        <p className="media-card-text">"Breathes new life into a tired, old running routine."</p>
      </div>
    </Carousel>
  </div>
);

export default MediaSlider;