import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from './main/components/main';
import Home from './home/components/home';
import About from './about';
import Blog from './blog/components/blog';
import Article from './article/components/article';
import Portfolio from './portfolio/components/portfolio';
import Resume from './resume/components/resume';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Router path="/about" component={About} />
          <Router path="/blog" component={Blog} />
          <Router path="/article" component={Article} />
          <Router path="/portfolio" component={Portfolio} />
          <Router path="/resume" component={Resume} />
        </Route>
      </Router>
    </Provider>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('.main')
);
