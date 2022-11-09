import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import modalReducer from './modal/modalReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
  cart: cartReducer,
});
