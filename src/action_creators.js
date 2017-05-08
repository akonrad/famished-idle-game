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