import React, { useState, useRef, useEffect } from 'react';
import Todoinput from './components/Todoinput';
import Listtodos from './components/Listtodos';
import iconsun from './assets/images/icon-sun.svg';
import iconmoon from './assets/images/icon-moon.svg'


function App() {
  const isDark = false;

  let tog = 'sbody';
  if (isDark) {
    tog += ' dark-theme';
  }

  return (
    <div className={tog}>

      <div className="main">
        <div className="heda">
          <h1>Todo</h1>
          <button>
            <img src={isDark ? iconsun : iconmoon} alt="icon-sun"></img>
          </button>
        </div>

        <Todoinput />

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
