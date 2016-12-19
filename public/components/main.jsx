import React from 'react';

import Nav from './nav';
import Footer from './footer';


const Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;
