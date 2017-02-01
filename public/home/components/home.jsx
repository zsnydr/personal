import React, { PropTypes } from 'react';
// import { browserHistory } from 'react-router';
// import { polyfill } from 'smoothscroll-polyfill';

import About from './about';


// polyfill();

const Home = (props) => {
  // if (props.location.pathname !== '/') {
  //   browserHistory.push('');
  // }

  // const scrollDown = () => {
  //   document.querySelector('.home-about-me').scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // };
  //
  // const scrollUp = () => {
  //   document.querySelector('.nav').scrollIntoView({
  //     behavior: 'smooth'
  //   });
  // };

  return (
    <div className="home">
      <div className="home-big-image">
        <div className="home-content">
          <h1>Zack Snyder</h1>
          <hr />
          <h3>Software Engineer</h3>
        </div>
      </div>
      <div className="home-about-me">
        <About />
      </div>
    </div>
  );
};

export default Home;

Home.propTypes = {
  location: PropTypes.object
};
