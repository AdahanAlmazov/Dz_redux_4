import { types } from "../types/types";

export function changeInputAction(inputValue) {
  return {
    type: types.CHANGE_INPUT,
    payload: inputValue,
  };
}

export function addTodoAction(todo) {
  return {
    type: types.ADD_TODO,
    payload: todo,
  };
}

export function deleteAllAction() {
  return {
    type: types.DELETE_ALL,
  };
}
