export function incrementHunger(kind, amount) {
  return {
    type: 'INCREMENT_HUNGER',
    kind,
    amount
  }
}

export function activateButton(name) {
  return {
    type: 'ACTIVATE_BUTTON',
    name
  }
}

export function disableButton(name) {
  return {
    type: 'DISABLE_BUTTON',
    name
  }
}

export function addDisabledButton(name) {
  return {
    type: 'ADD_DISABLED_BUTTON',
    name
  }
}