import React from 'react';

import './desktop-library.styles.scss';

const DesktopLibrary = () => (
  <div className="desktop-library-container">
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_1.png" alt="Lake Inniscarra, Ireland-Pyramid"/>
      <div className="title-and-avatar">
        <span className="title">Lake Inniscarra, Ireland&mdash;Pyramid</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_01.png" alt="Sanita Puspure"/>
      </div>
      <div className="time-and-distance">
        <img className="timer-image" src="./images/desktop-library-Images/icn_timer_line.png" alt="Time"/>
        <span className="time">30:53</span>
        <img className="distance-image" src="./images/desktop-library-Images/icn_distance_line.png" alt="Distance"/>
        <span className="distance">6,248 M</span>
      </div>
      <button className="view-details-btn">View Details</button>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_2.png" alt="Performance Series"/>
      <div className="playlist">
        <div className="number">9</div>
        <div className="workout-text">Workouts</div>
        <img src="./images/desktop-library-Images/icn_playlist.svg" alt="Playlist Icon"/>
      </div>
      <div className="title-and-avatar">
        <span className="title">Performance Series</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_02.png" alt="Susan Francia"/>
      </div>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_3.png" alt="Slow Pulls and Fast Intervals"/>
      <div className="title-and-avatar">
        <span className="title">Slow Pulls and Fast Intervals</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_03.png" alt="Alex Silver-Fagan"/>
      </div>
      <div className="time-and-distance">
        <img className="timer-image" src="./images/desktop-library-Images/icn_timer_line.png" alt="Time"/>
        <span className="time">44:13</span>
        <img className="distance-image" src="./images/desktop-library-Images/icn_distance_line.png" alt="Distance"/>
        <span className="distance">9,948 M</span>
      </div>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_4.png" alt="20 Minutes to Toned"/>
      <div className="playlist">
        <div className="number">12</div>
        <div className="workout-text">Workouts</div>
        <img src="./images/desktop-library-Images/icn_playlist.svg" alt="Playlist Icon"/>
      </div>
      <div className="title-and-avatar">
        <span className="title">20 Minutes to Toned</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_04.png" alt="Alex Gregory"/>
      </div>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_5.png" alt="Charles Race, Boston, Massachusetts"/>
      <div className="title-and-avatar">
        <span className="title">Charles Race, Boston, Massachusetts</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_05.png" alt="Mary Hero"/>
      </div>
      <div className="time-and-distance">
        <img className="timer-image" src="./images/desktop-library-Images/icn_timer_line.png" alt="Time"/>
        <span className="time">36:22</span>
        <img className="distance-image" src="./images/desktop-library-Images/icn_distance_line.png" alt="Distance"/>
        <span className="distance">6,648 M</span>
      </div>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_6.png" alt="Full-Body HIIT Series"/>
      <div className="playlist">
        <div className="number">12</div>
        <div className="workout-text">Workouts</div>
        <img src="./images/desktop-library-Images/icn_playlist.svg" alt="Playlist Icon"/>
      </div>
      <div className="title-and-avatar">
        <span className="title">Full-Body HIIT Series</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_06.png" alt="Hannah Eden"/>
      </div>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_7.png" alt="Kafue River, Zambia-Power Stroke Pyramid<"/>
      <div className="title-and-avatar">
        <span className="title">Kafue River, Zambia&mdash;Power Stroke Pyramid</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_07.png" alt="Nanchengwa Desmond"/>
      </div>
      <div className="time-and-distance">
        <img className="timer-image" src="./images/desktop-library-Images/icn_timer_line.png" alt="Time"/>
        <span className="time">22:22</span>
        <img className="distance-image" src="./images/desktop-library-Images/icn_distance_line.png" alt="Distance"/>
        <span className="distance">4,660 M</span>
      </div>
    </div>
    <div className="desktop-library-item">
      <img className="title-image" src="./images/desktop-library-Images/img_marketing_web_card_8.png" alt="Shred and Burn Series"/>
      <div className="playlist">
        <div className="number">16</div>
        <div className="workout-text">Workouts</div>
        <img src="./images/desktop-library-Images/icn_playlist.svg" alt="Playlist Icon"/>
      </div>
      <div className="title-and-avatar">
        <span className="title">Shred &amp; Burn Series</span>
        <img className="avatar-image" src="./images/desktop-library-Images/Avatar_08.png" alt="Gideon Akande"/>
      </div>
    </div>

  </div>

);

export default DesktopLibrary;