import React from 'react';
import iconcross from '../assets/images/icon-cross.svg';

export default function Todoholder() {
    return (
        <div className="card-content">
          <input type="checkbox" name="" id="" className="cb"></input>
          <div className="togo">Helooo</div>
          <button>
            <img src={iconcross} alt="icon-cross"></img>
          </button>
        </div>
    )
}
