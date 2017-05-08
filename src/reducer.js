import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function incrementHunger(state, kind, amount) {
    var newState = _updateLogs(state, "incremented " + kind);
    const index = newState.get('hunger').findIndex(i => i.get('kind') === kind)
    const newValue = newState.get('hunger').get(index).get('status') + amount;
    const updateValue = newState.get('hunger').get(index).set('status', newValue);
    return newState.setIn(['hunger', index], updateValue)
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
        case 'INCREMENT_HUNGER':
            return incrementHunger(state, action.kind, action.amount);
        default:
            return state;
    }
}