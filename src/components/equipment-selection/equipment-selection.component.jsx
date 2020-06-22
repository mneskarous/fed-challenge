import React from 'react';

import './equipment-selection.styles.scss'

function EquipmentSelection() {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="equipment-selection-container">
    <p className="equipment-selection-title">Interested in our exciting iFit-enabled equipment?</p>
    <div className="equipment-cards">
      <div 
        className={`equipment-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        <img className="equipment-image" src="./images/treadmills.png" alt="Treadmills"/>
        <div className="equipment-title">Treadmills</div>
      </div>
      <div 
        className={`equipment-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
      <img className="equipment-image" src="./images/bikes.png" alt="Bikes"/>
        <div className="equipment-title">Bikes</div>
      </div>
      <div 
        className={`equipment-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
      <img className="equipment-image" src="./images/ellipticals.png" alt="Ellipticals"/>
        <div className="equipment-title">Ellipticals</div>
      </div>
      <div 
        className={`equipment-card fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        <img className="equipment-image" src="./images/strength.png" alt="Strength Training Equipment"/>
        <div className="equipment-title">Strength</div>
      </div>
    </div>
  </div>
  )

}

export default EquipmentSelection;


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}