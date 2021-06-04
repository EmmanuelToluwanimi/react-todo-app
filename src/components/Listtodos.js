import React from 'react';
import Todoholder from './Todoholder'

export default function Listtodos({ Todos, altTodo, delTodo, toggleCompleted, clearCompleted, filterstat, setFilterstat }) {
    // function filterHandler(stat) {
    //     setFilterstat(stat);
    // }

    return (
        <div className="card-todo">

            <div className="card-bag">
                {
                    altTodo.map(todo => {
                        return <Todoholder todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />
                    })
                }
            </div>

            <div className="todo-footer">
                <div>{Todos.filter(todo => !todo.completed).length} items left</div>

                <div className="desktop-filt">
                    <button style={filterstat === "all" ? {color:"blue"}: {color:"initial"}} onClick={() => setFilterstat("all")}>All</button>
                    <button style={filterstat === "active" ? {color:"blue"}: {color:"initial"}} onClick={() => setFilterstat("active")}>Active</button>
                    <button style={filterstat === "completed" ? {color:"blue"}: {color:"initial"}} onClick={() => setFilterstat("completed")}>Completed</button>
                </div>

                <button onClick={clearCompleted}>Clear Completed</button>
            </div>

        </div>
    )
}
