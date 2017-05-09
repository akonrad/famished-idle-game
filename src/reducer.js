import {Map, fromJS} from 'immutable';
import {body, mind, soul} from './playlog/text'

function setState(state, newState) {
    return state.merge(newState);
}

function incrementHunger(state, kind, amount) {
    var newState = _updateLogs(state, mapActionToLog(kind, amount));
    const index = newState.get('hunger').findIndex(i => i.get('kind') === kind)
    const newValue = newState.get('hunger').get(index).get('status') + amount;
    const updateValue = newState.get('hunger').get(index).set('status', newValue);
    return newState.setIn(['hunger', index], updateValue)
}

function activateButton(state, name) {
    const index = state.get('buttons').findIndex(i => i.get('name') === name)
    const updateValue = state.get('buttons').get(index).set('active', true);
    return state.setIn(['buttons', index], updateValue)
}

function disableButton(state, name) {
    const index = state.get('buttons').findIndex(i => i.get('name') === name)
    const updateValue = state.get('buttons').get(index).set('active', false);
    return state.setIn(['buttons', index], updateValue)
}

function addDisabledButton(state, name) {
    const index = state.get('buttons').findIndex(i => i.get('name') === name)
    if (index !== -1) {
        return state
    }
    var newState = _updateLogs(state, "You sense potential, just out of reach.");
    newState = newState.update('hunger', hunger => hunger.push(fromJS({kind: name, status: 0})));
    return newState.update('buttons', buttons => buttons.push(fromJS({name: name, active: false})));
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
        case 'ACTIVATE_BUTTON':
            return activateButton(state, action.name);
        case 'DISABLE_BUTTON':
            return disableButton(state, action.name);
        case 'ADD_DISABLED_BUTTON':
            return addDisabledButton(state, action.name);
        default:
            return state;
    }
}

function mapActionToLog(action, amount) {
    switch(action) {
        case 'body':
            return body[amount-1]
        case 'mind':
            return mind[amount-1]
        case 'soul':
            return soul[amount-1]
        case 'enlightenment':
            return "At peace, you want for nothing."
        default:
            return '';
    }
}