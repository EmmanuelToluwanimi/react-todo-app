import React from 'react';
import iconcross from '../assets/images/icon-cross.svg';

export default function Todoholder({ todo, delTodo, toggleCompleted }) {
  function delTodoHandler() {
    delTodo(todo.id);
  };

  function toggleCompletedHandler() {
    toggleCompleted(todo.id)
  }

  return (
    <div className="card-content">
      <input type="checkbox" name={todo} id={todo.id} checked={todo.completed} onChange={toggleCompletedHandler} className="cb"></input>
      <div className="togo">{todo.name}</div>
      <button className="showBtn" onClick={delTodoHandler}>
        <img src={iconcross} alt="icon-cross"></img>
      </button>
    </div>
  )
}
