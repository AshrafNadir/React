import React from 'react';
import ReactDOM from 'react-dom';

const TodoTitle = "Todo App";
const Desc = "loren ipsum ...";
const date = "21/2020";

ReactDOM.render(
    <div>
        "Welcome !!!"
         <h1>{TodoTitle}</h1>
        <p>{Desc}{date}</p>
    </div>,
    document.getElementById('root')
)