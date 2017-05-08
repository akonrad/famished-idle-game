export function incrementHunger(kind, amount) {
  return {
    type: 'INCREMENT_HUNGER',
    kind,
    amount
  }
}