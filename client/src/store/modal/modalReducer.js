import { CHANGE_BOOLEAN_STATE } from './actionTypes';

const initialState = false;

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BOOLEAN_STATE: {
      return action.payload;
    }
    default:
      return state;
  }
}
