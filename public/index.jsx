import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from './main/components/main';
import Home from './home/components/home';
import About from './about';
import Blog from './blog/components/blog';
import Portfolio from './portfolio/components/portfolio';
import Resume from './resume/components/resume';


const App = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Router path="/about" component={About} />
        <Router path="/blog" component={Blog} />
        <Router path="/portfolio" component={Portfolio} />
        <Router path="/resume" component={Resume} />
      </Route>
    </Router>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('.main')
);
