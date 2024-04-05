import React, { useState } from 'react'

export default function State2() {
    const[Count,setCount]=useState(0)
    const Changenum =()=>{
        for(let i=0; i<5; i++){
            setCount(prev=>prev+1);
        }
    }
  return (
    <div>
        <h1>count = {Count}</h1>
        <button onClick={Changenum}>Click{Count}</button>

    </div>
  )
}
