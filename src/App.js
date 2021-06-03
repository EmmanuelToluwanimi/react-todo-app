import React, { useState, useRef, useEffect } from 'react';
import Todoinput from './components/Todoinput';
import Listtodos from './components/Listtodos';
import iconsun from './assets/images/icon-sun.svg';
import iconmoon from './assets/images/icon-moon.svg'


function App() {
  const [isDark, setIsDark] = useState(false);
  const [Todos, setTodos] = useState([]);
  // const TodoHandler = useRef();

  function sendTodo(sentTodo) {
    const newTodo = [...Todos, sentTodo]
    setTodos(newTodo);
    console.log(newTodo);
  }

  function getValue() {
    
  }

  useEffect(() => {
    const darko = JSON.parse(localStorage.getItem("darkthemer"));
    if (darko) {
      setIsDark(darko)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkthemer', JSON.stringify(isDark));
  }, [isDark]);

  let tog = 'sbody';
  if (isDark) {
    tog += ' dark-theme';
  }

  function toggleDarktheme() {
    setIsDark(!isDark);
  }

  return (
    <div className={tog}>

      <div className="main">
        <div className="heda">
          <h1>Todo</h1>
          <button onClick={toggleDarktheme}>
            <img src={isDark ? iconsun : iconmoon} alt="icon-sun"></img>
          </button>
        </div>

        <Todoinput sendTodo={sendTodo}/>

        <Listtodos />

        <div className="dand">Drag and drop to reorder list</div>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Amusan T. Emmanuel</a>.
        </div>

      </div>
    </div>
  );
}

export default App;
