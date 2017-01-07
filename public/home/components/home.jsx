import React from 'react';
import { polyfill } from 'smoothscroll-polyfill';

polyfill();

const Home = () => {
  const scrollDown = () => {
    document.querySelector('.home-about-me').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollUp = () => {
    document.querySelector('.home-border').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      <div className="home-border">
        <div className="home-content">
          <h1>Zack Snyder</h1>
          <hr />
          <h3>Software Engineer</h3>
        </div>
        <div className="home-arrow-down" onClick={scrollDown}></div>
      </div>
      <div className="home-about-me">
        <div className="home-arrow-up" onClick={scrollUp}></div>
        ABOUT ME WITH PIC
      </div>
    </div>
  );
};

export default Home;
