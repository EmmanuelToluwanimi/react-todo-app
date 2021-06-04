import React, { useRef } from 'react';

export default function Todoinput({sendTodo}) {
    const TodoHandler = useRef();

    function enterKey(e) {
        if (e.keyCode === 13) {
            // e.preventDefault();
            TodoClick();
        }
    }

    function TodoClick() {
        const name = TodoHandler.current.value;
        if (name === '') {
            return;
        }
        sendTodo(name);
        TodoHandler.current.value = null;
    }

    return (
        <div className="todo-input">
            <span className="cicu" onClick={TodoClick}></span>
            <input type="text" ref={TodoHandler} onKeyUp={enterKey} placeholder="Create new todo ..."></input>
        </div>
    )
}
