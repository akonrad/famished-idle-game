import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './App';
import {MainContainer} from './components/Main';
import './index.css';

// enable usage of Redux DevTools
const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
      hunger: [
        {id: 1, type: 'body', status: 5},
        {id: 2, type: 'mind', status: 0},
        {id: 3, type: 'soul', status: 0},
    ],
    log: ['You are famished.']
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);
