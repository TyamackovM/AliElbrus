import { GET_USER, LOGOUT_USER, UPDATE_EMAIL } from "./actionTypes";

const initialState = {}

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return {}
    }
    case UPDATE_EMAIL: {
      console.log(state)
      return action.payload;
    }
    default:
      return state;
  }
}
