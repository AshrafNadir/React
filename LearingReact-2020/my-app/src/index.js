import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//const TodoTitle = "Todo App";
const Desc = "loren ipsum ...";
const date = "21/2020";

// const headingStyle = {
//     backgroundColor : "purple",
//     color: "white",
//     textAlign : "center",
//     padding :"15px"
// }

ReactDOM.render(
    <div>
        <h1 className="headingStyle">Todo App</h1>
        <p>{Desc}{date}</p>
    </div>,
    document.getElementById('root')
)