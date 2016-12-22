import React, { PropTypes } from 'react';

import Navigation from './nav';
// import Footer from './footer';


const Main = (props) => {
  return (
    <div className="main">
      <Navigation />
      {props.children}
    </div>
  );
};

export default Main;

Main.propTypes = {
  children: PropTypes.object
};
