import { ADD_ITEM, DELETE_ITEM, INIT_ITEM } from "./actionTypes"

export function addItem(num) {
  return {type: ADD_ITEM, payload: num}
}

export function deleteItem(num) {
  return {type: DELETE_ITEM, payload: num}
}

export function initItem(num) {
  return {type: INIT_ITEM, payload: num}
}