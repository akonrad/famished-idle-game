import {put, select, takeLatest} from 'redux-saga/effects'

// worker Saga: will be fired on INCREMENT_HUNGER actions
// TODO: only fire when necessary (i.e. do not fire ACTIVATE_BUTTON if button is activated)
function* activateButtons(action) {
  const state = yield select();
  const body = state.get('hunger').get(0).get('status')
  const mind = state.get('hunger').get(1).get('status')
  const soul = state.get('hunger').get(2).get('status')
  if (body > 0) {
      yield put({type: "ACTIVATE_BUTTON", name: 'mind'});
  }
  if (body > 50 && mind > 30) {
      yield put({type: "ACTIVATE_BUTTON", name: 'soul'});
  }
  if (body > 100 && mind > 50 && soul > 50) {
      yield put({type: "ADD_DISABLED_BUTTON", name: 'enlightenment'});
  }
  if (body > 100 && mind > 50 && soul > 75) {
      yield put({type: "ACTIVATE_BUTTON", name: 'enlightenment'});
  }
}

// Starts activateButtons on each dispatched INCREMENT_HUNGER action.
function* mySaga() {
  yield takeLatest("INCREMENT_HUNGER", activateButtons);
}

export default mySaga;