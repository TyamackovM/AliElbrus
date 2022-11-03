import { GET_USER, LOGOUT_USER, UPDATE_EMAIL } from "./actionTypes"

export function getUser(objectUser) {
  return {type: GET_USER, payload: objectUser}
}

export function logoutUser() {
  return {type: LOGOUT_USER}
}

export function updateEmail(email) {
  return {type: UPDATE_EMAIL, payload: email}
}
