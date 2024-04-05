import React, { useState } from 'react'

export default function States() {
    const [Count,setCount]=useState(0);
    const changenum =()=>{
        setCount(Count+1);
    }
  return (
    <div>
       <h1> count ={Count}</h1>
        <button onClick={changenum}>Click me</button>

    </div>
  )
}
