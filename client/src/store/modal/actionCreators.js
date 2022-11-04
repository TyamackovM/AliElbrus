import { CHANGE_BOOLEAN_STATE } from './actionTypes'

export function changeBooleanStateAC(state) {
  return { type: CHANGE_BOOLEAN_STATE, payload: state }
}
