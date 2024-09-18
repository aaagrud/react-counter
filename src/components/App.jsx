import React from "react";

function App(){
    const [count, editCount] = React.useState(0);

    function add(){
        editCount(count + 1);
    }

    function subtract(){
        editCount(count - 1);
    }
    return <div className = "counter-container d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>{count}</h1>
        <div className = "button-container">
            <button className = "btn m-2 btn-primary" onClick = {subtract}>-</button>
            <button className = "btn m-2  btn-primary" onClick = {add}>+</button>
        </div>
    </div>
}

export default App;