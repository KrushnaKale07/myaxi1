import React, { useState } from "react";

const Counter = () =>{
    let initialCount=0;
    let [count,setCount]=useState(initialCount)
    return(
        <div>
            <h1>count : {count}</h1>
            <br />
            <button onClick={()=>setCount(initialCount+1)}>Count:{count}</button>
            <button>INCREMENT{count}</button>
            <button>DECREMENT{count}</button>
        </div>
    )
}

export default Counter;