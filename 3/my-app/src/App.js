import logo from './logo.svg';
import './App.css';
import React from "react";
import ClassComponent from "./pages/classComponent/classComponent";
import ClassComp from "./pages/classComponent/classComp";

function App() {
    const user = {name: "Ali", age:22};
    const user1 = {name: "Sam", age:19};

    const sayHi = () => {
        alert("Hi my bro! (Hello world)");
    }

    return (
        <div className="App">
        <div className="App-component">
            <ClassComponent name={user.name} age={user.age}/>
            <ClassComp name={user1.name} age={user1.age}/>
        </div>
            <button className="App-btn" onClick={sayHi}>say Hi</button>
        </div>
    );
}

export default App;
