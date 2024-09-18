import React from "react";

function App(){
    const [count, editCount] = React.useState(0);

    function add(){
        editCount(count + 1);
    }

    function subtract(){
        editCount(count - 1);
    }
    return <div className = "counter">
        <h1>{count}</h1>
        <button onClick = {subtract}>-</button>
        <button onClick = {add}>+</button>
    </div>
}

export default App;