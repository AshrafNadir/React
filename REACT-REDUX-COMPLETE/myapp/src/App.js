
import React, { Component } from "react";
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
    state = {
        ninjas: [
            { name: 'Nadir', age: 19, belt: 'Black', id: 1 },
            { name: 'Adil', age: 27, belt: 'Yellow', id: 2 },
            { name: 'Shakhawat', age: 28, belt: 'White', id: 3 }
        ]
    }
    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
    }
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        })
        this.setState({
            ninjas: ninjas
        })
    }
    render() {
        return (
            <div className="App" >
                <h1> My first React App </h1>
                <p> Welcome :)</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
                <AddNinja AddNinja={this.AddNinja} />
            </div>
        );
    }
}

export default App;