import React, { PropTypes } from 'react';

import Navigation from './nav';
// import Footer from './footer';


const Main = (props) => {
  return (
    <div className="main">
      <Navigation />
      <div className="col-md-1 main-grey" />
      <div className="col-md-10 main-white">
        {props.children}
      </div>
      <div className="col-md-1 main-grey" />
    </div>
  );
};

export default Main;

Main.propTypes = {
  children: PropTypes.object
};
