import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

const Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

const Nav = () => {
  return (
    <div>NAV HERE</div>
  );
};

const Footer = () => {
  return (
    <div>FOOTER HERE</div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <div onClick={() => { browserHistory.push('/about'); }}>TO ABOUT</div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <div>ABOUT ME</div>
      <div onClick={() => { browserHistory.push('/'); }}>BACK HOME</div>
    </div>
  );
};

const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Router path="/about" component={About} />
      </Route>
    </Router>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('.main')
);
