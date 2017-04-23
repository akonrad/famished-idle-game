import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './App';
import './index.css';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
      hunger: [
        {id: 1, type: 'body', status: 0},
        {id: 2, type: 'mind', status: 0},
        {id: 3, type: 'soul', status: 0},
    ],
    filter: 'all'
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
