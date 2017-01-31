import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';


ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('.app')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.querySelector('.app')
    );
  });
}
