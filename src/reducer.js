import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function incrementBody(state) {
    var newState = _updateLogs(state, "incremented body");
    const newValue = newState.get('hunger').get(0).get('status') + 1;
    const updateValue = newState.get('hunger').get(0).set('status', newValue);
    return newState.setIn(['hunger', 0], updateValue)
}

function incrementMind(state) {
    var newState = _updateLogs(state, "incremented mind");
    const newValue = newState.get('hunger').get(1).get('status') + 1;
    const updateValue = newState.get('hunger').get(1).set('status', newValue);
    return newState.setIn(['hunger', 1], updateValue)
}

function incrementSoul(state) {
    var newState = _updateLogs(state, "incremented soul");
    const newValue = newState.get('hunger').get(2).get('status') + 1;
    const updateValue = newState.get('hunger').get(2).set('status', newValue);
    return newState.setIn(['hunger', 2], updateValue)
}

// helper function
// todo: limit logs stored in state to latest 40
function _updateLogs(state, log) {
    return state.update('log', (current) => {return current.push(log)})
}

export default function (state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'INCREMENT_BODY':
            return incrementBody(state);
        case 'INCREMENT_MIND':
            return incrementMind(state);
        case 'INCREMENT_SOUL':
            return incrementSoul(state);
        default:
            return state;
    }
}