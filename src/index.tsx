import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import App from './App';
import configureStore, { history } from './configureStore';

const store = configureStore();
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <App history={history} />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });
}