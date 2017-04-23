import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function incrementBody(state) {
    const newValue = state.get('hunger').get(0).get('status') + 1;
    const updateValue = state.get('hunger').get(0).set('status', newValue);
    return state.setIn(['hunger', 0], updateValue)
}

function incrementMind(state) {
    const newValue = state.get('hunger').get(1).get('status') + 1;
    const updateValue = state.get('hunger').get(1).set('status', newValue);
    return state.setIn(['hunger', 1], updateValue)
}

function incrementSoul(state) {
    const newValue = state.get('hunger').get(2).get('status') + 1;
    const updateValue = state.get('hunger').get(2).set('status', newValue);
    return state.setIn(['hunger', 2], updateValue)
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