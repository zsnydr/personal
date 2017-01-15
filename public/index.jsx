import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Main from './main/components/main';
import Home from './home/components/home';
import Blog from './blog/containers/blog';
import Article from './article/containers/article';
import Portfolio from './portfolio/components/portfolio';

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
          <Route path="blog" component={Blog} />
          <Route path="blog/:title" component={Article} />
          <Route path="portfolio" component={Portfolio} />
          <Route path="*" component={Home} />
        </Route>
      </Router>
    </Provider>
  );
};

// <Route path="article" component={Article} />

ReactDOM.render(
  <App />,
  document.querySelector('.app')
);
