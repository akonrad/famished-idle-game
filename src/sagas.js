import {put, select, takeLatest} from 'redux-saga/effects'

// worker Saga: will be fired on INCREMENT_HUNGER actions
function* activateButtons(action) {
  const state = yield select();
  const body = state.get('hunger').get(0).get('status')
  if (body > 0) {
      yield put({type: "ACTIVATE_BUTTON", name: 'mind'});
  }
}

// Starts activateButtons on each dispatched INCREMENT_HUNGER action.
function* mySaga() {
  yield takeLatest("INCREMENT_HUNGER", activateButtons);
}

export default mySaga;