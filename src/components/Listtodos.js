import React from 'react';
import Todoholder from './Todoholder'

export default function Listtodos() {
    return (
        <div className="card-todo">

            <div className="card-bag">
                <Todoholder/>
                {/* <div className="card-content">
                    <input type="checkbox" name="" id="" className="cb" checked>
                    <div className ="togo">Helooo</div>
                    <button>
                    <img src="./images/icon-cross.svg" alt="icon-cross">
                    </button>
                </div> */}
                {/* <div className="card-content">
                    <input type="checkbox" name="" id="" className="cb">
                    <div className ="togo">Helooo</div>
                    <button>
                    <img src="./images/icon-cross.svg" alt="icon-cross">
                    </button>
                </div> */}
            </div>

            <div className="todo-footer">
                <div>0 items left</div>

                <div className="desktop-filt">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>

                <button>Clear Completed</button>
            </div>

        </div>
    )
}
