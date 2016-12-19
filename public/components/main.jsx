import React from 'react';

import Navigation from './nav';
import Footer from './footer';


const Main = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;
