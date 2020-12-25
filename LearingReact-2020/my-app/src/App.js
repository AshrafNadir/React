import React from 'react';
import Card from './Components/Card';

function App() {
    return (
        <div>
            <h1 className="headingStyle">Todo App</h1>
            <Card titleText="Call Hero" desc="this is desc1 " />
            <Card titleText="Call Heroine" desc="this is desc2 " />
            <Card titleText="Call Villain" desc="this is desc3 " />
        </div>

    )
}
export default App
