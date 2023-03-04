import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInputAction,
  addTodoAction,
  deleteAllAction,
} from "../redux/action/action";
import Todo from "../components/Todo";

function TodosPage() {
  const dispatch = useDispatch();
  const { inputValue, todos } = useSelector((state) => state);

  const changeInput = (e) => {
    dispatch(changeInputAction(e.target.value));
  };
  const addTodo = () => {
    if (inputValue) dispatch(addTodoAction(inputValue));
  };
  const deleteAll = () => {
    dispatch(deleteAllAction());
  };
  return (
    <>
      <input
        type="number"
        placeholder="123"
        onChange={changeInput}
        value={inputValue}
      />
      <button onClick={addTodo}>add number</button>
      <button className="clear" onClick={deleteAll}>
        clear
      </button>
      {todos.length > 0 ? (
        todos.map((num) => <Todo key={num.id} todoInfo={num} />)
      ) : (
        <p>Пусто</p>
      )}
    </>
  );
}

export default TodosPage;
