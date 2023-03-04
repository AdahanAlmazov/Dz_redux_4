import Todo from "../../components/Todo";
import { types } from "../types/types";

const initialState = {
  todoValue: "",
  todos: [],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_INPUT:
      return { ...state, inputValue: action.payload };

    case types.ADD_TODO:
      let id = 1;
      let todo = Todo(state.inputValue);
      if (state.todos.length > 0) {
        id = +state.todos[state.todos.length - 1].id + 1;
        todo += Todo(state.todos[state.todos.length - 1].todo);
      }
      return {
        ...state,
        todos: [...state.todos, { id, todo }],
        inputValue: "",
      };

    // case types.CHANGE_STATUS:
    //   const newArr = state.todos.map((todo) => {
    //     if (+todo.id === +action.payload.id) {
    //       return {
    //         ...todo,
    //         status: action.payload.status,
    //       };
    //     } else return todo;
    //   });
    //   return { ...state, todos: newArr };

    case types.DELETE_ALL:
      return { ...state, todos: [], todoValue: "" };
    default:
      return state;
  }
}
