import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
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
      hunger: fromJS([
        {kind: 'body', status: -100},
        {kind: 'mind', status: 0},
        {kind: 'soul', status: 0},
      ]),
      buttons: fromJS([
        {name: 'body', active: true},
        {name: 'mind', active: false},
        {name: 'soul', active: false}
      ]),
      log: fromJS(['You are famished.'])
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);
