import React, { PropTypes } from 'react';

import Navigation from './nav';
// import Footer from './footer';


const Main = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Main;

Main.propTypes = {
  children: PropTypes.object
};
