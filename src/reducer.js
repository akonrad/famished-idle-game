import {Map} from 'immutable';
import {body} from './playlog/body'
import {mind} from './playlog/mind'
import {soul} from './playlog/soul'

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
        default:
            return '';
    }
}