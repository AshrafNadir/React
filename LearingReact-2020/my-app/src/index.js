import React from 'react';
import ReactDOM from 'react-dom';

const TodoTitle = "Todo App";
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
        <div className="card">
            <h3 className="card-title">{TodoTitle}</h3>
            <p className="card-desc">{Desc}</p>
            <p className="card-footer">{date}</p>

        </div>


    </div>,
    document.getElementById('root')
)