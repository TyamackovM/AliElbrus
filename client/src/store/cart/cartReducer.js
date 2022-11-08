import { ADD_ITEM, DELETE_ITEM, INIT_ITEM } from "./actionTypes";

const initialState = 0;

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return state + action.payload;
    }

    case INIT_ITEM: {
      return action.payload;
    }
    case DELETE_ITEM: {
      return action.payload;
    }
   
    default:
      return state;
  }
}
