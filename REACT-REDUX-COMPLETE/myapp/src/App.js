import React, { Component } from "react";
import Ninjas from "./Ninjas";

function App() {
    return ( <
        div className = "App" >
        <
        h1 > My first React App < /h1> <p> Welcome: ) </p >
        <
        Ninjas name = "Ryu"
        age = "25"
        belt = "black" / >
        <
        Ninjas name = "Nadir"
        age = "25"
        belt = "white" / >
        <
        /div>
    );
}

export default App;