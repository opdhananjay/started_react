import React from "react";
import { useState } from "react";
export default function CounterApp(){
    const [count,setCount] = React.useState(0);
    return (
        <div>
            <p> count : {count} </p>
            <button onClick={()=>setCount(count + 1)}>Increase Count</button>
        </div>
    );
}