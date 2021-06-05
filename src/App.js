import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/dist/v4';
import Todoinput from './components/Todoinput';
import Listtodos from './components/Listtodos';
import iconsun from './assets/images/icon-sun.svg';
import iconmoon from './assets/images/icon-moon.svg'


function App() {
  const [isDark, setIsDark] = useState(false);
  const [Todos, setTodos] = useState([]);
  const [altTodo, setAltTodo] = useState([...Todos]);
  const [filterstat, setFilterstat] = useState("all");

  useEffect(() => {

    const newTodo = [...Todos];

    switch (filterstat) {
      case "active":
        return setAltTodo(newTodo.filter(todo => !todo.completed));

      case "completed":
        return setAltTodo(newTodo.filter(todo => todo.completed));

      default: return setAltTodo(newTodo);
    }

  }, [Todos, filterstat]);

  function sendTodo(sentTodo) {
    const newTodo = [...Todos, {
      id: uuidv4(),
      name: sentTodo,
      completed: false
    }]
    setTodos(newTodo);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Todo-app"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todo-app", JSON.stringify(Todos))
  }, [Todos]);

  useEffect(() => {
    const darko = JSON.parse(localStorage.getItem("darkthemer"));
    if (darko) {
      setIsDark(darko)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkthemer', JSON.stringify(isDark));
  }, [isDark]);

  function delTodo(id) {
    const newTodo = [...Todos];
    const todo = newTodo.findIndex(todo => todo.id === id);
    newTodo.splice(todo, 1)
    setTodos(newTodo);
  };

  function toggleCompleted(id) {
    const newTodo = [...Todos];
    const todo = newTodo.find(todo => todo.id === id);
    // console.log(todo);
    todo.completed = !todo.completed;
    setTodos(newTodo);
  };

  function clearCompleted() {
    const newTodo = Todos.filter(todo => !todo.completed);
    setTodos(newTodo);
    setFilterstat("all");
  };

  function renderAllTodos() {
    setFilterstat("all");
    console.log(altTodo);
  };

  function xa() {
    setFilterstat("active");
    console.log(altTodo);
  }

  function xc() {
    setFilterstat("completed");
    console.log(altTodo);
  }

  let tog = 'sbody';
  if (isDark) {
    tog += ' dark-theme';
  }

  function toggleDarktheme() {
    setIsDark(!isDark);
  }

  const frontendmentorlink = "https://www.frontendmentor.io?ref=challenge";

  return (
    <div className={tog}>

      <div className="main">
        <div className="heda">
          <h1>Todo</h1>
          <button onClick={toggleDarktheme}>
            <img src={isDark ? iconsun : iconmoon} alt="icon-sun"></img>
          </button>
        </div>

        <Todoinput sendTodo={sendTodo} />

        <Listtodos
          Todos={Todos}
          altTodo={altTodo}
          delTodo={delTodo}
          toggleCompleted={toggleCompleted}
          clearCompleted={clearCompleted}
          renderAllTodos={renderAllTodos}
          filterstat={filterstat}
          setFilterstat={setFilterstat}
        />

        <div className="desktop-filta">
          <button style={filterstat === "all" ? {color:"blue"}: {color:"initial"}} onClick={renderAllTodos}>All</button>
          <button style={filterstat === "active" ? {color:"blue"}: {color:"initial"}} onClick={xa}>Active</button>
          <button style={filterstat === "completed" ? {color:"blue"}: {color:"initial"}} onClick={xc}>Completed</button>
        </div>

        <div className="dand">Drag and drop to reorder list</div>

        <div className="attribution">
          Challenge by <a href={frontendmentorlink} rel="noreferrer" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/EmmanuelToluwanimi">Amusan T. Emmanuel</a>.
        </div>

      </div>
    </div>
  );
}

export default App;
