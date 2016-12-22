import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blogPosts from './reducer_blogPosts';
import activePost from './reducer_activePost';

const rootReducer = combineReducers({
  routing: routerReducer,
  blogPosts,
  activePost
});

export default rootReducer;
