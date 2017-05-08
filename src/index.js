import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from 'immutable';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import {MainContainer} from './components/Main';
import './index.css';
import mySaga from './sagas'

// enable usage of redux devtools and redux-saga
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware))
);

// dispatch initial state
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

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);
