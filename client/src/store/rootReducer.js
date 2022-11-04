import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import modalReducer from './modal/modalReducer';

export default combineReducers({
  user: userReducer,
  modal: modalReducer
});
