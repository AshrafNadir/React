import { render } from "@testing-library/react";
import React, { Component } from "react";
import Ninjas from "./Ninjas";

function App() {
    state = {
        ninjas: [
            { Name: "Nadir", Age: 26, Belt: "Black", ID: 1 },
            { Name: "Adil", Age: 27, Belt: "Yellow", ID: 2 },
            { Name: "Shakhawat", Age: 28, Belt: "White", ID: 3 },
        ],
    };
    render(); {
        return ( <
                div className = "App" >
                <
                h1 > My first React App < /h1> <
                p > Welcome: ) < /p> <
            Ninjas ninjas = { this.state.ninjas }
        /> <
        /div>
    );
}
}

export default App;