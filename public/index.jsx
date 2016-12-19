import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from './components/main';
import Home from './components/home';
import About from './components/about';


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
