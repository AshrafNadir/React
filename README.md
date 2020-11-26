# REACT BASICS

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Ashraf Nadir](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# HOW IT WORKS

  - DOM-Document Object Model
  - Every components produce **Virtual DOM** which renders in website.
  - Components looks like *HTML* , actually *JSX*.
# SETUP WITH 'CDN'
- Head over to [reactjs.org](https://https://reactjs.org/docs/cdn-links.html)

- *Core react library*
~~~
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
~~~
- *React DOM library*
~~~
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
~~~
  - *Copy and paste this in your projects index file*.

# React Components

> Class based components must have one function inside it typically called render().
>"class" in  JS , "className" in JSX.
~~~
 <div id="app"></div>    //have to render here.

 class App extends React.Component { 
            render(){
            return (    // have to have one root element; <div> etc.
        <div className="app-content">  
            <h1>Hey,ninjas</h1>
        </div>
        ) 
        }
    } 
ReactDOM.render(< App /> , document.getElementById('app'));  //for render it to the dom.
~~~
>Take this code from babel site and add it to the index file.
~~~
 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
~~~
>Also in <screipt> we have to declare type like
~~~
 <script type="text/babel">
~~~
# React State
> we have to put our dynamic code inside {} curly brackets.
> state ={data}
> this.state.attribute -->to dynamically achieve data .

# DOM Events
~~~
<button onClick={this.handleClick}>Click Me</button>
~~~
~~~
handleClick(e){ console.log(e.target);}
~~~

> If we want to use this outside render() function we have to use arrow function.
~~~
handleClick = (e) =>{ console.log(this.state);}
~~~
* this.setState() is used to dynamically change the value of state without changing the actual state..

# React Froms
~~~
    -->     <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}></input>
                <button>Submit</button>
            </form>
            
    -->        handleChange = (e) =>{
                this.setState({ name : e.target.value })
            }
            
    -->        handleSubmit=(e)=>{
                e.preventDefault(); //to prevent auto refresh..
                console.log('form submitted',this.state.name)
            } 
~~~
# React Create App

* npx create-react-app app_name
* cd app_name
* npm start

# Nested Components & Props method
>  There will be a main component where other components will be rendered.
~~~
import React, { Component } from "react";
class Ninjas extends Component {
    render() {
        const { name, age, belt } = this.props;  // store this like this
        return ( 
            <div > Name: { name } </div> 
            <div> Age: {age} </div> 
            <div > Belt: { belt } </div>
        );
    }
}
export default Ninjas;  // export it like this 
~~~
> export it to main component and import it to main component
~~~
import React, {Component} from "react";
import Ninjas from "./Ninjas";  //import like this 

function App() {
  return (
    <div>
      <Ninjas name = "Ryu" age = "25" belt = "black" / >  // to render just command                                                        like this and props 
    </div>
  );
}
export default App;
~~~



