import { render } from "@testing-library/react";
import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
    state = {
        ninjas: [
            { name: 'Nadir', age: 19, belt: 'Black', id: 1 },
            { name: 'Adil', age: 27, belt: 'Yellow', id: 2 },
            { name: 'Shakhawat', age: 28, belt: 'White', id: 3 }
        ]
    }
    render() {
        return (
            <div className="App" >
                <h1> My first React App </h1>
                <p> Welcome :)</p>
                <Ninjas ninjas={this.state.ninjas} />
            </div>
        );
    }
}

export default App;